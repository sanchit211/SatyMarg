import { Building, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-medium">
            Have questions? Write to us directly on{' '}
            <a 
              href="mailto:info@hkb.sa" 
              className="font-semibold underline decoration-2 underline-offset-2 hover:text-blue-200 transition-colors"
            >
              info@hkb.sa
            </a>
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Left Side - Company Info */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
              
                 <img
              className="w-[160px] h-[60px] object-cover"
              alt="Company logo"
              src="/assets/logo.png"
            />
           
             
              </div>
            </div>

            {/* Right Side - Services Info */}
            <div className="text-left lg:text-right max-w-md">
              <h2 className="text-3xl font-bold text-black mb-4">
                Premium Office Spaces
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Premium work spaces for your professional
                <br />
                and business goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 All Rights Reserved
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-600 group-hover:text-pink-600" />
              </a>
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-gray-600 group-hover:text-red-600" />
              </a>
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}