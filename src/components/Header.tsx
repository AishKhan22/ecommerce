"use client"; // Add this at the top to mark the component as a Client Component

import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js
import { IoPersonOutline, IoSearch, IoHeartOutline, IoCartOutline } from "react-icons/io5"; 
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 w-full bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png" // Path to the logo image inside the public folder
          alt="Furniro Logo"
          width={50} // Adjust the width of the logo as needed
          height={32} // Adjust the height of the logo as needed
        />
        <h1 className="text-xl font-bold text-black">Furniro</h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex md:gap-8">
      <Link href="/" className="hover:text-gray-900">Home</Link>
      <Link href="/shoppage" className="hover:text-gray-900">Shop</Link>
      <Link href="/blog" className="hover:text-gray-900">Blog</Link>
      <Link href="/contact" className="hover:text-gray-900">Contact</Link>
    </nav>

    
      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Profile Icon */}
        <IoPersonOutline className="text-[#000000] text-2xl w-[23px] h-[18px]" />
        
        {/* Search Icon */}
        <IoSearch className="text-[#000000] text-2xl w-[23px] h-[20px]" />
        
        {/* Wishlist Icon */}
        <IoHeartOutline className="text-[#000000] text-2xl w-[28px] h-[20px]" />
        
        {/* Cart Icon */}
        <IoCartOutline className="text-[#000000] text-2xl w-[24px] h-[22px]" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button className="text-gray-500 focus:outline-none">
          {/* Mobile menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
