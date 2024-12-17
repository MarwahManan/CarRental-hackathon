
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import PopularCar from "./Components/PopularCar";
import RecommendedCar from "./Components/RecommendedCars";

import Hero from "./Components/Hero";


const Home = () => {
  return (
    <div className="bg-#F6F7F9"> 
       <Hero/>
      <PopularCar/>
       <RecommendedCar/>
      
    </div>
  )
}

export default  Home
