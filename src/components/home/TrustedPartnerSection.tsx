import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TrustedPartnerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for Visa Guidance and Educational Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At <span className="font-semibold">iMigrate EMC SMC</span>, we specialize in helping individuals from Pakistan,
              India, Iran, Bangladesh, Sri Lanka, and Dubai navigate their visa options for
              opportunities in Australia, New Zealand, Canada, the USA, the UK, and Europe.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team provides comprehensive visa guidance, assisting clients in
              understanding visa pathways, requirements, and the application process.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="bg-[#8d3044]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8d3044] font-bold text-xl">12</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-medium">Countries</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#8d3044]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8d3044] font-bold text-xl">15</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-medium">Partners</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#8d3044]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8d3044] font-bold text-xl">8</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-medium">Head Offices</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#8d3044]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8d3044] font-bold text-xl">107</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-medium">Trusted Clients</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild className="bg-[#8d3044] hover:bg-[#6d2335] text-white flex items-center">
                <Link href="/about-us">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/banner.jpeg"
              alt="Immigration consultant with client"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerSection;
