import { useRef, useState, useEffect } from "react";
import useWindowSize from "../lib/hooks/windowResize";
import http from "http";

import CandleStickChart from "../components/CandleStickChart";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Chart() {
  const containerRef = useRef(null);
  const windowSize = useWindowSize();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function callback(response) {
      let data = "";

      //another chunk of data has been received, so append it to `str`
      response.on("data", (chunk) => {
        data += chunk;
      });

      //the whole response has been received, so we just print it out here
      response.on("end", () => {
        setData(JSON.parse(data));
        setLoading(false);
      });
    }
    http.request(`http://api.simonmalm.com/ticker/aapl`, callback).end();
  }, []);

  useEffect(() => {
    setSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
  }, [windowSize, loading]);

  return (
    <div className="absolute bg-black py-10 w-full h-screen">
      <div
        ref={containerRef}
        className={`relative w-full h-full ${loading ? "hidden" : "visible"}`}
      >
        <CandleStickChart size={size} data={data} />
      </div>
      <Loader show={loading} />
      <Navbar />
      <Footer />
    </div>
  );
}
