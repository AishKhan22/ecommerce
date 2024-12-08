import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Furniro Information */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-bold mb-4">Furniro</h3>
          <p className="text-sm text-[#9F9F9F] leading-relaxed">
            400 University Drive, Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Section 2: Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl text-[#9F9F9F] font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellow-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Help */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl  text-[#9F9F9F] font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-yellow-500">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellow-500">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellow-500">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl  text-[#9F9F9F] font-bold mb-4">Newsletter</h3>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-sm rounded-md border border-gray-300 w-full sm:w-2/3"
            />
            <button className="text-black underline p-2 text-sm rounded-md w-full sm:w-1/3">
            SUBSCRIBE
            </button>


          </div>
          </div>
          </div>

      {/* Bottom Copyright Section */}
      <div className="text-left mt-8 text-sm text-gray-500">
        <p>&copy; 2023 Furniro. All rights reserved.</p>
          </div>
        </footer>
  );
};
