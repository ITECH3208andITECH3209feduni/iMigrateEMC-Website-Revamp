import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="iMigrate EMC Logo"
                width={150}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/our-services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Our Services
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Our Partners
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Registration <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/register-franchise">Become our Partner</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                  Visa Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/student-visa">Student Visa</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/visit-visa">Visit Visa</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/work-visa">Work/Immigration Visa</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact-us" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>

            <Link href="/login" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </Link>

            <Button asChild className="ml-2 bg-[#8d3044] hover:bg-[#6d2335]">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col mt-6 space-y-4">
                  <Link href="/our-services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    Our Services
                  </Link>
                  <Link href="/about-us" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    About Us
                  </Link>
                  <Link href="/partners" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    Our Partners
                  </Link>

                  <div className="px-3 py-2">
                    <div className="font-medium mb-1">Registration</div>
                    <Link href="/register-franchise" className="block pl-3 text-gray-600 hover:text-primary py-1 text-sm">
                      Become our Partner
                    </Link>
                  </div>

                  <div className="px-3 py-2">
                    <div className="font-medium mb-1">Visa Services</div>
                    <Link href="/student-visa" className="block pl-3 text-gray-600 hover:text-primary py-1 text-sm">
                      Student Visa
                    </Link>
                    <Link href="/visit-visa" className="block pl-3 text-gray-600 hover:text-primary py-1 text-sm">
                      Visit Visa
                    </Link>
                    <Link href="/work-visa" className="block pl-3 text-gray-600 hover:text-primary py-1 text-sm">
                      Work/Immigration Visa
                    </Link>
                  </div>

                  <Link href="/contact-us" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    Contact Us
                  </Link>
                  <Link href="/login" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    Sign In
                  </Link>

                  <Button asChild className="m-3 bg-[#8d3044] hover:bg-[#6d2335]">
                    <Link href="/contact-us">Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
