'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Sample office images - replace with your actual images
  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Meeting Room',
      titleEn: 'Meeting Room',
      titleAr: 'غرفة الاجتماعات'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Side View',
      titleEn: 'Side View',
      titleAr: 'منظر جانبي'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Top View',
      titleEn: 'Top View',
      titleAr: 'منظر علوي'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Hall',
      titleEn: 'Hall',
      titleAr: 'ردهة'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Modern Office',
      titleEn: 'Modern Office',
      titleAr: 'مكتب عصري'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Conference Room',
      titleEn: 'Conference Room',
      titleAr: 'قاعة مؤتمرات'
    }
  ];

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 " id="image-gallery">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] tracking-[-0.5px] leading-tight mb-4">
          Image Gallery
        </h1>
        <p className="font-bold text-[#032174] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] tracking-[-0.5px] leading-tight" dir="rtl">
          معرض الصور
        </p>
      </div>

      {/* Main Image Display */}
      <div className="relative mb-8 lg:mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[16/9] lg:aspect-[16/10]">
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 group-hover:text-black" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 group-hover:text-black" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Image Title */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            <div className="flex items-center gap-2">
              <span>{images[selectedIndex].titleEn}</span>
              <span className="text-gray-300">|</span>
              <span dir="rtl">{images[selectedIndex].titleAr}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="relative">
        {/* Thumbnails Container */}
        <div className="relative px-8 sm:px-10">
          <div className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 snap-center ${
                  index === selectedIndex
                    ? 'ring-3 ring-blue-500 ring-offset-2 scale-105'
                    : 'hover:scale-105 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
                }`}
                onClick={() => goToImage(index)}
              >
                <div className="w-32 h-20 sm:w-40 sm:h-28 lg:w-48 lg:h-32 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-2 sm:p-3 w-full">
                      <div className="flex flex-col space-y-1">
                        <h3 className="text-white font-medium text-xs sm:text-sm truncate">
                          {image.titleEn}
                        </h3>
                        <h3 className="text-gray-300 font-medium text-xs sm:text-sm truncate" dir="rtl">
                          {image.titleAr}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <button
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              container.scrollBy({ left: -200, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          
          <button
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              container.scrollBy({ left: 200, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 lg:mt-8 flex justify-center">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-blue-500 w-6 sm:w-8 h-2'
                  : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

    
    </div>
  );
}