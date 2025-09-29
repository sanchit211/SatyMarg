import { MapPin } from "lucide-react";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { Header } from "./Header";

export const HeroSection = () => {
  return (
    <section className="relative w-full lg:h-screen overflow-hidden">
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

        {/* Content - Added padding top to avoid header collision */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
          {/* Main Heading - English */}
          <h1 className="font-bold text-white text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight lg:leading-[1.1] my-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl">
            A Modern, Fully Furnished Office in a Prestigious Prime Business Hub – Riyadh, Saudi Arabia
          </h1>

          {/* Main Heading - Arabic */}
          <p className="font-normal text-white text-xl sm:text-xl md:text-4xl mb-6 md:mb-8 opacity-90 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
مكتب عصري فاخر ومؤثث بالكامل في موقع مرموق ومركز أعمال حيوي – الرياض، المملكة العربية السعودية
          </p>

          {/* Info Cards */}
         <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-5xl w-full mb-6 md:mb-8">
            {/* English Card - ENLARGED FONT */}
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6 text-left">
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                Located in a brand-new building on Al Takhassusi Road, at the intersection with King Abdullah Road, in the prestigious Al-Mohammadiyah District – directly opposite Riyadh Metro Main Station.
                <br/>
                <span className="font-semibold text-lg">(Available for weekly or monthly rent).</span>
              </p>
            </div>

            {/* Arabic Card - ENLARGED FONT */}
            <div
              className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6 text-right"
              dir="rtl"
            >
              <div className="flex justify-center mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
يقع في مبنى جديد على طريق التخصصي عند تقاطع طريق الملك عبدالله، في حي المحمدية المرموق – مقابل المحطة الرئيسية لمترو الرياض مباشرة.<br />
                <span className="font-semibold text-lg">(متاح للإيجار الأسبوعي أو الشهري).</span>
              </p>
            </div>
          </div>


          {/* CTA */}
          <a href="#contact">
            <Button className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer mb-5">
              <span className="font-medium text-white hover:text-black sm:text-lg lg:text-xl ">
                Inquire Now | استفسر الآن
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};