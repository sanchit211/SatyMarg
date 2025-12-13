"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    { label: "Categories", href: "#", hasDropdown: true },
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

  const handleContactClick = (e) => {
    e.preventDefault();
    
    if (pathname === "/") {
      // If already on homepage, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element not found, try after a short delay
        setTimeout(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      // If on another page, navigate to homepage with hash
      router.push("/#contact");
    }
    
    setIsOpen(false); // Close mobile menu if open
  };

  // Effect to handle hash scrolling on homepage
  useEffect(() => {
    // Only run on homepage
    if (pathname === "/") {
      // Check if URL has hash
      const hash = window.location.hash;
      if (hash) {
        // Remove the # symbol
        const id = hash.replace("#", "");
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [pathname]);

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category);
    setIsCategoriesOpen(false);
    router.push(`/product?category=${encodeURIComponent(category)}`);
  };

  const handleMobileCategoryClick = (category) => {
    console.log("Selected category (mobile):", category);
    setIsMobileCategoriesOpen(false);
    setIsOpen(false);
    router.push(`/product?category=${encodeURIComponent(category)}`);
  };

  // Close mobile categories when mobile menu closes
  useEffect(() => {
    if (!isOpen) {
      setIsMobileCategoriesOpen(false);
    }
  }, [isOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-700 via-slate-800 to-blue-900 pb-2 mb-10">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-3">
        {/* Logo - aligned left */}
        <Link href="/">
          <img
            className="w-[50px] h-[50px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
            alt="Company logo"
            src="/assets/logo.png"
          />
        </Link>

        {/* Desktop Nav - centered */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-10">
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
                ) : item.label === "Contact us" ? (
                  <button
                    onClick={handleContactClick}
                    className="font-large text-[#fff] text-xl hover:text-[#a9a9a9] transition-colors duration-300 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="font-large text-[#fff] text-xl hover:text-[#a9a9a9] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Empty div to balance the layout - same width as logo */}
        <div className="w-[50px] md:block hidden"></div>

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
                  className="rounded-lg hover:bg-blue-50/80 transition-colors duration-200 text-left w-full cursor-pointer px-3 py-2"
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[700px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
          }`}
      >
        <div className="mx-6 mt-4 p-6 space-y-6">
          {/* Mobile Categories Section */}
          <div className="border-b border-gray-600 pb-4">
            <button
              type="button"
              onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
              className="flex items-center justify-between w-full text-white font-medium text-lg mb-3 cursor-pointer"
            >
              <span>Categories</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${isMobileCategoriesOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileCategoriesOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="overflow-y-auto max-h-[250px] pr-2 custom-scrollbar">
                <div className="grid grid-cols-1 gap-2 pb-3">
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
            </div>
          </div>

          {/* Other navigation items */}
          {navigationItems.filter(item => !item.hasDropdown).map((item, index) => (
            item.label === "Contact us" ? (
              <button
                key={index}
                onClick={handleContactClick}
                className="block font-medium text-[#fff] text-lg transition-colors duration-300 text-left w-full cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="block font-medium text-[#fff] text-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Overlay for categories modal */}
      {isCategoriesOpen && (
        <div
          className="fixed inset-0 z-40 mt-20"
          onClick={() => setIsCategoriesOpen(false)}
        />
      )}

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </header>
  );
};