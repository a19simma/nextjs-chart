import { useRef, useState, useEffect } from "react";
import useWindowSize from "../lib/hooks/windowResize";

import CandleStickChart from "../components/CandleStickChart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
    <div className="absolute py-10 w-full h-screen">
      <div ref={containerRef} className="relative w-full h-full">
        <CandleStickChart size={size} data={test_data} />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}
