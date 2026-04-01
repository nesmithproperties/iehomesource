import { motion } from "framer-motion";
import {
  AlertCircle,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  Home as HomeIcon,
  MapPin,
  PhoneCall,
  Plane,
  ShieldCheck,
  Star,
  Users,
  Users2,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { cityMap, cities } from "@/data/cityData";

/**
 * LÓGICA DE IMÁGENES ÚNICAS POR CIUDAD
 * Se ha seleccionado una imagen icónica y representativa de cada ciudad de Internet.
 */
const getCityHeroImage = (slug: string) => {
  const images: Record<string, string> = {
    "riverside": "https://images.unsplash.com/photo-1599408162172-ef06f6e804f5?auto=format&fit=crop&q=80&w=1600", // Mount Rubidoux
    "san-bernardino": "https://images.unsplash.com/photo-1621245645391-7f938f322402?auto=format&fit=crop&q=80&w=1600", // Montañas de San Bernardino
    "fontana": "https://images.unsplash.com/photo-1541364983171-a8ba01d95cfc?auto=format&fit=crop&q=80&w=1600", // Zona de velocidad/industrial
    "temecula": "https://images.unsplash.com/photo-1516594709415-823b39a7380b?auto=format&fit=crop&q=80&w=1600", // Viñedos de Temecula
    "ontario": "https://images.unsplash.com/photo-1582882736171-f92576206037?auto=format&fit=crop&q=80&w=1600", // Cerca del Convention Center
    "moreno-valley": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1600", // Cerca del lago/montañas
  };
  // Imagen por defecto por si acaso
  return images[slug] || "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1600";
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cityFooterLinks = cities.map((c) => ({
  label: c.name,
  slug: c.slug,
}));

export default function SellMyHouseFast({ citySlug }: { citySlug: string }) {
  const data = cityMap[citySlug];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900 bg-[#f8fffc]">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Page Not Found</h1>
          <Link href="/" className="text-[#0891b2] underline font-bold">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { name, county, tagline, intro, whyUs, neighborhoods, highlights } = data;
  const heroImage = getCityHeroImage(citySlug);

  return (
    <div className="min-h-screen bg-[#f8fffc] font-sans text-slate-900">

      {/* ── Navigation (Colores Cyan-600) ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <HomeIcon className="h-8 w-8 text-[#0891b2]" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Inland Empire Cash Offers
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/how-it-works" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">How it Works</Link>
            <Link href="/about" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">About Us</Link>
            <Link href="/reviews" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Reviews</Link>
            <a
              href="tel:6268930240"
              className="flex items-center gap-2 bg-[#0891b2] text-white px-6 py-2.5 rounded-full font-black hover:shadow-xl transition-all"
            >
              <PhoneCall className="h-4 w-4" /> (626) 893-0240
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO (Imagen Única y Color Cyan) ── */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
        <img
          src={heroImage}
          alt={`Sell your house fast in ${name}, California`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-6 text-white text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0891b2] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
                <MapPin className="h-3 w-3" /> {name}, California · {county}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-[1.08] mb-6 tracking-tight drop-shadow-2xl">
                {tagline}
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed font-semibold">
                {intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                {highlights.map((item: string) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0891b2] flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:6268930240"
                className="inline-flex items-center gap-2 bg-[#0891b2] text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:shadow-2xl transition-all"
              >
                <PhoneCall className="h-5 w-5" /> Call Now — (626) 893-0240
              </a>
            </motion.div>

            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-6 w-full flex justify-center lg:justify-end"
            >
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-8 border-[#0891b2] w-full max-w-[520px]">
                <div className="px-6 pt-6 pb-2 bg-white">
                  <p className="text-sm font-black uppercase tracking-widest text-slate-900 text-center">
                    Get Your Free Cash Offer for Your {name} Home
                  </p>
                  <p className="text-xs text-slate-500 text-center mt-1 font-medium">
                    No obligation · No fees · Close in as little as 7 days
                  </p>
                </div>
                <div className="w-full h-[460px] p-4 bg-white flex items-center justify-center">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/e1P4JJeMVFN4MUZ1NS7o"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                    id={`inline-smhf-${citySlug}`}
                    title={`Get a Cash Offer — Sell Your House Fast in ${name}, California`}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WHY INLAND EMPIRE CASH OFFERS (Fondo #f8fffc y Color Cyan) ── */}
      <section className="py-24 bg-[#f8fffc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0891b2]/10 text-[#0891b2] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <Star className="h-3 w-3" /> Why {name} Homeowners Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
                  The Fastest Way To Sell Your {name}, California Home
                </h2>
                <p className="text-lg text-slate-600 mb-8 font-semibold leading-relaxed">
                  {whyUs}
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-[#f8fffc] p-10 rounded-3xl border border-slate-200 shadow-xl">
                  <h3 className="text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-[#0891b2]" /> What You Get With Inland Empire Cash Offers
                  </h3>
                  <div className="space-y-4 mb-8">
                    {[
                      `Fair cash offer for your ${name} home`,
                      "Zero repairs, cleaning, or staging",
                      "No commissions or hidden fees",
                      "We cover 100% of closing costs",
                      "Close in 7 days or on your timeline",
                      "Local experts who know " + name + ", CA",
                      "Deal directly with the decision-maker",
                      "No financing contingencies",
                    ].map((item: string) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-[#0891b2] flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-[#0891b2] font-black text-2xl tracking-tighter">100%</p>
                      <p className="text-[10px] font-black uppercase text-slate-400">Cash Guarantee</p>
                    </div>
                    <div>
                      <p className="text-[#0891b2] font-black text-2xl tracking-tighter">$0</p>
                      <p className="text-[10px] font-black uppercase text-slate-400">Fees or Commissions</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center opacity-60">
                  <ShieldCheck className="h-5 w-5 text-[#0891b2]" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">Trusted Local {name} Home Buyers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SITUATIONS (Fondo Oscuro Uniforme y Color Cyan) ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 tracking-tighter uppercase">
              We Buy {name}, California Homes In Any Situation
            </h2>
            <p className="text-slate-400 text-lg font-bold leading-relaxed italic">
              "No matter why you need to sell, Inland Empire Cash Offers provides a stress-free solution to your {name} real estate problems."
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, label: "Facing Foreclosure", d: "Stop the auction process now." },
              { icon: Building2, label: "Inherited Property", d: "Simple probate solutions." },
              { icon: Users, label: "Problem Tenants", d: "We buy with renters in place." },
              { icon: DollarSign, label: "Divorce Settlement", d: "Quick and fair asset division." },
              { icon: Plane, label: "Relocating Fast", d: "Close on your timeline." },
              { icon: Wrench, label: "Major Repairs Needed", d: "Foundation, roof, or fire damage." },
              { icon: Clock, label: "Behind On Taxes", d: "Clear your debt instantly." },
              { icon: Users2, label: "Vacant Properties", d: "End the maintenance costs." },
            ].map((item, i: number) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4 backdrop-blur-md group hover:bg-[#0891b2] transition-all duration-300"
              >
                <item.icon className="h-10 w-10 text-[#0891b2] group-hover:text-white" />
                <div>
                  <p className="font-black uppercase tracking-widest text-xs mb-1">{item.label}</p>
                  <p className="text-[10px] text-slate-400 font-bold group-hover:text-white/80">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS (Fondo #f8fffc y Color Cyan) ── */}
      <section className="py-24 bg-[#f8fffc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black tracking-tighter mb-6 text-slate-900 uppercase">
            We Buy Houses Throughout {name}, California
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {neighborhoods.map((n: string) => (
              <div key={n} className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-3 rounded-full shadow-sm">
                <MapPin className="h-4 w-4 text-[#0891b2]" />
                <span className="text-sm font-bold text-slate-700">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (Fondo #f8fffc y Color Cyan) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black tracking-tighter mb-4 text-slate-900 uppercase">
              Common Questions From {name} Homeowners
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: `How fast can you close on my ${name}, California home?`,
                a: `We can close in as little as 7 days once you accept our offer. We handle all paperwork and you pick the closing date that works for you.`,
              },
              {
                q: `Do I need to make repairs or clean out my ${name} house?`,
                a: `Absolutely not. We buy homes in ${name} in completely as-is condition. Leave whatever you don't want behind.`,
              },
              {
                q: `How do you determine the offer price for my ${name} home?`,
                a: `We analyze recent comparable sales in the ${name} area and assess the condition of your property to arrive at a fair number.`,
              },
              {
                q: `Are there any fees or commissions?`,
                a: `None. We are direct cash buyers, not agents. We do not charge commissions and we pay all closing costs.`,
              },
            ].map((faq, i: number) => (
              <div key={i} className="bg-[#f8fffc] border border-slate-200 rounded-2xl p-8 shadow-sm group hover:border-[#0891b2] transition-colors">
                <h3 className="text-base font-black text-slate-900 mb-4 italic leading-tight">Q: {faq.q}</h3>
                <p className="text-slate-600 font-medium text-sm"><span className="font-black text-slate-900">A: </span>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (Fondo Cyan-600) ── */}
      <section className="bg-[#0891b2] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tighter mb-6 uppercase leading-tight">
            Ready To Sell Your {name}, California Home For Cash?
          </h2>
          <a href="tel:6268930240" className="inline-flex items-center justify-center gap-2 bg-white text-[#0891b2] px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:shadow-2xl transition-all">
            <PhoneCall className="h-5 w-5" /> Call (626) 893-0240
          </a>
        </div>
      </section>

      {/* ── Footer (Color Cyan) ── */}
      <footer className="bg-slate-950 text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-8 text-[#0891b2]">
            <HomeIcon className="h-8 w-8" />
            <span className="font-serif font-black text-2xl tracking-tighter text-white uppercase">Inland Empire Cash Offers</span>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16 border-y border-white/5 py-12">
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Our Mission</h5>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">Providing the fastest and most honest way to sell your home in the Inland Empire.</p>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Cities We Serve</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {cityFooterLinks.map(({ label, slug }) => (
                  <Link key={slug} href={`/sell-my-house-fast-${slug}`} className="text-slate-300 hover:text-[#0891b2] text-sm font-medium transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Legal Info</h5>
              <p className="text-slate-300 text-xs italic">Inland Empire Cash Offers is a private real estate investment firm. We are not agents or brokers.</p>
            </div>
          </div>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">© {new Date().getFullYear()} Inland Empire Cash Offers</p>
        </div>
      </footer>
    </div>
  );
}