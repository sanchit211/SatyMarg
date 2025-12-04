"use client";
import { Button } from "@/app/components/ui/button";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    { label: "Categories", href: "#", hasDropdown: true },
    // { label: "Properties", href: "#overview" },
    { label: "About Us", href: "/aboutus" },
    { label: "Contact us", href: "#contact" },
  ];

  // Product categories from your Excel file
  const productCategories = [
    "MULTIVITAMINS",
    "PPI",
    "NSAIDS",
    "ANTI-DIARROHEAL",
    "ANTI-BIOTICS",
    "ANTI-EMITTING",
    "ANTI-SPASMODIC",
    "ANTI-ALLERGIC",
    "COUGH SYRUP",
    "LIVER THERAPY",
    "ENZYME",
    "ALKALIZER & STONE SYRUP",
    "MOUTH PAINT",
    "ANTI-FUNGAL",
    "MIX RANGE"
  ];

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category);
    setIsCategoriesOpen(false);
    // Navigate to product page with category as query parameter
    router.push(`/product?category=${encodeURIComponent(category)}`);
  };

  const handleMobileCategoryClick = (category) => {
    console.log("Selected category (mobile):", category);
    setIsOpen(false);
    // Navigate to product page with category as query parameter
    router.push(`/product?category=${encodeURIComponent(category)}`);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-700 via-slate-800 to-blue-900 pb-2 mb-10">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-3">
        {/* Logo */}
        <Link href="/">
          <img
            className="w-[100px] h-[100px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
            alt="Company logo"
            src="/assets/logo.png"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center font-large text-[#fff] text-xl hover:text-[#a9a9a9] transition-colors duration-300"
                >
                  {item.label}
                  <ChevronDown
                    size={20}
                    className={`ml-1 transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="font-large text-[#fff] text-xl hover:text-[#a9a9a9] transition-colors duration-300"
                >
                  {item.label}
                </a>
              )}
            </div>
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

      {/* Categories Modal */}
      {isCategoriesOpen && (
        <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl bg-white/85 shadow-2xl border-t border-gray-200 animate-in slide-in-from-top-5 duration-300 backdrop-blur-sm rounded-lg z-60">
          <div className="mx-auto px-10 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
              {productCategories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    console.log("Button clicked for:", category);
                    handleCategoryClick(category);
                  }}
                  className=" rounded-lg hover:bg-blue-50/80 transition-colors duration-200 text-left w-full cursor-pointer px-3 py-2"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
          }`}
      >
        <div className="mx-6 mt-4 p-6 space-y-6">
          {/* Mobile Categories Section */}
          <div className="border-b border-gray-600 pb-4">
            <div className="text-white font-medium text-lg mb-3">Categories</div>
            <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
              {productCategories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    console.log("Mobile button clicked for:", category);
                    handleMobileCategoryClick(category);
                  }}
                  className="text-white hover:text-gray-300 py-2 px-3 rounded transition-colors duration-200 text-base text-left w-full cursor-pointer"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Other navigation items */}
          {navigationItems.filter(item => !item.hasDropdown).map((item, index) => (
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

      {/* Overlay for categories modal */}
      {isCategoriesOpen && (
        <div
          className="fixed inset-0 z-40 mt-20"
          onClick={() => setIsCategoriesOpen(false)}
        />
      )}
    </header>
  );
};
