import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaFacebookSquare } from 'react-icons/fa';


function Navbar() {
    const [ nav, setNav ] = useState(false);
    const [ shadow, setShadow ] =useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    // Handle Navbar shadow when scrolling
    useEffect(()=>{
        const handleshadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener("scroll", handleshadow);
    }, [])

  return (
    <div className={ shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
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
                <Link href="/#about">
                    <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                </Link>
                <Link href="/#skills">
                    <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                </Link>
                <Link href="/#projects">
                    <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                </Link>
                <Link href="/#contact">
                    <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                </Link>
            </ul>
           {/* 2b. Hamburger */}
           <div onClick={ handleNav } className="md:hidden">
            <AiOutlineMenu size={25}/>
           </div>
        </div>
      </div>

     {/* *** Secondary Container - Sidebar Menu (NOTE: overlay - bg-black/70 */}
      <div className={ nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70": ""}> 
        {/* Sidebar Menu */}
        <div className={ nav 
        ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
            {/* 1st Section of Sidebar - Logo, close btn and Mission statement */}
            <div>
                {/* a. Image and Close btn */}
                <div className="flex w-full items-center justify-between">
                    {/* Image */}
                    <Image src="/../public/assets/navLogo.png" alt="/" width="87" height="35" />
                    {/* Close Btn */}
                    <div onClick={ handleNav } className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
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
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaFacebookSquare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
