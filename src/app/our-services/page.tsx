import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, GraduationCap, Briefcase, Globe } from 'lucide-react';

export const metadata = {
  title: 'Our Services - iMigrate EMC',
  description: 'Explore our visa services including student visas, work visas, and visit visas. We provide expert guidance for your immigration needs.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'student-visa',
      title: 'Student Visa',
      icon: <GraduationCap className="h-16 w-16 text-[#8d3044]" />,
      description: 'Access educational opportunities in Australia, New Zealand, Canada, UK, and more with a Student Visa.',
      features: [
        'Complete guidance on university and course selection',
        'Document preparation and verification',
        'Application submission and follow-up',
        'Pre-departure briefing and orientation',
        'Post-arrival support services',
      ],
      link: '/student-visa',
      image: '/images/service1.jpeg',
    },
    {
      id: 'work-visa',
      title: 'Business/Skilled Immigration Visa',
      icon: <Briefcase className="h-16 w-16 text-[#8d3044]" />,
      description: 'Unlock global opportunities with our Business and Skilled Immigration Visa Services.',
      features: [
        'Skills assessment and qualification evaluation',
        'Job market analysis and opportunity identification',
        'Complete documentation guidance',
        'Assistance with employer sponsorship requirements',
        'Long-term settlement planning',
      ],
      link: '/work-visa',
      image: '/images/service2.jpeg',
    },
    {
      id: 'visit-visa',
      title: 'Visit/Tourism Visa',
      icon: <Globe className="h-16 w-16 text-[#8d3044]" />,
      description: 'Discover the world with our Visit and Tourism Visa Services. Your gateway to memorable journeys.',
      features: [
        'Customized travel planning and itinerary creation',
        'Documentation preparation and submission',
        'Travel insurance guidance',
        'Accommodation and transportation arrangements',
        'Emergency support during your travel',
      ],
      link: '/visit-visa',
      image: '/images/service3.jpeg',
    },
  ];

  return (
    <main>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Services</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Visa Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in providing comprehensive visa guidance to help you achieve your global mobility goals.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="relative h-80 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-3xl font-bold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What we offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={`${service.id}-feature-${idx}`} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-[#8d3044] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="bg-[#8d3044] hover:bg-[#6d2335] text-white">
                    <Link href={service.link}>
                      Learn more about {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality visa guidance services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our team of experienced professionals provides expert advice on all visa categories.',
              },
              {
                title: 'Personalized Service',
                description: 'We offer personalized solutions tailored to your specific needs and circumstances.',
              },
              {
                title: 'Comprehensive Support',
                description: 'From initial consultation to application submission, we provide end-to-end support.',
              },
              {
                title: 'Up-to-date Information',
                description: 'We stay current with the latest visa requirements and immigration policies.',
              },
              {
                title: 'Transparent Process',
                description: 'Our process is transparent, with clear communication at every step.',
              },
              {
                title: 'Global Network',
                description: 'We have a network of partners across the globe to support your visa journey.',
              },
            ].map((feature, index) => (
              <Card key={`feature-${index}`} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#8d3044] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your visa journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to learn more about our services and how we can help you achieve your global mobility goals.
          </p>
          <Button asChild size="lg" className="bg-white text-[#8d3044] hover:bg-gray-100">
            <Link href="/contact-us">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
