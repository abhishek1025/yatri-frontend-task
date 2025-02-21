"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Logo from "../Logo";
import { NavBarSearchBox } from "../ui";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  useEffect(() => {
    closeMenu();
  }, [pathName]);

  return (
    <div className="block lg:hidden">
      <button className="hamburger-button" onClick={openMenu}>
        ☰
      </button>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <div
          className={`menu-content w-[100%] sm:w-[60%]  bg-black  ${
            isOpen ? "open" : ""
          }`}
        >
          <button
            className="text-3xl close-button absolute right-4 top-4 font-bold z-40"
            onClick={closeMenu}
          >
            ✕
          </button>

          <div className="menu-header p-4 space-y-7">
            <Logo />

            <Suspense fallback={<p>Loading search params...</p>}>
              <NavBarSearchBox />
            </Suspense>
          </div>

          <ul className="menu-list">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/">Blogs</Link>
            </li>

            <li>
              <Link href="/">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
