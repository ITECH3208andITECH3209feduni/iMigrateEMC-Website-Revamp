import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">iMigrate EMC</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-[#8d3044] mr-4 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Beveridge, Australia</h3>
            <p className="text-gray-600 text-sm mt-1">Main Office</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-[#8d3044] mr-4 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Islamabad, Pakistan</h3>
            <p className="text-gray-600 text-sm mt-1">Regional Office</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-[#8d3044] mr-4 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">(0061) 490 549 001</h3>
            <p className="text-gray-600 text-sm mt-1">Mon-Fri 9am to 5pm</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-[#8d3044] mr-4 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">info@imigrateemc.com.au</h3>
            <p className="text-gray-600 text-sm mt-1">Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
