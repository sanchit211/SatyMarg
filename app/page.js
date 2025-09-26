import React from 'react'
import { HeroSection } from '@/app/screens/RentalSpace/HeroSection'
import PropertyOverview from './screens/RentalSpace/PropertySection'
import ContactSection from './screens/RentalSpace/ContactSection'
import Footer from './screens/RentalSpace/FooterSection'
import ImageGallery from './screens/RentalSpace/ImageGallery'



const page = () => {
  return (
     <main className="bg-white w-full flex flex-col">
      <HeroSection />
      <PropertyOverview/>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <ImageGallery />
        </div>
      </main>
         <ContactSection/>
   <Footer/>
    </main>
  
  )
}

export default page