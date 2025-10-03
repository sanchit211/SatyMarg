import React from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  Monitor, 
  ChefHat, 
  Bath,
  Camera,
  Wifi,
  Phone,
  ParkingCircle
} from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

const PropertyOverview = () => {
  const facilities = [
    {
      icon: Building2,
      titleEn: "Reception Area",
      titleAr: "منطقة الاستقبال"
    },
    {
      icon: Users,
      titleEn: "Meeting Room",
      titleAr: "غرفة الاجتماعات"
    },
    {
      icon: Briefcase,
      titleEn: "Executive Office",
      titleAr: "مكتب تنفيذي"
    },
    {
      icon: Monitor,
      titleEn: "Open Workstation",
      titleAr: "مساحة عمل مفتوحة"
    },
    {
      icon: ChefHat,
      titleEn: "Kitchenette",
      titleAr: "مطبخ صغير"
    },
    {
      icon: Bath,
      titleEn: "Restroom",
      titleAr: "دورة مياه"
    }
  ];

  const features = [
    {
      icon: Camera,
      titleEn: "CCTV",
      titleAr: "كاميرات مراقبة"
    },
    {
      icon: Wifi,
      titleEn: "High Speed Wi-Fi",
      titleAr: "واي فاي عالي السرعة"
    },
    {
      icon: Phone,
      titleEn: "Central Telephone System",
      titleAr: "نظام هاتف مركزي"
    },
   {
  icon: ParkingCircle,
  titleEn: "Free Parking Space",
  titleAr: "موقف سيارات مجاني"
}
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  space-y-20 lg:space-y-24 mt-16" id="overview">
      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] tracking-[-0.5px] leading-tight mb-4">
          Property Overview
        </h1>
        <h1 className="font-bold text-[#032174] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] tracking-[-0.5px] leading-tight" dir="rtl">
          نظرة عامة على العقار
        </h1>
      </div>

      {/* Office Size Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">Office Size</h3>
            <div className="text-4xl sm:text-5xl font-bold text-[#032174]">120 m²</div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow duration-300" dir="rtl">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-4">المساحة</h3>
            <div className="text-4xl sm:text-5xl font-bold text-[#032174]">120 متر مربع</div>
          </CardContent>
        </Card>
      </div>

      {/* Layout & Facilities */}
      <div className="space-y-12 lg:space-y-16">
        <div className="text-center space-y-6">
          <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] tracking-[-0.5px] leading-tight">
            Layout & Facilities
          </h2>
          <p className="font-bold text-[#032174] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] tracking-[-0.5px] leading-tight" dir="rtl">
            التصميم والمرافق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {facilities.map((facility, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#032174] rounded-full flex items-center justify-center">
                  <facility.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg sm:text-xl font-medium text-black">
                    {facility.titleEn} |
                  </span>
                  <span className="text-lg sm:text-xl font-medium text-black" dir="rtl">
                    {facility.titleAr}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features & Amenities */}
<div className="space-y-12 lg:space-y-16">
  <div className="text-center space-y-6">
    <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[42px] tracking-[-0.5px] leading-tight">
      Features & Amenities
    </h2>
    <p
      className="font-bold text-[#032174] text-2xl sm:text-3xl md:text-4xl lg:text-[30px] tracking-[-0.5px] leading-tight"
      dir="rtl"
    >
      المميزات ووسائل الراحة
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10 max-w-7xl mx-auto">
    {features.map((feature, index) => (
      <Card
        key={index}
        className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-2xl"
      >
        <CardContent className="p-6 sm:p-8 lg:p-10 text-center space-y-4 sm:space-y-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#032174]" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold text-black">
              {feature.titleEn}
            </h3>
            <p className="text-lg sm:text-xl text-black" dir="rtl">
              {feature.titleAr}
            </p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>


      {/* Decorative dots */}
      {/* <div className="flex justify-center space-x-2 pt-8">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div> */}
    </div>
  );
};

export default PropertyOverview;