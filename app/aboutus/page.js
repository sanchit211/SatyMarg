// app/about/page.jsx
import React from "react";
import { Stethoscope, MapPin, Phone, Mail } from "lucide-react";
import { Header } from "../screens/RentalSpace/Header";

export default function AboutPage() {
  return (
    <>
       <Header />
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
       
      {/* HERO */}
<section className="bg-gradient-to-r from-[#0A1A7A] via-[#1A2FA3] to-[#3B4FC7]">
  <div className="backdrop-blur-sm bg-black/20">
    <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
        About Satymarg Healthcare Pvt. Ltd.
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl mx-auto">
        Promoting quality general medicine products with a mission to serve humanity with 5+ years by
        making reliable, economical medicines available to everyone.
      </p>
    </div>
  </div>
</section>


      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Profile */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Business Profile</h2>

            <div className="space-y-4 text-slate-700">
              <p>
                <strong>Type of business:</strong> Promotion of General Medicine Products (6 days a
                week).
              </p>

              {/* <p>
                <strong>Founder / Contact:</strong> Sachin Rastogi (Founder)
              </p> */}

              <p>
                <strong>Number of staff:</strong> 9 full-time persons (including owner).
              </p>

              <div className="rounded-lg bg-slate-50 border border-slate-100 p-4">
                <h3 className="font-medium mb-2">Founder's Message</h3>
                <p className="text-slate-600">To serve humanity for 5+ years with quality medicine at affordable price.</p>
              </div>

              <div className="rounded-lg bg-slate-50 border border-slate-100 p-4">
                <h3 className="font-medium mb-2">Business History</h3>
                <p className="text-slate-600">
                  Four years ago we have started Satymarg Healthcare to provide
                  economical and good quality medicines to people. What began with a small range
                  of products has steadily grown thanks to a focus on value and quality.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Stat label="Products (now)" value="48" />
                <Stat label="Started with" value="8 products" />
           
                <Stat label="Years" value="4+" />
              </div>
            </div>
          </div>

          {/* Right: Contact Card */}
          <aside className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-indigo-50">
                  <Stethoscope className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Satymarg Healthcare Pvt. Ltd.</h3>
                  <p className="text-sm text-slate-500">Garh Road, Meerut</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <ContactRow icon={<Phone className="w-4 h-4" />} label="Phone" value="8755678796" />
                <ContactRow icon={<Mail className="w-4 h-4" />} label="Email" value="satymarghealthcare@gmail.com" />
                <ContactRow icon={<MapPin className="w-4 h-4" />} label="Address" value="A.O:-F-1 Mandawali , New delhi - 92" />
              </div>
            </div>

            <div className="mt-6">
              <a
                href="mailto:satymarghealthcare@gmail.com"
                className="inline-flex items-center justify-center w-full rounded-full border border-indigo-600 bg-indigo-600/5 px-4 py-2 text-indigo-700 hover:bg-indigo-50 transition"
              >
                Contact Us
              </a>

              <p className="mt-3 text-xs text-slate-400">Open 6 days a week · Prompt responses</p>
            </div>
          </aside>
        </div>

        {/* Founder section */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-indigo-50 flex items-center justify-center">
              <Stethoscope className="w-10 h-10 text-indigo-600" />
            </div>

            <div>
           
              <p className="text-slate-600 mt-2 max-w-3xl">
                "To serve humanity with 5+ years with quality medicine at affordable price." —  Satymarg Healthcare 4 years ago with the straightforward goal of making
                reliable medicines accessible and affordable. Starting with 8 products, the
                company now offers 48 products and continues to expand its reach.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold">Want to know more or partner with us?</h4>
          <p className="text-slate-600 mb-4">Reach out for product lists, pricing and distributor opportunities.</p>
          <a
            href="mailto:satymarghealthcare@gmail.com"
            className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-medium"
          >
            Email Support
          </a>
        </div>
      </section>
    </main>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white/50 border border-slate-100 rounded-lg p-4 text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function ContactRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
