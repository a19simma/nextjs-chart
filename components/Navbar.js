import Link from "./Link";
import UserIcon from "./UserIcon";

export default function () {
  return (
    <>
      <nav className="absolute top-0 w-full  bg-gray-900 h-10 px-2">
        <div className="max-w-7xl w-full mx-auto md:w-4/5">
          <div className="">
            <Link text="Home" href="/" />
            <Link text="About" href="/about" />
            <UserIcon />
          </div>
        </div>
      </nav>
    </>
  );
}
