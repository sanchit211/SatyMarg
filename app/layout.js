import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Private Office for Rent in Riyadh | Weekly & Monthly | مكتب خاص للإيجار أسبوعي وشهري بالرياض",
  description: "Furnished private office for weekly & monthly rent in Riyadh. Luxury business space in prime location. Flexible small business offices available. مكتب خاص مفروش للإيجار الأسبوعي والشهري بالرياض - مكتب أعمال خاص فاخر",
  keywords: `private office for rent in riyadh weekly, private office for rent in riyadh monthly, furnished private office weekly riyadh, furnished private office monthly riyadh, flexible private office rental riyadh, small private office weekly riyadh, small private office monthly riyadh, business private office weekly riyadh, business private office monthly riyadh, luxury private office monthly riyadh, مكتب خاص للإيجار أسبوعي بالرياض, مكتب خاص للإيجار شهري بالرياض, مكتب خاص مفروش أسبوعي بالرياض, مكتب خاص مفروش شهري بالرياض, مكتب خاص للإيجار مرن بالرياض, مكتب خاص صغير أسبوعي بالرياض, مكتب خاص صغير شهري بالرياض, مكتب أعمال خاص أسبوعي بالرياض, مكتب أعمال خاص شهري بالرياض, مكتب خاص فاخر شهري بالرياض`,
  openGraph: {
    title: "Private Office Rental Riyadh | Weekly & Monthly | مكتب خاص للإيجار بالرياض",
    description: "Luxury furnished private offices for weekly & monthly rent in prime Riyadh location. Flexible small business offices available.",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Office Rental Riyadh - Weekly & Monthly",
    description: "Furnished private offices for weekly & monthly rent in Riyadh",
  },
  robots: "index, follow",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
        {/* <link rel="canonical" href="https://yourapp.com" /> */}
        <meta name="geo.region" content="SA-RIY" />
        <meta name="geo.placename" content="Riyadh" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="author" content="Saudi Office Rent" />
        <meta name="classification" content="Office Rental Riyadh" />
        <meta name="topic" content="Private Office Rentals" />
        <meta name="subject" content="Office Space Rental in Riyadh" />
        <meta name="coverage" content="Riyadh, Saudi Arabia" />
        <meta name="distribution" content="Global" />
      </head>
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}