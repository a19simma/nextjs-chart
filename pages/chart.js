import { useRef, useState, useEffect } from "react";

import Body from "../components/Body";
import CandleStickChart from "../components/CandleStickChart";
import Title from "../components/Title";
import * as test_data from "../lib/full_aapl.json";

export default function Chart() {
  const containerRef = useRef(null);
  const windowSize = useWindowSize();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
  }, [windowSize]);

  return (
    <div>
      <Title>Charts</Title>
      <Body>
        <div>
          <div ref={containerRef} className="relative h-full w-full">
            <CandleStickChart size={size} data={test_data} />
          </div>
        </div>
      </Body>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
