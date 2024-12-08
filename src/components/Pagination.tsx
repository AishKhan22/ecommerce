// components/Pagination.tsx
import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
    <button className="w-[60px] h-[60px] bg-[#B88E2F] hover:bg-gray-300 rounded-md text-gray-800 text-sm flex justify-center items-center mt-5 mb-3">
      1
    </button>
    <button className="w-[60px] h-[60px] bg-[#FAF3EA] hover:bg-gray-300 rounded-md text-gray-800 text-sm flex justify-center items-center mt-5 mb-3">
      2
    </button>
    <button className="w-[60px] h-[60px] bg-[#FAF3EA] hover:bg-gray-300 rounded-md text-gray-800 text-sm flex justify-center items-center mt-5 mb-3">
      3
    </button>
    <button className="w-[60px] h-[60px] bg-[#FAF3EA] hover:bg-gray-300 rounded-md text-gray-800 text-sm flex justify-center items-center mt-5 mb-3">
      Next
    </button>
  </div>
  

  );
};

export default Pagination;
