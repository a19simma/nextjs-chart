import { useState, useRef, useEffect } from "react";
import UserSVG from "../public/user.svg";
import LoginWindow from "./LoginWindow";

export default function () {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    console.log(visible);
    setVisible(!visible);
  }

  return (
    <div>
      <div className="relative float-right w-10 h-10 rounded-sm cursor-pointer hover:bg-gray-700">
        <button
          onClick={toggleVisible}
          className="relative m-1 text-gray-300 hover:text-white w-8 h-8"
        >
          <UserSVG />
        </button>
        <LoginWindow visible={visible} />
      </div>
    </div>
  );
}
