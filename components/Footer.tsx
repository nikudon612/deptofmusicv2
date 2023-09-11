import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-[200px] w-screen">
      <div className="flex flex-row items-center justify-between">
        <div className="pl-6">
          <Link href={"/"}>
            <Image
              src={"/Eagle.png"}
              width={100}
              height={100}
              alt="DOM Eagle"
            />
          </Link>
        </div>
        <div className="pr-10 flex flex-row items-center gap-6">
          <div className="flex flex-col">
            <Link href={"/about"}>About</Link>
            <Link href={"/"} className="text-m">
              Instagram
            </Link>
          </div>
          <div>
            <div className="text-xs">
              © 2023 Dept of Music. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
