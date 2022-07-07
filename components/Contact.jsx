import React from 'react'
import ContactImg from '../public/assets/contact.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">

     {/* Container for Page Title and Image */}
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">

        {/* 1. Title */}
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get In Touch</h2>

        {/* 2. Image and Form Container */}
        <div className="grid lg:grid-cols-5 gap-8">

                {/* Left col - Image and Social Icons */}
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="lg:p-4 h-full">
                        {/* Image and descriptions */}
                        <div>
                            <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={ContactImg} alt="/" />
                        </div>
                        <div>
                            <h2 className="py-2">Jonathan Ho</h2>
                            <p>Full-Stack Developer</p>
                            <p className="py-4">I am available for freelance or full-time positions. Contact me and let's talk</p>
                        </div>
                        {/* Social Icons */}
                        <div>
                            <p className="uppercase pt-8">Connect with me</p>
                            <div className="flex items-center justify-between py-4">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaFacebookSquare />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right col - Form */}
                <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                    <div className="p-4">
                        <form>
                            {/* Name and Phone number - 2 cols*/}
                            <div className="grid md:grid-cols-2 gap-4 py-2">
                                {/* Name */}
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Name</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                </div>
                                {/* Phone */}
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Phone Number</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                </div>
                            </div>
                            {/* Email field - 1 col */}
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Email</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                            </div>
                            {/* Subject field - 1 col */}
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Subject</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                            </div>
                            {/* Text Area field - 1 col */}
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Message</label>
                                <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10"></textarea>
                            </div>
                            <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                        </form>
                    </div>
                </div>
        </div>
        {/* Arrow Up */}
        <div className="flex justify-center py-12">
            <Link href="/">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className="m-auto text-[#5651e5]" size={30} />
                </div>
            </Link>
        </div>

       </div>
    </div>
  )
}

export default Contact
