// app/components/SEO.jsx
export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Saudi Office Rent",
    "description": "Private office rentals in Riyadh - Weekly and monthly furnished offices, small business offices, luxury offices",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Takhassusi Road, Al-Mohammadiyah District",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "postalCode": "12345",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Private Office Weekly Rental",
        "description": "Furnished private offices for weekly rent in Riyadh",
        "areaServed": "Riyadh, Saudi Arabia"
      },
      {
        "@type": "Offer", 
        "name": "Private Office Monthly Rental",
        "description": "Furnished private offices for monthly rent in Riyadh",
        "areaServed": "Riyadh, Saudi Arabia"
      },
      {
        "@type": "Offer",
        "name": "Small Private Office Rental",
        "description": "Small private offices for weekly and monthly rent",
        "areaServed": "Riyadh, Saudi Arabia"
      },
      {
        "@type": "Offer",
        "name": "Business Private Office Rental", 
        "description": "Business private offices for professionals in Riyadh",
        "areaServed": "Riyadh, Saudi Arabia"
      },
      {
        "@type": "Offer",
        "name": "Luxury Private Office Rental",
        "description": "Luxury furnished private offices in prime location",
        "areaServed": "Riyadh, Saudi Arabia"
      }
    ],
    "keywords": "private office riyadh, مكتب خاص بالرياض, weekly office rental, monthly office rental, furnished office, مكتب مفروش"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Enhanced hashtags component with ALL hashtags
export const SocialHashtags = () => {
  const englishHashtags = [
    '#PrivateOffice', '#OfficeForRent', '#WeeklyOfficeRiyadh', 
    '#MonthlyOfficeRiyadh', '#RiyadhOffice', '#OfficeRentalRiyadh', 
    '#BusinessInSaudi', '#FlexibleOffice', '#SmallOffice', 
    '#BusinessOffice', '#LuxuryOffice', '#FurnishedOffice'
  ];
  
  const arabicHashtags = [
    '#مكتب_خاص', '#مكتب_للإيجار', '#مكتب_أسبوعي', 
    '#مكتب_شهري', '#مكتب_الرياض', '#تأجير_مكاتب', 
    '#اعمال_السعودية', '#مكتب_مرن', '#مكتب_صغير',
    '#مكتب_أعمال', '#مكتب_فاخر', '#مكتب_مفروش'
  ];

  const allHashtags = [...englishHashtags, ...arabicHashtags];

  return (
    <div className="hidden" aria-hidden="true">
      {allHashtags.join(' ')}
      {/* Additional keyword variations for SEO */}
      <span>
        Private office Riyadh weekly, Private office Riyadh monthly, 
        Furnished office Riyadh, Small office Riyadh, Business office Riyadh,
        Luxury office Riyadh, Flexible office rental Riyadh,
        مكتب خاص أسبوعي الرياض, مكتب خاص شهري الرياض, مكتب مفروش الرياض,
        مكتب صغير الرياض, مكتب أعمال الرياض, مكتب فاخر الرياض
      </span>
    </div>
  );
};  