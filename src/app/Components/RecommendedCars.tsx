import React from "react";
import CarCard from "./CarCard";
import Link from "next/link";

// Responsive RecommendedCar Component
export const RecommendedCar: React.FC = () => {
  const cars = [
    {
      name: "Tesla Model 3",
      type: "Electric",
      image:"/images/Car(5).png " ,
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 100,
      favoriteIcon: "/images/Like.png",
    },
    {
      name: "Ford Mustang",
      type: "Gasoline",
      image: "/images/Car(6).png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80,
      favoriteIcon: "/images/Vector.png",
    },
    {
      name: "BMW X5",
      type: "Diesel",
      image: "/images/Car(7).png",
      fuelCapacity: "70 L",
      transmission: "Automatic",
      capacity: "7 seats",
      price: 150,
      favoriteIcon: "/images/Like.png",
    },
    {
      name: "Audi A6",
      type: "Hybrid",
      image: "/images/Car(8).png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 120,
      favoriteIcon: "/images/Vector.png",
    },
    {
      name: "Mercedes-Benz C-Class",
      type: "Gasoline",
      image: "/images/Car(9).png",
      fuelCapacity: "65 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 140,
      favoriteIcon: "/images/Like.png",
    },
    {
      name: "Porsche 911",
      type: "Gasoline",
      image: "/images/Car(10).png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 200,
      favoriteIcon: "/images/Vector.png",
    },
    {
      name: "Chevrolet Camaro",
      type: "Gasoline",
      image: "/images/Car(11).png",
      fuelCapacity: "70 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 110,
      favoriteIcon: "/images/Like.png",
    },
    {
      name: "Nissan Altima",
      type: "Hybrid",
      image: "/images/Car(12).png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 90,
      favoriteIcon: "/images/Vector.png",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 md:p-8">
      {/* Section Header */}
      <h2 className="text-lg font-semibold text-slate-900 text-left mb-6 md:text-xl">
        Recommended Car
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>

      {/* Show More Button */}
      <div className=" mt-12  flex-wrap flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto gap-6 ">

      <Link href="/categories"><button className="bg-[#3563e9] px-6 py-3 text-white rounded-md hover:bg-[#274bb8] flex justify-center">
            Show More Cars
          </button></Link>
     


        <div className="text-gray-600 text-end ml-[500px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">120 Cars</div>
        </div>
      </div>
    
  );
};

export default RecommendedCar;