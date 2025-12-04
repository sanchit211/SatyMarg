import { Stethoscope, MapPin } from "lucide-react";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { Header } from "./Header";

export const HeroSection = () => {
  return (
    <section className="relative w-full lg:h-screen overflow-hidden">
      <Header />

      <div className="relative w-full h-full pb-20">

        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px]"
          alt="Pharma business background"
          src="https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1920&q=80"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A7A]/70 via-[#1A2FA3]/60 to-[#1A2FA3]/70 mix-blend-multiply" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
          
          {/* Main Heading */}
          <h1 className="font-bold text-white text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight lg:leading-[1.1] my-4 max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl">
            Promoting Quality General Medicines With Trust & Commitment
          </h1>

          {/* Sub Text */}
          <p className="text-white text-sm sm:text-lg md:text-xl max-w-xl lg:max-w-3xl leading-relaxed mb-6">
            Satymarg Healthcare Pvt. Ltd. has been serving humanity for 4+ years by delivering 
            high-quality, economical general medicine products with growing market acceptance.
          </p>

          {/* Info Box */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-5xl w-full mb-6 md:mb-8">
            
            <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 md:p-6 text-center border border-white/20">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>

              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-center">
                Satymarg Healthcare Pvt. Ltd., Garh Road, Meerut.
                <br />
                <span className="font-semibold text-lg">Contact: 8755678796 | support@satymarg.in</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <a href="#contact">
            <Button className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer mb-5">
              <span className="font-medium text-white hover:text-black sm:text-lg lg:text-xl">
                Contact Us
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
