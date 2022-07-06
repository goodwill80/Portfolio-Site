import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
     {/* *** Main Container - Main Menu */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* 1. LOGO */}
        <Image src="/../public/assets/navLogo.png" alt="/" width="125" height="50" />
        {/* 2. LINKS MENU Main Container*/}
        <div>
            {/* 2a. Main menu */}
            <ul className="hidden md:flex">
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                </Link>
                <Link href="/">
                    <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                </Link>
            </ul>
           {/* 2b. Hamburger */}
           <div className="md:hidden">
            <AiOutlineMenu size={25}/>
           </div>
        </div>
      </div>

     {/* *** Secondary Container - Sidebar Menu (NOTE: overlay - bg-black/70 */}
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70"> 
        {/* Sidebar Menu */}
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen 
        bg-[#ecf0f3] p-10 ease-in duration-500">
            {/* 1st Section of Sidebar - Logo, close btn and Mission statement */}
            <div>
                {/* a. Image and Close btn */}
                <div className="flex w-full items-center justify-between">
                    {/* Image */}
                    <Image src="/../public/assets/navLogo.png" alt="/" width="87" height="35" />
                    {/* Close Btn */}
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose />
                    </div>
                </div>
                {/* b. Mission Statement below Logo */}
                <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%]">Let's build something meaningful together</p>
                </div>
            </div>
            {/* 2nd Section of Sidebar - Menu links & Social Icons */}
            <div className="py-4 flex flex-col">
                {/* Menu Links */}
                <ul>
                    <Link href="/">
                        <li className="py-4 text-sm">Home</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm">About</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm">Skills</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm">Projects</li>
                    </Link>
                    <Link href="/">
                        <li className="py-4 text-sm">Contact</li>
                    </Link>
                </ul>
                {/* Social Icons */}
                <div className="pt-40">
                    {/* Tagline */}
                    <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                    {/* Icons */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
