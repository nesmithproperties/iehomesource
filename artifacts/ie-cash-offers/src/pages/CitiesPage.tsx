import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/cityData";
import { getCityImage } from "@/data/cityImages";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      <Nav />

      {/* Header */}
      <section className="pt-36 pb-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-[11px] font-black uppercase tracking-widest mb-6">
            <MapPin className="h-3.5 w-3.5" /> Serving Southern California
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black tracking-tighter mb-6 uppercase">
            Cities We <span className="text-cyan-400">Serve</span>
          </h1>
          <p className="text-slate-300 text-lg font-medium leading-relaxed">
            We buy houses across the Inland Empire and surrounding Southern California communities.
            Select your city below to see how we can help you sell fast for a fair cash offer.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => {
              const img = getCityImage(city.slug);
              return (
                <Link
                  key={city.slug}
                  href={`/sell-my-house-fast-${city.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-cyan-700 border border-cyan-500 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2">{city.county}</span>
                      <h2 className="text-2xl font-serif font-black text-white tracking-tighter">{city.name}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2 mb-4">
                      {city.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-cyan-600 font-black uppercase tracking-widest text-xs group-hover:gap-3 transition-all">
                      Get a Cash Offer <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
