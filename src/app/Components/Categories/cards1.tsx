"use client";
import Link from "next/link";
import Image from "next/image";
import { FaHeart} from "react-icons/fa";

import React from 'react'

const PopularCars = () => {
  
    const cars = [
        {
          id: 1,
          name: "Koenigsegg",
          type: "Sport",
          price: "$99.00/day",
          favorite: true,
          image: "/koen.png",
        },
        {
          id: 2,
          name: "NissanGT - R",
          type: "Sport",
          price: "$99.00/day",
          favorite: false,
          image: "/nisaan.png",
        },
        {
          id: 3,
          name: "Rolls-Royce",
          type: "Sedan",
          price: "$99.00/day",
          favorite: true,
          image: "/rolls.png",
        },
      ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {cars.map((car) => (
        <div key={car.id} className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <FaHeart className={`text-2xl ${car.favorite ? "text-red-500" : "text-gray-300"}`} />
          </div>
          <p className="text-sm text-gray-500 mb-4">{car.type}</p>
          <Image src={car.image} alt={car.name} width={200} height={100} className="mx-auto object-contain" />
       
            <p className="text-lg font-semibold">{car.price}</p>
           <Link href="/billing"> <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Rent Now</button></Link>
          </div>
       
      ))}
    </div>
  )
}

export default PopularCars