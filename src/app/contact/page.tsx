import React from 'react';
import Contacthero from '@/components/Contacthero';
import ContactSection from '@/components/Contactsection'; // Assuming it's a separate component
import { Poppins } from '@next/font/google';
import Features from '@/components/Features';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Include weights as needed
});

const Contact = () => {
  return (
    <div className={poppins.className}>
      <Contacthero />
      {/* Add heading here */}
      <h2 className="text-center text-36 mt-24 sm:text-3xl md:text-4xl font-semibold text-[black] my-10">
        Get in Touch With Us
      </h2>
      <div className='flex justify-between items-center m-auto pt-2 w-[644px] h-[48px]'>
  <p className="text-center text-2xl sm:text-[10px] md:text-[14px]  text-[#9F9F9F] ">
    For More Information About Our Product & Services. Please Feel Free To Drop Us <span className="block mt-2">An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span>
  </p>
</div>
      <ContactSection />
      <Features/>
    </div>
  );
};

export default Contact;
