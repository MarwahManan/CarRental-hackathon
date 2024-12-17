"use client";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCircleDot } from "react-icons/fa6";

const PickDrop  = () => {
  return (
    <div>
      {/* Booking Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-8 bg-white p-6 rounded-lg shadow-md">
        {/* Pick-Up Section */}
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <FaCircleDot className="mr-2 text-blue-500" />
            Pick-Up
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-lg font-bold mb-1">Locations</label>
              <select className="w-full border-none rounded-md p-2">
                <option className="text-gray-900">Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Date</label>
              <select className="w-full border-none rounded-md p-2">
                <option className="text-gray-900">Select your Date</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Time</label>
              <select className="w-full border-none rounded-md p-2">
                <option className="text-gray-900">Select your Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div>
          <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600">
            <HiArrowsUpDown />
          </button>
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <FaCircleDot className="mr-2 text-blue-500" />
            Drop-Off
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-lg font-bold mb-1">Locations</label>
              <select className="w-full border-none rounded-md p-2">
                <option className="text-gray-900">Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Date</label>
              <select className="w-full border-none rounded-md p-2">
                <option className="text-gray-900">Select your Date</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold mb-1">Time</label>
              <select className="w-full border-none rounded-md p-2">
                <option className="text-gray-900">Select your Time</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDrop ;