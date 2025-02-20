"use client";

import Link from "next/link";
import { Button, NavBarSearchBox } from "../ui";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../Logo";

export default function NavBar() {
  return (
    <nav className="py-5 border-b border-gray-100">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-x-10 items-center">
          <Logo />

          <div className="hidden lg:block w-[300px]">
            <NavBarSearchBox />
          </div>
        </div>

        {/* Nav */}
        <div className="hidden lg:flex gap-7 items-center">
          <div className="flex gap-5">
            <Link href="/" className="hover:underline hover:text-primary-700">
              Home
            </Link>
            <Link href="/" className="hover:underline hover:text-primary-700">
              Blogs
            </Link>

            <Link href="/" className="hover:underline hover:text-primary-700">
              About Us
            </Link>
          </div>

          <div>
            <Button className="w-full py-2">Get Started</Button>
          </div>
        </div>

        <HamburgerMenu />
      </div>
    </nav>
  );
}
