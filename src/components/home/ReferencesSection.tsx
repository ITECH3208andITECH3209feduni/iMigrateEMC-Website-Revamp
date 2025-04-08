import React from 'react';
import Image from 'next/image';

const ReferencesSection = () => {
  const references = [
    {
      id: 1,
      name: 'Partner 1',
      logo: '/images/reference1.png',
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: '/images/reference2.png',
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: '/images/reference3.png',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our References</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are in good company
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="relative h-20 w-40 grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
            >
              <Image
                src={reference.logo}
                alt={reference.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
