'use client';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import { Button, NavBarSearchBox } from '../ui';
import Logo from '../Logo';
import { usePathname } from 'next/navigation'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname()

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  useEffect(() => {
    closeMenu();
  }, [pathName]);

  return (
    <div className='block lg:hidden'>
      <button className='hamburger-button' onClick={openMenu}>
        ☰
      </button>
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <div
          className={`menu-content w-[100%] sm:w-[60%]  bg-black  ${
            isOpen ? 'open' : ''
          }`}>
          <button
            className='close-button absolute right-4 top-4 font-bold z-40'
            onClick={closeMenu}>
            ✕
          </button>

          <div className='menu-header p-4 space-y-5'>
            <Logo />

            <NavBarSearchBox />
          </div>

          <ul className='menu-list'>
            <li>
              <Link href='/'>Home</Link>
            </li>

            <li>
              <Link href='/'>Blogs</Link>
            </li>

            <li>
              <Link href='/'>About Us</Link>
            </li>
          </ul>

          <div className='p-4'>
              <Button className='w-full py-3'>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

