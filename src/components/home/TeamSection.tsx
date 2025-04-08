import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Asif Noor',
      role: 'Academic Mentor',
      image: '/images/asif.png',
      description: 'Dr. Asif Noor, a Senior Scientist and Scholar at the University of Melbourne and a PhD graduate from the University of Otago, New Zealand, is an International Education Consultant with over a decade of experience.',
    },
    {
      id: 2,
      name: 'Ghulam Mohaiudin',
      role: 'CTO',
      image: '/images/ghulam.jpeg',
      description: 'Ghulam Mohaiudin is a passionate and dedicated professional who truly loves what he does. As CTO of iMigrateEMC, he plays a pivotal role in leveraging technology to enhance our innovative visa consultancy services.',
    },
    {
      id: 3,
      name: 'Dr. Babar Peters',
      role: 'MARA Agent',
      image: '/images/peter.jpeg',
      description: 'Meet Dr. Babar Peters - Your Registered Migration Agent (No. 0106003), recognized by the Migration Agents Registration Authority (MARA). With extensive experience in Australian immigration matters.',
    },
    {
      id: 4,
      name: 'Saad Abdullah',
      role: 'Islamabad Office Representative',
      image: '/images/saad.png',
      description: 'Saad is the driving force behind the Islamabad office. He loves to keep his hands full by participating in the development of the business, marketing, and customer experience strategies.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to providing expert guidance for your visa and immigration needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-64 w-full bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                <CardDescription className="text-[#8d3044] font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-[#8d3044] text-[#8d3044] hover:bg-[#8d304411]">
            <Link href="/about-us" className="inline-flex items-center">
              View all team members <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
