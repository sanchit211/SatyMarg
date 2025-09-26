import { MapPin } from "lucide-react";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { Header } from "./Header";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Header />
      <div className="relative w-full h-full">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Modern office space interior"
          src="/assets/main-bg.png"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] leading-tight lg:leading-[1.1] mb-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
            A Modern, Fully Furnished Luxury Office
          </h1>

          {/* Subtitle */}
          <p className="font-normal text-white text-base sm:text-lg md:text-xl mb-8 md:mb-12 opacity-90">
            مكتب فاخر، مؤثث بالكامل وعصري.
          </p>

          {/* Info Cards */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-6xl w-full mb-8">
            {/* English Card */}
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 text-left">
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                Available in a new building on Al Takhassusi Road, 
                at the intersection with King Abdullah Road, 
                (Al-Mohammadiyah District), directly opposite Riyadh Metro.
              </p>
            </div>

            {/* Arabic Card */}
            <div
              className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 text-right"
              dir="rtl"
            >
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                للإيجار الأسبوعي أو الشهري
                مكتب عصري فاخر ومفروش بالكامل في مبنى جديد على طريق 
                التخصصي عند تقاطع طريق الملك عبدالله – حي المحمدية، 
                مقابل مترو الرياض مباشرة.
              </p>
            </div>
          </div>

          {/* CTA */}
                   <a href="#contact">
            <Button className=" sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              <span className="font-medium text-white hover:text-black text-sm sm:text-base">
                Inquire Now | استفسر الآن
              </span>
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
};
