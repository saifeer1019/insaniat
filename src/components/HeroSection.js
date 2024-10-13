 import React from 'react'
 import Image from 'next/image'


 
// src/components/HeroSection.js
const HeroSection = () => {
  return (
    <div className="flex 1">
      <section className="relative w-full sm:h-[700px] py-12 md:py-24 lg:py-32 xl:py-48" style={{ backgroundImage: 'url(https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center relative z-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Explore the Sundarbans
            </h1>
            <p className="mx-auto max-w-[80vw] text-gray-300 md:text-xl">
              Embark on a 7-10 day adventure through the world's largest mangrove forest. Experience nature like
              never before.
            </p>
          </div>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;