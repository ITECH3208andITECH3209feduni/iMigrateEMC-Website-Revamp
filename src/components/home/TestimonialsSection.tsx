import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Beyond Boundaries, Beyond Expectations. Your Gateway to Hassle-Free Travel: ImigrateEMC.",
      author: "Aftab Ahmed",
      title: "CEO of ImigrateEMS",
    },
    {
      id: 2,
      quote: "iMigrate EMC helped me navigate the complex student visa process for Australia. Their expert guidance made my dream of studying abroad a reality.",
      author: "Sarah M.",
      title: "Student from Pakistan",
    },
    {
      id: 3,
      quote: "The team at iMigrate EMC provided invaluable support through every step of my business visa application. Their professionalism and expertise is unmatched.",
      author: "Raj Kumar",
      title: "Business owner from India",
    },
  ];

  return (
    <section className="py-16 bg-[#8d3044] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full flex flex-col">
                  <CardContent className="pt-10 flex-grow">
                    <QuoteIcon className="h-10 w-10 text-white/40 mb-4" />
                    <p className="italic text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6 flex flex-col items-start">
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-sm opacity-70">{testimonial.title}</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2 bg-white/20 border-white/20 hover:bg-white/30 hover:border-white/30" />
            <CarouselNext className="relative ml-2 bg-white/20 border-white/20 hover:bg-white/30 hover:border-white/30" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
