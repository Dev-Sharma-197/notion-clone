import React from 'react';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full dark:bg-[#1F1F1F]'>
      <Navbar />
      <main className='h-full pt-40'>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
