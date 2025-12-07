"use client"
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Header } from "../screens/RentalSpace/Header";

const productData = [
  {
    category: "MULTIVITAMINS",
    brands: [
      { name: "NUROJUMP SACHET", description: "PROVIDE ALL DAY ENERGY AND IMPROVE STAMINA", additional: "GENERAL WEAKNESS AND BOOST IMMUNITY", image: "/assets/product-img/NUROJUMP SACHET.jpg" },
      { name: "NUROJUMP G CAP", description: "PREVENT FROM DISEASE & PROTECT AGAINST OXIDATIVE STRESS", additional: "BOOST IMMUME SYSTEM & INCREASE ENERGY LEVELS", image: "/assets/product-img/NUROJUMP G.jpg" },
      { name: "NUROJUMP INJECTION", description: "FREE FROM NEUROPATHIC PAIN", additional: "WORKS IN LUMBAGO & SCIATICA", image: "/assets/product-img/NUROJUMP INJECTION.jpg" },
      { name: "NUROJUMP CAP", description: "DECREASE MUSCLE WEAKNESS & LETHARGY", additional: "REGUVINATES THE NATURAL IMMUNE RESPONSE", image: "/assets/product-img/NUROJUMP CAP.jpg" },
      { name: "NUROJUMP SYRUP", description: "DECREASE MUSCLE WEAKNESS & LETHARGY", additional: "", image: "/assets/product-img/NUROJUMP SYRUP.jpg" }
    ]
  },
  {
    category: "PPI",
    brands: [
      { name: "PANTAJUMP DSR CAP", description: "FOR NAUSEA AND VOMITING", additional: "HYPERACIDITY AND GERD", image: "/assets/product-img/PANTAJUMP DSR.jpg" },
      { name: "PANTAJUMP L CAP", description: "FOR IBS CONSTIPATION", additional: "DYSPEPSIA", image: "/assets/product-img/PANTAJUMP L.jpg" }
    ]
  },
  {
    category: "NSAIDS",
    brands: [
      { name: "ZERODAY P TAB", description: "FOR PAIN & FEVER", additional: "", image: "/assets/product-img/ZERODAY P.jpg" },
      { name: "ZERODAY SP TAB", description: "FOR PAIN & INFLAMATION", additional: "", image: "/assets/product-img/ZERODAY SP.jpg" },
      { name: "ACLOJUMP AQ INJECTION", description: "FOR KIDNEY STONE PAIN AND SPORTS INJURY", additional: "", image: "/assets/product-img/ACLOJUMP AQ.jpg" },
      { name: "ZERODAY MR TAB", description: "FOR MUSCLE SPASM", additional: "", image: "/assets/product-img/ZERODAY MR.jpg" },
      { name: "ZERODAY MF SYRUP", description: "FOR PAIN AND FEVER IN CHILDREN", additional: "", image: "/assets/product-img/ZERODAY MF SYRUP.jpg" }
    ]
  },
  {
    category: "ANTI-DIARROHEAL",
    brands: [
      { name: "OFLOJUMP OZ TAB", description: "FOR DIARROHEA AND DYSENTRY", additional: "", image: "/assets/product-img/OFLOJUMP OZ.jpg" },
      { name: "OFLOJUMP M SYRUP", description: "FOR DIARROHEA AND DYSENTRY IN CHILDREN", additional: "COATED PARTICLES IMPROVED THE TASTE", image: "/assets/product-img/OFLOJUMP M SYRUP.jpg" },
      { name: "FLORAJUMP SUSPENSION", description: "FOR GUT FLORA DISTURBANCE AND DIARROHEA IN CHILDREN", additional: "", image: "/assets/product-img/FLORAJUMP.jpg" },
      { name: "RACIBEST SB SACHET", description: "FOR ACUTE DIARROHEA IN CHILDREN", additional: "REDUCE THE RECURRENT DIARROHEA", image: "/assets/product-img/RACIBEST SB.jpg" }
    ]
  },
  {
    category: "ANTI-BIOTICS",
    brands: [
      { name: "ABOVCEF O TAB", description: "FOR VIRAL & TYPHOID FEVER ", additional: "", image: "/assets/product-img/ABOVCEF O.jpg" },
      { name: "AZITURN 100 DT TAB", description: "FOR R.T.I AND TYPHOID FEVER IN CHILDREN", additional: "", image: "/assets/product-img/AZITURN 100 DT.jpg" },
      { name: "AZITURN 250 DT TAB", description: "FOR R.T.I AND TYPHOID FEVER", additional: "", image: "/assets/product-img/AZITURN 250 DT.jpg" },
      { name: "AZITURN 500 TAB", description: "FOR R.T.I AND TYPHOID FEVER", additional: "", image: "/assets/product-img/AZITURN 500.jpg" },
      { name: "CEFOJUMP 100 DT TAB", description: "FOR R.T.I AND TYPHOID FEVER IN CHILDREN", additional: "", image: "/assets/product-img/CEFOJUMP 100 DT.jpg" },
      { name: "CEFOJUMP 200 TAB", description: "FOR R.T.I AND TYPHOID FEVER", additional: "", image: "/assets/product-img/CEFOJUMP 200.jpg" },
      { name: "CEFOJUMP O TAB", description: "FOR PATIENT IN TUFF INFECTION", additional: "", image: "/assets/product-img/CEFOJUMP O.jpg" },
      { name: "CEFOJUMP 50 DRY SYRUP", description: "FOR R.T.I AND TYPHOID FEVER", additional: "", image: "/assets/product-img/CEFOJUMP 50 DRY SYRUP.jpg" },
      { name: "MOXIJUMP LB CAP", description: "FOR R.T.I WITH PNEUMONITIS PATIENT", additional: "", image: "/assets/product-img/MOXIJUMP LB.jpg" },
      { name: "MOXIJUMP CV 625 TAB", description: "FOR R.T.I , UTI AND DENTAL INFECTIONS", additional: "", image: "/assets/product-img/MOXIJUMP CV 625.jpg" }
    ]
  },
  {
    category: "ANTI-EMITTING",
    brands: [
      { name: "VOMIFINE MD TAB", description: "FOR NAUSEA & VOMITING", additional: "", image: "/assets/product-img/VOMIFINE MD.jpg" },
      { name: "VOMIFINE SYRUP", description: "FOR NAUSEA & VOMITING IN CHILDREN", additional: "", image: "/assets/product-img/VOMIFINE SYRUP.jpg" }
    ]
  },
  {
    category: "ANTI-SPASMODIC",
    brands: [
      { name: "DROTIREM TAB", description: "FOR PAINFUL SPASMODIC CONDITION", additional: "", image: "/assets/product-img/DROTIREM.jpg" }
    ]
  },
  {
    category: "ANTI-ALLERGIC",
    brands: [
      { name: "MONTIJUMP L TAB", description: "FOR ALLERGIC RHINITIS AND CHRONIC BRONCHITIS", additional: "", image: "/assets/product-img/MONTIJUMP L.jpg" },
      { name: "MONTIJUMP FX TAB", description: "FOR ALLERGIC RHINITIS AND CHRONIC BRONCHITIS", additional: "", image: "/assets/product-img/MONTIJUMP FX.jpg" },
      { name: "OVERCOLD DS/125 SYRUP", description: "FOR ALLERGIC RHINITIS, COMMON COLD AND SINUSITIS", additional: "", image: "/assets/product-img/OVERCOLD DS.jpg" }
    ]
  },
  {
    category: "COUGH SYRUP",
    brands: [
      { name: "ASTHAJUMP DX SYRUP", description: "FOR IRRITATING DRY COUGH", additional: "", image: "/assets/product-img/ASTHAJUMP DX.jpg" },
      { name: "ASTHAJUMP LS SYRUP", description: "FOR PRODUCTIVE COUGH", additional: "", image: "/assets/product-img/ASTHAJUMP LS.jpg" }
    ]
  },
  {
    category: "LIVER THERAPY",
    brands: [
      { name: "KORHEP TAB", description: "FOR ALCOHOLIC FATTY LEVER, VIRAL HEPATITIS, JAUNDICE", additional: "", image: "/assets/product-img/KORHEP.jpg" },
      { name: "KORHEP UD TAB", description: "FOR NON-ALCOHOLIC FATTY LEVER, VIRAL HEPATITIS, JAUNDICE", additional: "", image: "/assets/product-img/KORHEP UD.jpg" },
      { name: "HEPTAJUMP SYRUP", description: "FOR ALCOHOLIC AND NON-ALCOHOLIC FATTY LEVER, VIRAL HEPATITIS, JAUNDICE", additional: "", image: "/assets/product-img/HEPTAJUMP.jpg" }
    ]
  },
  {
    category: "ENZYME",
    brands: [
      { name: "ABOVZYME TAB", description: "FOR BLOATING AND INDIGESTION", additional: "", image: "/assets/product-img/ABOVZYME.jpg" }
    ]
  },
  {
    category: "ALKALIZER & STONE SYRUP",
    brands: [
      { name: "URIJUMP SYRUP", description: "CONTROL URINARY ACID CONTENT AND FLUSHES OUT PUS CELLS", additional: "PREVENT THE RECURRENCE OF THE URINARY DISORDERS", image: "/assets/product-img/URIJUMP.jpg" }
    ]
  },
  {
    category: "MOUTH PAINT",
    brands: [
      { name: "ORAUSE MOUTH PAINT", description: "WORKS IN INFLAMMATION OF GUMS AND MOUTH ULCER", additional: "", image: "/assets/product-img/ORAUSE GEL.jpg" }
    ]
  },
  {
    category: "ANTI-FUNGAL",
    brands: [
      { name: "FLUJUMP PLUS TAB", description: "HELPS IN WHERE SEVERE ITCHING ASSOCIATED WITH FUNGAL INFECTIONS AND SCABIES", additional: "", image: "/assets/product-img/FLUJUMP PLUS.jpg" }
    ]
  },
  {
    category: "MIX RANGE",
    brands: [
      { name: "INZOREST TAB", description: "WORKS IN COMORBID ANXIETY WITH DEPRESSION", additional: "", image: "/assets/product-img/INZOREST.jpg" },
      { name: "INZOREST BT TAB", description: "WORKS BY IMPROVING BLOOD FLOW TO THE INNER EAR", additional: "EFFECTIVE IN REDUCING THE FREQUENCY, SEVERITY AND DURATION OF VERTIGO.", image: "/assets/product-img/INZOREST BT.jpg" },
      { name: "CALDIJUMP SACHET", description: "ENSURE STRONG BONES", additional: "WORKS IN OSTEOPOROSIS AND VITAMIN D DEFICIENCY WITH PAINFUL BONES AND BACK", image: "/assets/product-img/CALDIJUMP SACHET.jpg" },
      { name: "CALDIJUMP NANOSHOT", description: "ENSURE STRONG BONES", additional: "WORKS IN OSTEOPOROSIS AND VITAMIN D DEFICIENCY WITH PAINFUL BONES AND BACK", image: "/assets/product-img/CALDIJUMP NANO.jpg" }
    ]
  }
];

const ProductContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  useEffect(() => {
    if (category) {
      const categoryData = productData.find(item =>
        item.category === category
      );
      setSelectedCategoryData(categoryData);
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <div className="pt-32 px-6 sm:px-10 lg:px-20 pb-20">
        {selectedCategoryData ? (
          <div>
            {/* Category Header */}
            <div className="mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {selectedCategoryData.category}
              </h1>
              <p className="text-gray-600 text-lg">
                Explore our range of products in this category
              </p>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCategoryData.brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex flex-col items-center mb-6">
                      {/* Image container with bottom cropping */}
                      <div className="relative w-full h-60 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            className="w-full h-full object-contain"
                            alt={brand.name}
                            src={brand.image || "/assets/product-img/NUROJUMP SACHET.jpg"}
                            style={{
                              clipPath: 'inset(0 0 10% 0)', // Crop 30% from bottom
                              objectFit: 'contain'
                            }}
                          />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mt-3 text-center">
                        {brand.name}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-5">
                        <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
                          Primary Description
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {brand.description}
                        </p>
                      </div>

                      {brand.additional && (
                        <div className="bg-green-50 rounded-lg p-5">
                          <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-2">
                            Additional Benefits
                          </h4>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {brand.additional}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="mt-16 text-center">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                ← Back to Categories
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Select a Category
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Please select a product category from the navigation menu to view all available brands and their descriptions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {productData.slice(0, 10).map((category, index) => (
                <button
                  key={index}
                  onClick={() => window.location.href = `/product?category=${encodeURIComponent(category.category)}`}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600"
                >
                  <div className="font-medium text-sm truncate">{category.category}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Product component with Suspense boundary
const Product = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <ProductContent />
    </Suspense>
  );
};

export default Product;