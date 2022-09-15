import { useState } from "react";
import https from "https";

export default function SearchWindow({ visible, setTicker }) {
  const [list, setList] = useState([]);

  const fetchSuggestions = (e) => {
    const input = e.target.value;
    function callback(response) {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        setList(JSON.parse(data));
      });
    }
    if (input != "") {
      https
        .request(
          `https://api.simonmalm.com/company/suggestions/${e.target.value}`,
          callback
        )
        .end();
    } else setList([]);
  };

  return visible ? (
    <div className="absolute z-30 left-1/4 top-2/5 w-1/2 bg-stone-800">
      <input
        placeholder="Type to search and press enter"
        type="text"
        onInput={fetchSuggestions}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setTicker(list[0].ticker);
          }
        }}
        className="w-full h-8 bg-stone-800 text-gray-200 text-lg font-mono font-medium"
      ></input>
      <ul className="">
        {list.map(({ name, ticker }) => (
          <li
            style={{ border: "1px solid gray" }}
            onMouseDown={(e) => {
              setList([]);
            }}
            className="bg-stone-800 text-gray-300"
            key={ticker}
          >
            {name} ---- {ticker}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
