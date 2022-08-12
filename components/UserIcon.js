import { useState } from "react";
import UserSVG from "../public/user.svg";
import LoginWindow from "./LoginWindow";
import { useSession } from "next-auth/react";

export default function () {
  const [visible, setVisible] = useState(false);
  const { data: session } = useSession();

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div>
      <div
        className="relative float-right w-12 h-10 rounded-sm cursor-pointer hover:bg-gray-500"
        title={session ? session.user.name : "undefined"}
      >
        <button
          onClick={toggleVisible}
          className="relative mx-2 my-1 text-gray-300 hover:text-white w-8 h-8"
        >
          {session ? (
            <img
              src={session.user.image}
              className="relative m-auto rounded-full"
            />
          ) : (
            <UserSVG />
          )}
        </button>
      </div>
      <LoginWindow visible={visible} />
    </div>
  );
}
