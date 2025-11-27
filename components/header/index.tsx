'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <header className='fixed top-0 z-50 w-full bg-white border-b border-[#eee]'>
      <nav className='flex justify-end items-center p-5 md:px-[60px] md:py-[30px]'>
        <ul className='hidden gap-10 md:flex font-bold'>
          <li>
            <Link href='/' className='text-2xl hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='text-2xl hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link href='/projects' className='text-2xl hover:underline'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/guestbook' className='text-2xl hover:underline'>
              Guestbook
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/hyesom2'
              className='text-2xl hover:underline'
              target='blank'
            >
              Github
            </Link>
          </li>
        </ul>

        <div className='flex justify-center items-center md:hidden'>
          {open ? (
            <div className='flex justify-end items-center'>
              <button className='cursor-pointer' onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>
          ) : (
            <button className='cursor-pointer' onClick={() => setOpen(true)}>
              <Menu size={24} />
            </button>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            key='mobile-menu'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex flex-col justify-start items-start w-full h-screen p-6 gap-6 mt-10 text-2xl text-black font-semibold`}
          >
            <li>
              <Link
                href='/'
                className='hover:underline'
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='hover:underline'
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/projects'
                className='hover:underline'
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/guestbook'
                className='hover:underline'
                onClick={() => setOpen(false)}
              >
                Guestbook
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/hyesom2'
                className='hover:underline'
                onClick={() => setOpen(false)}
              >
                Github
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
