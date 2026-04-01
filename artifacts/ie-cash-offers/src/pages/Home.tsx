import { motion } from "framer-motion";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  DollarSign,
  Home as HomeIcon,
  Key,
  MapPin,
  PhoneCall,
  Plane,
  Star,
  Users,
  Wrench,
  HelpCircle,
  ShieldCheck,
  Award,
  Clock,
  Scale,
  BadgeCheck,
  Users2 
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { cities } from "@/data/cityData";

import heroImg from "https://media.california.com/media/_versions_webp/articles/california_inland_empire__4088x2725____v1800x750__.webp";
import handshakeImg from "https://media.california.com/media/_versions_webp/articles/california_inland_empire__4088x2725____v1800x750__.webp";
import neighborhoodImg from "https://media.california.com/media/_versions_webp/articles/california_inland_empire__4088x2725____v1800x750__.webp";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-8 w-8 text-cyan-600" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">Sell Fast Inland Empire</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Home</Link>
            <a href="#why-us" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Why Choose Us</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Our Process</a>
            <a href="#faqs" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Questions</a>
            <a href="tel:6268930240" className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-full font-black hover:shadow-xl transition-all">
              <PhoneCall className="h-4 w-4" /> (626) 893-0240
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── GRADIENTE DIFUMINADO APLICADO */}
      <section className="relative min-h-screen lg:min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* El gradiente va de 95% de opacidad a la izquierda a 40% a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:col-span-6 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
                <BadgeCheck className="h-3 w-3" /> Professional Real Estate Solutions
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.05] mb-6 tracking-tight drop-shadow-2xl">
                Sell Your House <span className="text-cyan-400 italic">Fast</span> For A Fair Cash Price.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl leading-relaxed font-bold">
                We buy houses in the Inland Empire regardless of condition, location, or price point. If you need to sell quickly for any reason, we are here to help.
              </p>
              <p className="text-sm md:text-base text-slate-300 mb-10 max-w-xl leading-relaxed font-medium">
                Skip the months of waiting, the intrusive open houses, and the expensive repair lists. We buy your property as-is.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "No Agent Commissions or Fees",
                  "Close On Your Preferred Date",
                  "We Buy In 100% As-Is Condition",
                  "We Pay ALL Closing Costs",
                  "No Cleaning or Repairs Needed",
                  "Simple, Stress-Free Process"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── FORM BLOCK ── ALTURA CORREGIDA A 344 */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-8 border-cyan-600 w-full max-w-[520px]">
                <div className="w-full h-[480px] p-4 bg-white flex items-center justify-center">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/e1P4JJeMVFN4MUZ1NS7o"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-e1P4JJeMVFN4MUZ1NS7o"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form Webpage"
                    data-height="344"
                    data-layout-iframe-id="inline-e1P4JJeMVFN4MUZ1NS7o"
                    data-form-id="e1P4JJeMVFN4MUZ1NS7o"
                    title="Form Webpage"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION: WHY TRUST US ── */}
      <section id="why-us" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
                  Why People Trust <span className="text-cyan-600 italic underline decoration-cyan-600/30">Sell Fast Inland Empire</span> To Buy Their Homes
                </h2>
                <p className="text-lg text-slate-600 mb-8 font-bold leading-relaxed">
                  We aren't just another faceless investment firm. We are local professionals deeply committed to the Inland Empire community.
                </p>
                <div className="space-y-6 mb-10">
                  {[
                    { t: "Nearly A Decade of Experience", d: "Buying homes for cash with a proven track record of successful, honest closings." },
                    { t: "Ethical Professional Standards", d: "We are held to a higher standard of transparency. We believe in win-win solutions." },
                    { t: "Local & Family Owned", d: "Not a national franchise. You talk directly to the decision makers." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-cyan-600 p-1.5 rounded-lg shadow-lg shadow-cyan-600/20"><CheckCircle2 className="h-5 w-5 text-white" /></div>
                      <div>
                        <h4 className="text-sm font-black uppercase text-slate-900 tracking-tight">{item.t}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-snug">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl relative">
                  <div className="absolute -top-4 -left-4 bg-cyan-600 text-white p-3 rounded-2xl rotate-[-5deg] shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <p className="text-slate-600 leading-relaxed font-semibold italic text-lg mb-8">
                    "We handle every single transaction with the highest professional and ethical standards. When we buy your house, we buy it directly; meaning no listings, no showings, and zero repairs."
                  </p>
                  <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-cyan-600 font-black text-2xl tracking-tighter">100%</p>
                      <p className="text-[10px] font-black uppercase text-slate-400">Cash Guarantee</p>
                    </div>
                    <div>
                      <p className="text-cyan-600 font-black text-2xl tracking-tighter">0</p>
                      <p className="text-[10px] font-black uppercase text-slate-400">Hidden Fees</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6 opacity-50 grayscale">
                    <div className="flex items-center gap-2 font-black uppercase text-xs tracking-widest"><ShieldCheck className="h-4 w-4 text-cyan-600"/> Secure Data</div>
                    <div className="flex items-center gap-2 font-black uppercase text-xs tracking-widest"><Scale className="h-4 w-4 text-cyan-600"/> Verified Legal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <h2 className="text-5xl font-serif font-black tracking-tighter mb-6 text-slate-900 uppercase">Our Simplified 3-Step Process</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-bold text-lg leading-relaxed">
            Selling a home doesn't have to be a nightmare.
          </p>
          <div className="h-2 w-24 bg-cyan-600 mx-auto mt-6"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: PhoneCall, 
              title: "1. Initial Consultation", 
              desc: "Tell us about your property. You can fill out our secure form or give us a quick call. We'll perform a market analysis within minutes." 
            },
            { 
              icon: DollarSign, 
              title: "2. Formal Cash Offer", 
              desc: "If the property meets our criteria, we will present you with a fair, all-cash offer. There is never any obligation to accept." 
            },
            { 
              icon: Key, 
              title: "3. Choose Your Closing", 
              desc: "Once you accept, we open escrow at a reputable local title company. You pick the closing date that works for you." 
            },
          ].map((item, i) => (
            <div key={i} className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 group hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 group-hover:bg-cyan-600 transition-colors duration-500">
                <item.icon className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black mb-5 mt-4 uppercase tracking-tighter text-slate-900">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SITUATIONS ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <img src={neighborhoodImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 tracking-tighter uppercase">We Buy Houses In Any Condition</h2>
            <p className="text-slate-400 text-lg font-bold leading-relaxed italic">
              "It doesn't matter why you need to sell."
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, label: "Facing Foreclosure", d: "Stop the auction process now." },
              { icon: Building2, label: "Inherited Property", d: "Simple probate solutions." },
              { icon: Users, label: "Problem Tenants", d: "We buy with renters in place." },
              { icon: DollarSign, label: "Divorce Settlement", d: "Quick and fair asset division." },
              { icon: Plane, label: "Relocating Fast", d: "Close on your timeline." },
              { icon: Wrench, label: "Major Repairs Needed", d: "Foundation, roof, or fire." },
              { icon: Clock, label: "Behind On Taxes", d: "Clear your debt instantly." },
              { icon: Users2, label: "Vacant Properties", d: "End the maintenance costs." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4 backdrop-blur-md group hover:bg-cyan-600 transition-all duration-300">
                <item.icon className="h-10 w-10 text-cyan-400 group-hover:text-white" />
                <div>
                  <p className="font-black uppercase tracking-widest text-xs mb-1">{item.label}</p>
                  <p className="text-[10px] text-slate-400 font-bold group-hover:text-white/80">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faqs" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-black tracking-tighter mb-4 text-slate-900 uppercase">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Do you pay a fair price for my property?", a: "We offer cash, we close very quickly, and no effort or expense is required on your part to fix up the property." },
              { q: "How do you determine the offer price?", a: "We look at the location, repairs needed, and values of comparable houses sold in the Inland Empire recently." },
              { q: "Are there any fees or commissions?", a: "There are NO fees or commissions when you sell your house directly to us." },
              { q: "How are you different from an agent?", a: "Agents list properties; we are the ones actually buying the house with cash." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm group hover:border-cyan-600 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-3 italic leading-tight">
                   <HelpCircle className="h-6 w-6 text-cyan-600 flex-shrink-0" /> {faq.q}
                </h3>
                <p className="text-slate-600 font-medium pl-9 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 text-cyan-600">
            <HomeIcon className="h-8 w-8" />
            <span className="font-serif font-black text-2xl tracking-tighter text-white uppercase">Sell Fast Inland Empire</span>
          </div>
          <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.3em] mb-8">
            Serving San Bernardino & Riverside Counties Since 2016
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16 border-y border-white/5 py-12">
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Our Mission</h5>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">We provide a fast, fair, and honest way to sell your home in the Inland Empire.</p>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Cities We Serve</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {cities.map(({ name, slug }) => (
                  <Link
                    key={slug}
                    href={`/sell-my-house-fast-${slug}`}
                    className="text-slate-300 hover:text-cyan-600 text-sm font-medium transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Legal Disclaimer</h5>
              <p className="text-slate-300 text-sm leading-relaxed font-medium italic">Sell Fast Inland Empire is a private real estate investment firm. We are not real estate agents or brokers.</p>
            </div>
          </div>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Sell Fast Inland Empire • All Rights Reserved
          </p>
        </div>
      </footer>

    </div>
  );
}