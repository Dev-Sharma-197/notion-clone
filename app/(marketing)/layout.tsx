"use client";

import React from 'react';

import Navbar from './_components/Navbar';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full">
      <Navbar />
      <div className="hidden sm:block fixed bottom-0 top-0 w-full overflow-hidden bg-black z-0 opacity-60">
        <div className="absolute bg-gradient-to-b blur-[228px] delay-300 from-[#B3A7FF] h-[818px] left-1/2 mix-blend-normal motion-safe:animate-header-gradient-2 origin-center rotate-[-9deg] rounded-full to-[rgba(121,223,255,0)] top-1/2 translate-x-[-2%] translate-y-[-18%] w-[1242px] will-change-transform">
        </div>
        <div className="absolute bg-gradient-to-b blur-[142px] from-[#8E7BFF80] h-[1060px] left-1/2 mix-blend-normal motion-safe:animate-header-gradient-1 origin-center rounded-full to-[#79DFFF80] top-1/2 translate-x-[-35%] translate-y-[-65%] w-[928px] will-change-transform">
        </div>
        <div className="will-change-transform motion-safe:animate-header-gradient-3 w-[1242px] h-[818px] translate-x-[-102%] translate-y-[-52%] rotate-[-9deg] top-[50%] left-[50%] origin-center absolute rounded-full bg-gradient-to-b from-[#30E9BE] to-[rgba(121,223,255,0)] mix-blend-normal blur-[228px] delay-600">
        </div>
        <div className="absolute bg-gradient-to-t bottom-0 from-white to-transparent w-full">
        </div>
      </div>
      <div className="fixed bottom-0 gradient-background__noise hidden left-0 sm:bg-[url('/noise-bg.png')] sm:block top-0 w-full"></div>
      <main className='min-h-screen pt-40 mt-[90px] z-10 relative flex flex-col'>
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
