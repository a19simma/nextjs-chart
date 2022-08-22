import Link from "next/link";
import UserIcon from "./UserIcon";

export default function Navbar() {
  return (
    <>
      <nav className="relative top-0 left-0 w-full bg-black h-10">
        <div className="w-full mx-auto md:w-3/5">
          <div className="">
            <Link href="/">
              <a className="float-left text-gray-300  hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-md font-medium">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="float-left text-gray-300  hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-md font-medium">
                About
              </a>
            </Link>
            <Link href="/chart">
              <a className="float-left text-gray-300  hover:bg-gray-500 hover:text-white px-3 py-2 rounded-sm text-md font-medium">
                Chart
              </a>
            </Link>
            <UserIcon />
          </div>
        </div>
      </nav>
    </>
  );
}
