import { useRef, useState, useEffect } from "react";
import https from "https";

import useWindowSize from "../hooks/windowResize";
import useDocumentListener from "../hooks/documentListener";

import CandleStickChart from "../components/CandleStickChart";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchWindow from "../components/SearchWindow";

export default function Chart() {
  const containerRef = useRef(null);
  const windowSize = useWindowSize();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [ticker, setTicker] = useState(null);
  const [search, setSearch] = useState(true);
  const changeTicker = (ticker) => {
    setTicker(ticker);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode > 64 && e.keyCode < 123) setSearch(true);
    if (e.key == "Escape") setSearch(false);
  };

  useDocumentListener(handleKeyDown);

  const fetchData = () => {
    function callback(response) {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        setData(JSON.parse(data));
        setLoading(false);
      });
    }
    if (ticker == null || ticker == "") return;
    setLoading(true);
    setSearch(false);
    const url = `https://api.simonmalm.com/ticker/${ticker}`;
    https.request(url, callback).end();
  };

  useEffect(() => {
    fetchData();
  }, [ticker]);

  useEffect(() => {
    setSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
  }, [windowSize, loading]);

  return (
    <div className="absolute bg-black w-full h-full">
      <Navbar />
      <SearchWindow visible={search} setTicker={changeTicker} />
      <div
        ref={containerRef}
        className={`relative h-[calc(100%-5rem)] ${
          loading ? "hidden" : "visible"
        }`}
      >
        <CandleStickChart size={size} data={data} />
      </div>
      <Loader show={loading} />
      <Footer />
    </div>
  );
}
