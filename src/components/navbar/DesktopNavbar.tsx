"use client";

import Link from "next/link";
import { NavBarSearchBox } from "../ui";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../Logo";
import { Suspense } from "react";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAppSelector } from "@/store/hooks";

export default function NavBar() {
  return (
    <nav className="py-5 border-b border-gray-100">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-x-10 items-center">
          <Logo />

          <div className="hidden lg:block w-[300px]">
            <Suspense fallback={<p>Loading search params...</p>}>
              <NavBarSearchBox />
            </Suspense>
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

          <div className="h-[40px] border-l border-gray-500"></div>

          <div className="flex items-center gap-x-4">
            <NotificationIcon />

            <div>
              <Image
                alt="User Profile"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
                height="35"
                width="35"
                className="rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center lg:hidden">
          <NotificationIcon />

          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

function NotificationIcon() {
  const { favoriteBlogs } = useAppSelector((state) => state.favoriteBlogs);

  return (
    <div>
      <Link href="/favorite-blogs">
        <div className="text-4xl relative">
          <div className="absolute -top-2 left-4 text-[13px] bg-red-500 text-white rounded-full h-[20px] px-[7px] flex justify-center items-center">
            {favoriteBlogs.length}
          </div>

          <IoIosNotificationsOutline />
        </div>
      </Link>
    </div>
  );
}
