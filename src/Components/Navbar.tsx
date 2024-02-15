import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="montserrat sticky left-0 top-0 z-20 col-span-full row-span-1 grid grid-cols-6 grid-rows-1 bg-black font-medium text-white">
      <ul className="montserrat col-span-1 flex flex-row items-center justify-evenly gap-12 font-light">
        <Link href="/">
          <li
            className={`cursor-pointer ${
              router.pathname == "/" ? "underline" : ""
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/#products">
          <li
            className={`cursor-pointer ${
              router.pathname == "/products" ? "underline" : ""
            }`}
          >
            Products
          </li>
        </Link>
      </ul>
      <div className="col-span-4 col-start-2 flex h-full flex-col items-center justify-center">
        <p className="copperplate [font-size:_clamp(2em,4.5vw,8em)]">
          Fleur d&apos;homme
        </p>
      </div>
      <div className="col-start-6 flex flex-row items-center justify-evenly">
        <User strokeWidth={1} />
        <Search strokeWidth={1} />
        <ShoppingCart strokeWidth={1} />
      </div>
    </nav>
  );
}
