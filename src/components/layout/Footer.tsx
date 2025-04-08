import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Connect with us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact-us"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-3 text-[#8d3044]" />
                  <span>Contact us</span>
                </Link>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3 text-[#8d3044]" />
                <span className="font-medium">info@imigrateemc.com.au</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-3 text-[#8d3044]" />
                <span>(0061)490 549 001</span>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Locations</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-[#8d3044] mt-0.5" />
                <div>
                  <span className="font-medium">Beveridge, Australia</span>
                  <p className="text-sm mt-1">Main Office</p>
                </div>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-[#8d3044] mt-0.5" />
                <div>
                  <span className="font-medium">Islamabad, Pakistan</span>
                  <p className="text-sm mt-1">Regional Office</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#8d3044] transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#8d3044] transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#8d3044] transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#8d3044] transition-colors">
                <Globe className="h-6 w-6" />
                <span className="sr-only">Website</span>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Our Services</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/student-visa" className="text-gray-600 hover:text-[#8d3044] transition-colors">
                    Student Visa
                  </Link>
                </li>
                <li>
                  <Link href="/visit-visa" className="text-gray-600 hover:text-[#8d3044] transition-colors">
                    Visit Visa
                  </Link>
                </li>
                <li>
                  <Link href="/work-visa" className="text-gray-600 hover:text-[#8d3044] transition-colors">
                    Work/Immigration Visa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} iMigrate EMC SMC</p>
          <p className="mt-2">
            <span className="opacity-75">We operate in collaboration with </span>
            <span className="font-medium">iMigrate EMC Pty Ltd</span>
            <span className="opacity-75">, a separate entity registered in Victoria, Australia.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
