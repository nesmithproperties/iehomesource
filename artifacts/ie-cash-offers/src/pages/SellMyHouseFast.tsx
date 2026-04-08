import { motion } from "framer-motion";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  MapPin,
  PhoneCall,
  Plane,
  ShieldCheck,
  Star,
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
        <Building2 className="h-12 w-12 text-cyan-600 mb-4" />
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
            <Building2 className="h-8 w-8 text-[#0891b2]" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Inland Empire Home Source
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/cities" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Cities</Link>
            <Link href="/#why-us" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Why Choose Us</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Our Process</Link>
            <Link href="/#faqs" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">FAQs</Link>
            <a href="tel:9092026006" className="flex items-center gap-2 bg-[#0891b2] text-white px-6 py-2.5 rounded-full font-black hover:bg-[#0e7490] transition-all shadow-lg shadow-cyan-600/20">
              <PhoneCall className="h-4 w-4" /> (902) 202-6006
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
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:col-span-6 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0891b2] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
                <MapPin className="h-3 w-3" /> {name}, CA • {county}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.05] mb-6 tracking-tight drop-shadow-2xl">
                {tagline}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed font-bold line-clamp-3">
                {intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {highlights
                  .filter((h: string) =>
                    !h.toLowerCase().includes('closing cost') &&
                    !h.toLowerCase().includes('showings') &&
                    !h.toLowerCase().includes('open house') &&
                    !h.toLowerCase().includes('cleaning')
                  )
                  .slice(0, 4)
                  .map((item: string) => (
                  <div key={item} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <CheckCircle2 className="h-5 w-5 text-[#22d3ee] flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-8 border-cyan-600 w-full max-w-[520px]">
                <iframe
                  src="https://podio.com/webforms/30692898/2604476"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Get a Cash Offer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SIMPLIFIED 3-STEP PROCESS ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tighter text-slate-900 uppercase">
              How to Sell Your House Fast in {name}
            </h2>
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm max-w-2xl mx-auto">
              Forget the months-long listing process. Our simple 3-step process gets you from contact to cash in as little as 7 days.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="h-8 w-8 text-[#0891b2]" />
              </div>
              <h3 className="text-xl font-black uppercase mb-4">1. Tell Us About Your Home</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">Call us or fill out the quick form above. We'll ask a few simple questions about your {name} property and your situation — no obligation, no pressure.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#0891b2]" />
              </div>
              <h3 className="text-xl font-black uppercase mb-4">2. Receive Your Cash Offer</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">Within 24 hours, we'll present you with a fair, no-obligation cash offer based on current {name} market conditions. No repairs needed. No fees. No guessing.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClipboardCheck className="h-8 w-8 text-[#0891b2]" />
              </div>
              <h3 className="text-xl font-black uppercase mb-4">3. Close & Get Paid Fast</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">You choose the closing date. We handle all the paperwork and escrow. You get your cash — in as little as 7 days, with zero stress and zero surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CASH VS TRADITIONAL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tighter text-slate-900 uppercase">
              Cash Sale vs. Traditional Listing in {name}
            </h2>
            <p className="text-slate-500 font-medium text-base max-w-2xl mx-auto">
              See why hundreds of California homeowners choose a direct cash sale over listing with a real estate agent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0891b2] text-white rounded-3xl p-10">
              <h3 className="font-black uppercase text-lg tracking-widest mb-8 text-center">Inland Empire Cash Offers</h3>
              {[
                "Cash offer within 24 hours",
                "Close in as little as 7 days",
                "We pay ALL closing costs",
                "Zero agent commissions or fees",
                "No repairs, cleaning, or staging",
                "No open houses or strangers in your home",
                "No financing contingencies or deal fall-throughs",
                "You choose your closing date",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-100 text-slate-700 rounded-3xl p-10">
              <h3 className="font-black uppercase text-lg tracking-widest mb-8 text-center text-slate-900">Traditional Agent Listing</h3>
              {[
                "Weeks to months before your first offer",
                "Average close time: 45–90 days in California",
                "You pay 2–3% in closing costs",
                "6% agent commission off your sale price",
                "Repairs and staging often required",
                "Multiple showings and open houses",
                "Deals fall through due to financing issues",
                "Closing date controlled by the buyer's lender",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SITUATIONS SECTION ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={image} className="w-full h-full object-cover grayscale" alt={name} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tighter uppercase">
            We Buy {name} Homes In Any Situation
          </h2>
          <p className="text-cyan-400 italic font-medium mb-16 text-lg max-w-2xl mx-auto">
            "No matter what you're going through, we have a fast and fair solution. You don't have to face it alone."
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, label: "Facing Foreclosure", sub: "Stop the bank auction. Protect your credit and walk away with cash.", anchor: "foreclosure" },
              { icon: Building2, label: "Inherited Property", sub: "Skip the probate headaches. We buy inherited California homes as-is.", anchor: "inherited" },
              { icon: Users, label: "Problem Tenants", sub: "We purchase rental properties with tenants in place — no eviction needed.", anchor: "tenants" },
              { icon: Scale, label: "Divorce Settlement", sub: "Divide assets quickly and fairly. We close on your timeline.", anchor: "divorce" },
              { icon: Plane, label: "Job Relocation", sub: "Don't let your home hold you back. We close fast so you can move forward.", anchor: "relocation" },
              { icon: Wrench, label: "Major Repairs Needed", sub: "Foundation, roof, fire, mold — we buy it as-is, no repairs required.", anchor: "repairs" },
              { icon: Clock, label: "Behind On Payments", sub: "Catch up before it's too late. A fast cash sale can clear your debt.", anchor: "payments" },
              { icon: Users2, label: "Vacant Properties", sub: "End the insurance costs, taxes, and liability. Sell fast for cash.", anchor: "vacant" },
            ].map((item, i) => (
              <a
                key={i}
                href={`${import.meta.env.BASE_URL}we-buy-houses-any-condition-california#${item.anchor}`}
                className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-[#0891b2] transition-all group cursor-pointer"
              >
                <item.icon className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="font-black uppercase tracking-widest text-xs mb-2">{item.label}</p>
                  <p className="text-slate-400 text-[11px] font-medium leading-snug">{item.sub}</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 text-[#0891b2]">
            <span className="font-serif font-black text-2xl tracking-tighter text-white uppercase">Inland Empire Home Source</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12">
            {cities.map((city) => (
              <Link key={city.slug} href={`/sell-my-house-fast-${city.slug}`} className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-tighter transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
          <p className="text-slate-600 font-bold text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Inland Empire Home Source • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}