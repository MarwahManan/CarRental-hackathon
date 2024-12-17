import React from "react";


import PickDrop from "../Components/Categories/pickdrop";
import PopularCars from "../Components/Categories/cards1";
import RecommendedCars from "../Components/Categories/cards2";
import RecCars from "../Components/Categories/cards3";
import Sidebar from "../Components/Categories/sidebar";

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-72">
          <Sidebar/>
        </div>

        {/* Main Section */}
        <div className="flex-1 p-6 space-y-6">
          {/* Booking Section */}
          <div className="mb-8"> {/* Optional margin-bottom */}
            <PickDrop/>
          </div>

          {/* Popular Cars */}
          <PopularCars/>

          {/* Recommended Cars */}
          <RecommendedCars/>

          {/* Additional Cars */}
          <RecCars/>
        </div>
      </div>

      
    </div>
  );
};

export default Categories;