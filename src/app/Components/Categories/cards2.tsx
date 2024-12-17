"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart} from "react-icons/fa";


const RecommendedCars = () => {
    const [cars, setCars] = useState([
        {
          id: 1,
          name: "All New Rush",
          type: "Sport",
          price: "$72.00/day",
          favorite: true,
          image: "/rolls1.png",
        },
        {
          id: 2,
          name: "Cr-V",
          type: "SUV",
          price: "$80.00/day",
          favorite: true,
          image: "/rolls2.png",
        },
        {
          id: 3,
          name: "All New Terios",
          type: "SUV",
          price: "$74.00/day",
          favorite: false,
          image: "/rolls1.png",
        },
      ]);
    
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
          <p className="text-lg font-semibold mt-4">{car.price}</p>
          <Link href="/billing"> <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Rent Now</button></Link>
          
        </div>
      ))}
    </div>
   
  )
}

export default RecommendedCars