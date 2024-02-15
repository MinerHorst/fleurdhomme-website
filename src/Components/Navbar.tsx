import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="sticky top-0 left-0 col-span-full row-span-1 grid grid-cols-6 grid-rows-1 font-medium z-20 text-white montserrat bg-black">
      <ul className="col-span-1 montserrat font-light flex-row gap-12 flex justify-evenly items-center">
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
      <div className="h-full col-start-2 col-span-4 flex flex-col justify-center items-center">
        <p className="[font-size:_clamp(2em,4.5vw,8em)] copperplate">
          Fleur d'homme
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
