import React from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <div className="relative bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="md:max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Batts Booking Buddy</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">Develop your Table Tennis skills with our expert coaching programs for all levels from beginners to advanced players.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            
            
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-12 bg-white" style={{
      clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'
    }}></div>
    </div>;
};
export default Hero;