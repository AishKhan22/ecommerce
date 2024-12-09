import React from 'react';
import Image from 'next/image';

const FilterBar = () => {
  return (
    <div className="flex flex-wrap mb-9 items-center justify-between p-4 bg-[#F9F1E7] border rounded-md w-full max-w-[1440px] px-[5px]">
      {/* Left Section */}
      <div className="flex items-center ml-9 flex-wrap space-y-2 md:space-y-0 md:space-x-4">
        {/* Filter Button */}
        <button className="flex items-center space-x-2 text-black font-medium">
          <Image src="/filter.png" alt="Filter Icon" width={16} height={16} />
          <span>Filter</span>
        </button>
        {/* Grid/List Toggle */}
        <div className="flex items-center space-x-2">
          <button className="w-6 h-6 flex justify-center items-center rounded-md">
            <Image src="/Vector (4).png" alt="Grid Icon" width={16} height={16} />
          </button>
          <button className="w-6 h-6 flex justify-center items-center rounded-md">
            <Image src="/Vector (5).png" alt="List Icon" width={16} height={16} />
          </button>
        </div>
        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-6 bg-[#9F9F9F]"></div>
        {/* Results Count */}
        <span className="text-black text-sm">Showing 1–16 of 32 results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center mr-9 flex-wrap space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
        {/* Show Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="text-[#000000] text-sm">
            Show
          </label>
          <select
            id="show"
            className="border rounded-md p-1 text-sm bg-white"
            defaultValue="16"
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sortBy" className="text-[#000000] text-sm">
            Short by
          </label>
          <select
            id="sortBy"
            className="border rounded-md p-1 text-sm bg-white"
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
