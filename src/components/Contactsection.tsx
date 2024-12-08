'use client'

import { useState } from 'react';
import Image from 'next/image';
import Features from './Features';

const ContactSection = () => {
  return (
    <section className="text-white body-font relative">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Left Section (Contact Details: Address, Phone, Working Hours) */}
        <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-10 flex flex-col space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-3">
            <div className="p-2">
              <Image src="/Vector (1).png" alt="Address Icon" width={24} height={24} />
            </div>
            <div>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs sm:text-sm">
                ADDRESS
              </h2>
              <div className="mt-1 text-xs sm:text-sm text-gray-600">
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <div className="p-2">
              <Image src="/Vector (2).png" alt="Phone Icon" width={24} height={24} />
            </div>
            <div>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs sm:text-sm">
                PHONE
              </h2>
              <div className="leading-relaxed text-xs sm:text-sm text-gray-600">
                <p>
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-3">
            <div className="p-2">
              <Image src="/Vector (3).png" alt="Working Hours Icon" width={24} height={24} />
            </div>
            <div>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs sm:text-sm">
                WORKING HOURS
              </h2>
              <div className="leading-relaxed text-xs sm:text-sm text-gray-600">
                <p>
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form without functionality) */}
        <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="relative mb-6">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600 absolute top-[-10px] left-0 px-3 bg-white">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-[530px] bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2" // Added mt-2 for 2px space
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-600 absolute top-[-10px] left-0 px-3 bg-white">
              Email Address
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-[530px] bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2" // Added mt-2 for 2px space
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 absolute top-[-10px] left-0 px-3 bg-white">
              Subject
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-[530px] bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2" // Added mt-2 for 2px space
            />
          </div>

          <div className="relative mb-6">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600 absolute top-[-10px] left-0 px-3 bg-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-[530px] bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mt-2" // Added mt-2 for 2px space
            />
          </div>

          {/* Submit Button without functionality */}
          <button
            type="button" // Changed to 'button' so it won't trigger form submission
            className="text-white w-[273px] bg-[#B88E2F] border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default ContactSection;
