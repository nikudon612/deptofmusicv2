import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-screen h-[100px]">
      <div className="flex flex-row items-center justify-between">
        <Link href={"/"} className="pl-6 pt-4">
          DEPT OF MUSIC
        </Link>
        <div className="flex flex-row items-center pr-6 pt-4 gap-6">
          <Link href={"/about"}>ABOUT</Link>
          <div>CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
