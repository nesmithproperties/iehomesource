import { motion } from "framer-motion";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  Home as HomeIcon,
  MapPin,
  PhoneCall,
  Plane,
  ShieldCheck,
  Users,
  Users2,
  Wrench,
  HelpCircle,
  Award,
  Scale,
  TrendingUp,
  ClipboardCheck,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { cityMap, cities } from "@/data/cityData";
import { getCityImage } from "@/data/cityImages";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CityPage({ citySlug }: { citySlug: string }) {
  const data = cityMap[citySlug];

  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [citySlug]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fffc]">
        <HomeIcon className="h-12 w-12 text-cyan-600 mb-4" />
        <h1 className="text-2xl font-black uppercase tracking-tighter">City Not Found</h1>
        <Link href="/" className="mt-4 text-cyan-600 font-bold hover:underline uppercase text-sm tracking-widest">Return Home</Link>
      </div>
    );
  }

  const { name, county, tagline, intro, whyUs, highlights } = data;
  const image = getCityImage(citySlug);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <HomeIcon className="h-8 w-8 text-[#0891b2]" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Sell Fast Inland Empire
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/#why-us" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Why Choose Us</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Our Process</Link>
            <a href="tel:6268930240" className="flex items-center gap-2 bg-[#0891b2] text-white px-6 py-2.5 rounded-full font-black hover:bg-[#0e7490] transition-all shadow-lg shadow-cyan-600/20">
              <PhoneCall className="h-4 w-4" /> (626) 893-0240
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:col-span-7 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0891b2] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
                <MapPin className="h-3 w-3" /> {name}, CA • {county}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.05] mb-6 tracking-tight drop-shadow-2xl">
                {tagline}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed font-bold">
                {intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {highlights.map((item: string) => (
                  <div key={item} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <CheckCircle2 className="h-5 w-5 text-[#22d3ee] flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-[12px] border-[#0891b2] w-full max-w-[480px]">
                <div className="w-full h-[540px] p-2 bg-white flex items-center justify-center">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/e1P4JJeMVFN4MUZ1NS7o"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title={`Get a Cash Offer in ${name}`}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERT HOME BUYERS (Como en la Imagen 1) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 tracking-tighter text-slate-900 uppercase">
            Expert Home Buyers in <span className="text-[#0891b2]">{name}</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Since 2004, our family-owned business has provided nearly 20 years of experience offering fast 
            cash solutions for homeowners across California. As trusted local direct buyers based in the 
            Inland Empire, we pride ourselves on maintaining high ethical standards with a process that 
            features zero call centers and no impersonal middlemen. We buy houses as-is, allowing you to 
            skip all repairs, deep cleaning, and costly realtor commissions through our transparent California 
            fast home sale process, ensuring you receive a fair and honest price for your property today.
          </p>
        </div>
      </section>

      {/* ── SIMPLIFIED 3-STEP PROCESS (Como en la Imagen 1) ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tighter text-slate-900 uppercase">
              Our Simplified 3-Step Process
            </h2>
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">
              Selling a home doesn't have to be a nightmare. We've streamlined everything to be as simple as possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="h-8 w-8 text-[#0891b2]" />
              </div>
              <h3 className="text-xl font-black uppercase mb-4">1. Contact Us</h3>
              <p className="text-slate-600 text-sm font-medium">Call us or fill out the form. We'll discuss your property and situation immediately.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#0891b2]" />
              </div>
              <h3 className="text-xl font-black uppercase mb-4">2. Get Your Offer</h3>
              <p className="text-slate-600 text-sm font-medium">We'll present a fair, no-obligation cash offer based on local market conditions.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClipboardCheck className="h-8 w-8 text-[#0891b2]" />
              </div>
              <h3 className="text-xl font-black uppercase mb-4">3. Close Fast</h3>
              <p className="text-slate-600 text-sm font-medium">Pick your closing date. We handle the paperwork and you get paid in as little as 7 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SITUATIONS SECTION (Como en la Imagen 3) ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={image} className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tighter uppercase">
            We Buy Houses In Any Condition
          </h2>
          <p className="text-cyan-400 italic font-medium mb-16 text-lg">
            "It doesn't matter why you need to sell, we have a solution for every situation."
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, label: "Facing Foreclosure", sub: "Stop the auction process now." },
              { icon: Building2, label: "Inherited Property", sub: "Simple probate solutions." },
              { icon: Users, label: "Problem Tenants", sub: "We buy with renters in place." },
              { icon: Scale, label: "Divorce Settlement", sub: "Quick and fair asset division." },
              { icon: Plane, label: "Relocating Fast", sub: "Close on your timeline." },
              { icon: Wrench, label: "Major Repairs Needed", sub: "Foundation, roof, or fire." },
              { icon: Clock, label: "Behind On Taxes", sub: "Clear your debt instantly." },
              { icon: Users2, label: "Vacant Properties", sub: "End the maintenance costs." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-[#0891b2] transition-all group">
                <item.icon className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="font-black uppercase tracking-widest text-xs mb-1">{item.label}</p>
                  <p className="text-slate-400 text-[10px] font-medium leading-tight">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 text-[#0891b2]">
            <HomeIcon className="h-8 w-8" />
            <span className="font-serif font-black text-2xl tracking-tighter text-white uppercase">Sell Fast Inland Empire</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12">
            {cities.map((city) => (
              <Link key={city.slug} href={`/sell-my-house-fast-${city.slug}`} className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-tighter transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
          <p className="text-slate-600 font-bold text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Sell Fast Inland Empire • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}