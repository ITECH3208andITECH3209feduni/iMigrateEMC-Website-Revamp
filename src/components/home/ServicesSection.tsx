import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Education Visa',
      description: 'Access educational opportunities in Australia, New Zealand, Canada, UK, and more with a Student Visa. Effortlessly extend for further studies.',
      image: '/images/service1.jpeg',
      link: '/student-visa',
    },
    {
      id: 2,
      title: 'Business/Skilled Immigration Visa',
      description: 'Unlock Global Opportunities with Our Business and Skilled Immigration Visa Services. Your Path to Success Made Simple.',
      image: '/images/service2.jpeg',
      link: '/work-visa',
    },
    {
      id: 3,
      title: 'Visit/Tourism Visa',
      description: 'Discover the World with Our Visit and Tourism Visa Services. Your Gateway to Memorable Journeys.',
      image: '/images/service3.jpeg',
      link: '/visit-visa',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in helping individuals navigate their visa options for opportunities across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt={service.title}
                  className="object-cover"
                />
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-[#8d3044] hover:text-[#6d2335] hover:bg-[#8d304411] p-0 flex items-center">
                  <Link href={service.link}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
