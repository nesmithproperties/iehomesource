import { motion } from "framer-motion";
import {
  AlertCircle,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
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
  Scale,
  Users2,
  TrendingUp,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { cities } from "@/data/cityData";

const heroImg = "https://media.california.com/media/_versions_webp/articles/california_inland_empire__4088x2725____v1800x750__.webp";
const neighborhoodImg = "https://media.california.com/media/_versions_webp/articles/california_inland_empire__4088x2725____v1800x750__.webp";

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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-8 w-8 text-cyan-600" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Sell Fast Inland Empire
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Home</Link>
            <a href="#why-us" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Why Choose Us</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Our Process</a>
            <a href="#faqs" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">FAQs</a>
            <a href="tel:6268930240" className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-full font-black hover:shadow-xl transition-all">
              <PhoneCall className="h-4 w-4" /> (909) 202-6006
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen lg:min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
                  "Simple, Stress-Free Process",
                  "Fast Cash Home Offer",
                ].map((item: string) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-8 border-cyan-600 w-full max-w-[520px]">
                <div className="w-full h-[480px] p-4 bg-white flex items-center justify-center">
                  <iframe src="https://api.leadconnectorhq.com/widget/form/e1P4JJeMVFN4MUZ1NS7o" style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }} title="Form Webpage" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ── */}
      <section id="why-us" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#e1f9fe] border border-[#d6f6fd] text-[#00a8cc] text-[11px] font-black uppercase tracking-[0.05em] mb-8">
            <BadgeCheck className="h-3.5 w-3.5" /> Trusted by over 300 families
          </div>

          <h2 className="text-4xl font-serif font-black mb-6 text-slate-900 uppercase tracking-tighter">
            Expert Home Buyers in <span className="text-cyan-600">The Inland Empire</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
            Since 2004, our family-owned business has provided nearly 20 years of experience offering fast cash solutions for
            homeowners across California. As trusted local direct buyers based in the Inland Empire, we pride ourselves on
            maintaining high ethical standards with a process that features{" "}
            <span className="text-cyan-600 font-bold">zero call centers and no impersonal middlemen.</span>{" "}
            We buy houses as-is, allowing you to skip all repairs, deep cleaning, and costly realtor commissions through our
            transparent California fast home sale process, ensuring you receive a{" "}
            <span className="text-cyan-600 font-bold">fair and honest price</span>{" "}
            for your property today.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            What sets us apart is simple: we treat every homeowner the way we'd want to be treated ourselves. Whether you're
            facing foreclosure, going through a divorce, dealing with an inherited property, or simply ready to move on without
            the stress of a traditional listing, we have a solution tailored to your situation.{" "}
            <span className="text-cyan-600 font-bold">We close on your timeline</span> — as fast as 7 days or as flexible as
            you need — with no pressure, no hidden fees, and no obligation to accept our offer. Just an honest conversation
            with a local team that has helped hundreds of California families move forward with confidence.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <h2 className="text-5xl font-serif font-black tracking-tighter mb-6 text-slate-900 uppercase">
            Our Simplified 3-Step Process
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-bold text-lg leading-relaxed">
            Selling a home doesn't have to be a nightmare. We've streamlined everything to be as simple as possible.
          </p>
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
            <div key={i} className="relative p-10 bg-white rounded-3xl border border-slate-200 group hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 group-hover:bg-cyan-600 transition-colors duration-500">
                <item.icon className="h-8 w-8 text-cyan-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black mb-5 mt-4 uppercase tracking-tighter text-slate-900">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SITUATIONS SECTION (UPDATED) ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Simplified background - Removed image and gradients */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Title - Set to full white for better contrast */}
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 tracking-tighter uppercase text-white">
              We Buy Houses In Any Condition
            </h2>
            {/* Quote - Lighter gray for readability */}
            <p className="text-slate-200 text-lg font-bold leading-relaxed italic">
              "It doesn't matter why you need to sell, we have a solution for every situation."
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, label: "Facing Foreclosure", d: "Stop the auction process now.", anchor: "foreclosure" },
              { icon: Building2, label: "Inherited Property", d: "Simple probate solutions.", anchor: "inherited" },
              { icon: Users, label: "Problem Tenants", d: "We buy with renters in place.", anchor: "tenants" },
              { icon: DollarSign, label: "Divorce Settlement", d: "Quick and fair asset division.", anchor: "divorce" },
              { icon: Plane, label: "Relocating Fast", d: "Close on your timeline.", anchor: "relocation" },
              { icon: Wrench, label: "Major Repairs Needed", d: "Foundation, roof, or fire.", anchor: "repairs" },
              { icon: Clock, label: "Behind On Taxes", d: "Clear your debt instantly.", anchor: "payments" },
              { icon: Users2, label: "Vacant Properties", d: "End the maintenance costs.", anchor: "vacant" },
            ].map((item, i) => (
              <a
                key={i}
                href={`${import.meta.env.BASE_URL}we-buy-houses-any-condition-california#${item.anchor}`}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4 backdrop-blur-md group hover:bg-cyan-600 transition-all duration-300 cursor-pointer"
              >
                <item.icon className="h-10 w-10 text-cyan-400 group-hover:text-white" />
                <div>
                  <p className="font-black uppercase tracking-widest text-xs mb-1 text-white/90">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-slate-300 font-bold group-hover:text-white/80">
                    {item.d}
                  </p>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-white">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - Fondo suave y párrafos consolidados */}
      <section id="reviews" className="py-24 bg-[#f8fffc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-100 text-cyan-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Star className="h-3 w-3 fill-cyan-600 text-cyan-600" /> Real Inland Empire Homeowners
            </div>
            <h2 className="text-5xl font-serif font-black tracking-tighter mb-6 text-slate-900 uppercase">
              Don't Just Take <span className="text-cyan-600">Our Word For It</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Maria S.",
                location: "Riverside, CA",
                img: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "I needed to sell my inherited property quickly without spending thousands on repairs. They gave me a fair cash offer within 24 hours and closed in less than two weeks. I couldn't be happier with how simple the entire process was."
              },
              {
                name: "John R.",
                location: "Fontana, CA",
                img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Facing foreclosure was stressful, but their team stepped in and provided a fast cash solution that saved my credit and allowed me to move on. They handled everything with the utmost professionalism and ethical standards."
              },
              {
                name: "Brenda T.",
                location: "Moreno Valley, CA",
                img: "https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "We needed a fast home sale due to relocation and they delivered. As local direct buyers, they made us a competitive cash offer as-is, so we didn't have to clean or paint. Closing was seamless and perfectly timed."
              }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-600 text-cyan-600" />
                  ))}
                </div>

                {/* Texto consolidado con SEO */}
                <p className="text-lg text-slate-700 font-bold leading-relaxed mb-10 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-100">
                  <img src={review.img} alt={`Cash sale in ${review.location}`} className="h-14 w-14 rounded-full object-cover border-2 border-slate-100 shadow-sm" />
                  <div>
                    <h4 className="text-sm font-black uppercase text-slate-900 tracking-tight">{review.name}</h4>
                    <div className="flex items-center gap-1.5 text-slate-500">
                       <MapPin className="h-3 w-3 text-cyan-600" />
                       <span className="text-xs font-semibold">{review.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              { q: "How are you different from an agent?", a: "Agents list properties; we are the ones actually buying the house with cash." },
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

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 text-cyan-600">
            <HomeIcon className="h-8 w-8" />
            <span className="font-serif font-black text-2xl tracking-tighter text-white uppercase">Sell Fast Inland Empire</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16 border-y border-white/5 py-12">
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Our Mission</h5>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">We provide a fast, fair, and honest way to sell your home in the Inland Empire.</p>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Cities We Serve</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {cities.map(({ name, slug }) => (
                  <Link key={slug} href={`/sell-my-house-fast-${slug}`} className="text-slate-300 hover:text-cyan-600 text-sm font-medium transition-colors">{name}</Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Legal Disclaimer</h5>
              <p className="text-slate-300 text-sm leading-relaxed font-medium italic">Sell Fast Inland Empire is a private real estate investment firm. We are not real estate agents or brokers.</p>
            </div>
          </div>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">© {new Date().getFullYear()} Sell Fast Inland Empire • All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}