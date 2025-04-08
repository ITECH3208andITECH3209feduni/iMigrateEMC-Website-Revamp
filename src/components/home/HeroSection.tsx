import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[80vh] flex items-center" style={{ backgroundImage: 'url(/images/hero.jpeg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Bridging Trust</h1>
        <p className="text-xl md:text-2xl mb-2">From Dreams to Reality</p>
        <p className="text-lg md:text-xl mb-8">Your Visa Journey Begins Here</p>
        <Button asChild size="lg" className="bg-[#8d3044] hover:bg-[#6d2335] text-white font-medium px-8 py-6">
          <Link href="/contact-us">Contact us</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
