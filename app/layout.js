import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Satymarg Healthcare | Quality General Medicine Products | Affordable Healthcare Solutions",
  description: "Satymarg Healthcare Pvt. Ltd. - Promoters of quality general medicine products. Serving humanity with affordable, high-quality medicines for 4 years.",
  keywords: `Satymarg Healthcare, General Medicine Products, Affordable Medicines, Pharma Products, Healthcare Solutions, Pharmaceutical Company, Quality Medicines, Economical Medicines, Pharma Promotion, Medicine Products, Healthcare Company, Pharmaceutical Business`,
  openGraph: {
    title: "Satymarg Healthcare Pvt. Ltd. | Quality General Medicine",
    description: "Promoting quality general medicine products with 21+ products range. Serving humanity with affordable healthcare solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satymarg Healthcare - Quality Medicine Products",
    description: "Affordable, high-quality general medicine products for better healthcare",
  },
  robots: "index, follow",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
        {/* Company Information */}
        <meta name="author" content="Satymarg Healthcare Pvt. Ltd." />
        <meta name="company" content="Satymarg Healthcare Pvt. Ltd." />
        <meta name="classification" content="Pharmaceutical Company" />
        <meta name="topic" content="General Medicine Products" />
        <meta name="subject" content="Healthcare and Medicine" />
        
        {/* Business Profile Information */}
        <meta name="business:type" content="Pharmaceutical Promotion" />
        <meta name="business:operation" content="6 days a week" />
        <meta name="business:founder" content="Sachin Rastogi" />
        <meta name="business:staff" content="3 full-time personnel" />
        <meta name="business:turnover" content="25 Lakhs per year" />
        <meta name="business:products" content="21 products" />
        <meta name="business:history" content="4 years in operation" />
        
        {/* Contact Information */}
        <meta name="contact:name" content="Sachin Rastogi (Founder)" />
        <meta name="contact:phone" content="8755678796" />
        <meta name="contact:email" content="satymarghealthcare@gmail.com" />
        
        {/* Address Information */}
        <meta name="address:company" content="Satymarg Healthcare Pvt. Ltd." />
        <meta name="address:street" content="Garh road" />
        <meta name="address:city" content="Meerut" />
        <meta name="address:country" content="India" />
        
        {/* Mission and Vision */}
        <meta name="mission" content="To serve humanity with quality medicine at affordable price" />
        <meta name="vision" content="Market acceptance growing day by day with face value in pharma sector" />
        
        {/* Additional SEO Tags */}
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://satymarg.in" />
      </head>
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Satymarg Healthcare Pvt. Ltd.",
              "description": "Promoter of General Medicine Products, serving humanity with quality medicine at affordable prices",
              "url": "https://satymarg.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Garh road",
                "addressLocality": "Meerut",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "telephone": "+918755678796",
                "email": "satymarghealthcare@gmail.com"
              },
              "founder": {
                "@type": "Person",
                "name": "Sachin Rastogi"
              },
              "foundingDate": "2020",
              "numberOfEmployees": 3,
              "priceRange": "Affordable",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Credit Card",
              "openingHours": "Mo-Sa 09:00-18:00",
              "sameAs": []
            })
          }}
        />
      </body>
    </html>
  );
}