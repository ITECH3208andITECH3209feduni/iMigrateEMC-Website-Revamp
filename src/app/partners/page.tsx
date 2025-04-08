import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, Globe } from 'lucide-react';

export const metadata = {
  title: 'Our Partners - iMigrate EMC',
  description: 'Learn about iMigrate EMC partners. We collaborate with universities, businesses, and immigration agencies across the globe.',
};

export default function PartnersPage() {
  const partners = [
    {
      id: 'partner1',
      name: 'Australian Universities Network',
      category: 'Education',
      description: 'A consortium of top Australian universities that work with iMigrate EMC to provide educational opportunities for international students.',
      logo: '/images/reference1.png',
    },
    {
      id: 'partner2',
      name: 'Global Employment Solutions',
      category: 'Employment',
      description: 'A network of employers across various industries that partner with us to provide work opportunities for skilled immigrants.',
      logo: '/images/reference2.png',
    },
    {
      id: 'partner3',
      name: 'International Tourism Board',
      category: 'Tourism',
      description: 'We collaborate with tourism boards in various countries to facilitate smooth travel experiences for visitors.',
      logo: '/images/reference3.png',
    },
  ];

  return (
    <main>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Our Partners</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Network</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading universities, businesses, and immigration agencies across the globe to provide our clients with the best opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <Card key={partner.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
                  <div className="relative h-24 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold">{partner.name}</CardTitle>
                    <span className="text-sm font-medium px-3 py-1 bg-[#8d304411] text-[#8d3044] rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Become Our Partner</h2>
              <p className="text-lg text-gray-700 mb-4">
                We are always looking to expand our network of partners to provide our clients with the best opportunities. If you are interested in partnering with us, please get in touch.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                As our partner, you will have access to our network of clients and our expertise in visa guidance and immigration services.
              </p>
              <Button asChild className="bg-[#8d3044] hover:bg-[#6d2335] text-white">
                <Link href="/register-franchise" className="inline-flex items-center">
                  Become Our Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Building className="h-10 w-10 text-[#8d3044] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Institutions</h3>
                <p className="text-gray-700">
                  Partner with us to attract qualified international students to your institution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="h-10 w-10 text-[#8d3044] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Immigration Agencies</h3>
                <p className="text-gray-700">
                  Collaborate with us to provide comprehensive immigration services to clients worldwide.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Building className="h-10 w-10 text-[#8d3044] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Employers</h3>
                <p className="text-gray-700">
                  Work with us to find qualified international talent for your business needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="h-10 w-10 text-[#8d3044] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tourism Boards</h3>
                <p className="text-gray-700">
                  Partner with us to promote tourism to your country through our visa services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#8d3044] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Global Network</h2>
          <p className="text-lg mb-8 opacity-90">
            Partner with iMigrate EMC to expand your reach and provide valuable services to international clients.
          </p>
          <Button asChild size="lg" className="bg-white text-[#8d3044] hover:bg-gray-100">
            <Link href="/register-franchise">Become a Partner Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
