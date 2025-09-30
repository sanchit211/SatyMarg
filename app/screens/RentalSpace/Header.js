"use client";
import { Button } from "@/app/components/ui/button";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: "Properties", href: "#overview" },
    { label: "Image Gallery", href: "#image-gallery" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
<header className="absolute top-0 left-0 w-full z-20 bg-gradient-to-r from-slate-700 via-slate-800 to-blue-900 pb-3">
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-3">
        {/* Logo */}
        <img
          className="w-[130px] h-[50px] object-cover"
          alt="Company logo"
          src="/assets/white-logo.png"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-large text-[#fff] text-xl hover:text-[#a9a9a9] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
<div className="hidden md:block">
  <a href="#contact">
    <Button
      variant="outline"
      className="px-6 py-2 rounded-full border-white bg-transparent hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
    >
      <span className="font-medium text-white text-lg hover:text-black transition-colors duration-300">
        Book a Visit
      </span>
    </Button>
  </a>
</div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#fff] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className=" mx-6 mt-4 p-6 space-y-6">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block font-medium text-[#fff] text-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
   
       <Button
  asChild
  className="w-full rounded-full bg-transparent text-white hover:bg-gray-800 border border-white transition-colors duration-300"
>
  <a href="#contact" onClick={() => setIsOpen(false)}>Book a Visit</a>
</Button>
        </div>
      </div>
    </header>
  );
};
