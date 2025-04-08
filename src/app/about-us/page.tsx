import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TeamSection from '@/components/home/TeamSection';

export const metadata = {
  title: 'About Us - iMigrate EMC',
  description: 'Learn about iMigrate EMC, our mission, and our team. We provide expert visa guidance for students, visitors, and professionals.',
};

export default function AboutUsPage() {
  return (
    <main>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">About us</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About us</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong className="font-semibold">iMigrate EMC SMC</strong> is a visa consultancy firm based in Islamabad,
                  Pakistan. We assist individuals with various visa categories, including student, immigration, work, and visit visas.
                </p>
                <p>
                  While we provide general visa guidance, <strong className="font-semibold">we do not offer immigration assistance as defined under Australian law</strong>.
                  Any cases requiring such assistance are referred to registered <strong className="font-semibold">Migration Agents (MARA)</strong>.
                </p>
                <p>
                  We operate in collaboration with <strong className="font-semibold">iMigrate EMC Pty Ltd</strong>, a separate entity registered in Victoria, Australia.
                  Our website is owned and managed by our Islamabad office, with both businesses maintaining an agreement to provide services while operating
                  independently and in compliance with all applicable regulations.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-[#8d3044] hover:bg-[#6d2335] text-white">
                  <Link href="/contact-us" className="inline-flex items-center">
                    Contact us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/banner.jpeg"
                alt="iMigrate EMC Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Expert Visa Guidance for Various Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Permanent Resident Visa',
                description: 'We specialize in providing consultation on permanent residency visa options, helping you understand the pathways to becoming a permanent resident.',
              },
              {
                title: 'Work Visa',
                description: 'We assist clients in obtaining work permits and visas, ensuring you meet the necessary requirements for a safe and efficient employment experience abroad.',
              },
              {
                title: 'Visitor Visa',
                description: 'Our team offers guidance on visitor visa applications, enabling you to explore your desired destination for up to 6 months, with clear, easy-to-follow steps.',
              },
              {
                title: 'Student Visa',
                description: 'We provide comprehensive support for students seeking to study abroad. From understanding visa requirements to guiding you through the application process.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </main>
  );
}
