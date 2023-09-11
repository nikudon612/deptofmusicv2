import Link from "next/link";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="w-screen h-[100px]">
      <div className="flex flex-row items-center justify-between">
        <Link href={"/"} className="pl-6 pt-4">
          <Image
            src="/LogoTextTransparent.png"
            width={100}
            height={100}
            alt="Department of Music Logo"
          />
        </Link>
        <div className="flex flex-row items-center pr-10 pt-4 gap-6">
          <Link href={"/about"}>ABOUT</Link>
          <Link href={"/contact"}>CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
