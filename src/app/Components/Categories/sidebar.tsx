"use client";
import { useState } from "react";

export default function  Sidebar () {
  const [price, setPrice] = useState(100);

  return (
    <div className=" md:w-72 bg-white p-6 border-r shadow-md flex flex-col overflow-y-auto">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">Type</h3>
        {["Sport", "SUV", "MPV", "Sedan"].map((type) => (
          <div key={type} className="flex items-center mb-3">
            <input
              type="checkbox"
              id={type}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={type} className="ml-2 text-sm text-gray-700">
              {type} <span className="text-gray-400">(10)</span>
            </label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4">Capacity</h3>
        {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
          <div key={capacity} className="flex items-center mb-3">
            <input
              type="checkbox"
              id={capacity}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={capacity} className="ml-2 text-sm text-gray-700">
              {capacity} <span className="text-gray-400">(10)</span>
            </label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Price</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full h-2 bg-blue-100 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-700 mt-2">Max. ${price.toFixed(2)}</p>
      </div>
    </div>
  );
}