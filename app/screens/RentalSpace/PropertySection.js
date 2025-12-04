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
    

      {/* Features & Amenities */}
<div className="space-y-12 lg:space-y-16">
  <div className="text-center space-y-6">
    <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[42px] tracking-[-0.5px] leading-tight">
      Features & Amenities
    </h2>
   
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