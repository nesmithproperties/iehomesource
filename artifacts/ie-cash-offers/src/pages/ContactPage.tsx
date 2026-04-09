import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Building2,
  PhoneCall,
  Clock,
  CheckCircle2,
  MessageSquare,
  DollarSign,
  CalendarCheck,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How fast can I get a cash offer?",
    a: "We typically provide a no-obligation cash offer within 24 hours of our initial call. There's no pressure — take as much time as you need to decide.",
  },
  {
    q: "Do I need to clean or repair anything before selling?",
    a: "Absolutely not. We buy houses in any condition — as-is. Whether the property needs major repairs, has been damaged, or is full of belongings, we handle all of it after closing.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "None. There are no agent commissions, no closing costs, and no hidden fees of any kind. The offer we make is the amount you walk away with.",
  },
  {
    q: "How do you determine your offer price?",
    a: "We look at the current market value of your home, its condition, the local Inland Empire market, and comparable sales nearby. Our offers are fair, transparent, and we're happy to walk you through the math.",
  },
  {
    q: "How quickly can we close?",
    a: "We can close in as little as 7 days if needed, or on any date that works for your situation. You pick the timeline — we work around you.",
  },
  {
    q: "Will someone actually visit my home?",
    a: "Yes. After our initial call, we'll schedule a brief visit (usually 20–30 minutes) to see the property. This helps us confirm the offer and make sure everything is accurate.",
  },
  {
    q: "Is this only for homes in terrible condition?",
    a: "Not at all. We buy all kinds of homes — move-in ready, outdated, damaged, inherited, vacant, or tenant-occupied. If you need a fast, certain sale, we can help.",
  },
  {
    q: "Are you a real local company?",
    a: "Yes. Inland Empire Home Source is a locally owned, family-operated business based in the Inland Empire. We have been buying homes here since 2004 — we are not a national hedge fund or a tech company with no local presence.",
  },
];

const steps = [
  {
    icon: PhoneCall,
    title: "You call or submit your info",
    desc: "Reach us at (909) 202-6006 or submit your address online. Our team is available 7 days a week.",
  },
  {
    icon: MessageSquare,
    title: "We have a brief conversation",
    desc: "We'll ask a few questions about the property and your situation — no pressure, no obligation.",
  },
  {
    icon: DollarSign,
    title: "You receive a fair cash offer",
    desc: "Within 24 hours you'll have a clear, written offer. We'll explain exactly how we arrived at the number.",
  },
  {
    icon: CalendarCheck,
    title: "You choose the closing date",
    desc: "If you accept, pick any date that works for you. We handle the paperwork and all closing costs.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-slate-200 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors">
        <span className="font-black text-slate-900 pr-4">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <div className="px-5 pb-5 bg-white border-t border-slate-100">
          <p className="text-slate-600 leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-cyan-600" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Inland Empire Home Source
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/cities" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Cities</Link>
            <Link href="/blog" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Blog</Link>
            <Link href="/contact" className="text-cyan-600 uppercase tracking-widest">Contact Us</Link>
            <a href="tel:9092026006" className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-full font-black hover:shadow-xl transition-all">
              <PhoneCall className="h-4 w-4" /> (909) 202-6006
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 bg-slate-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-[11px] font-black uppercase tracking-widest mb-6">
            <MapPin className="h-3.5 w-3.5" /> Inland Empire, California
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black tracking-tighter mb-6 uppercase">
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-slate-300 text-lg font-medium leading-relaxed mb-10">
            We're a local team — real people, real conversations. Call us or read below to understand exactly what happens when you reach out.
          </p>
          <a
            href="tel:9092026006"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white text-xl font-black px-10 py-5 rounded-full transition-all shadow-2xl shadow-cyan-600/30"
          >
            <PhoneCall className="h-6 w-6" />
            (909) 202-6006
          </a>
          <p className="mt-4 text-slate-500 text-sm font-medium">Available 7 days a week · No pressure · No obligation</p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tighter uppercase mb-4">
              What Happens <span className="text-cyan-600">After You Call</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              No surprises. Here's exactly what our process looks like from first contact to closing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-8 flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-cyan-600 uppercase tracking-widest mb-1">Step {i + 1}</div>
                  <h3 className="font-black text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-black tracking-tighter uppercase mb-10">
            Our <span className="text-cyan-600">Commitment</span> to You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, label: "Fast Response", desc: "We call back within hours, not days." },
              { icon: CheckCircle2, label: "Zero Pressure", desc: "Our offer is yours to accept or decline — no follow-up harassment." },
              { icon: DollarSign, label: "No Hidden Costs", desc: "No fees, no commissions, no surprises at closing." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center">
                <div className="w-12 h-12 bg-cyan-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <div className="font-black text-slate-900 mb-2">{item.label}</div>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tighter uppercase mb-4">
              Frequently Asked <span className="text-cyan-600">Questions</span>
            </h2>
            <p className="text-slate-500 font-medium">Everything you need to know before you call.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-black tracking-tighter uppercase mb-4">
            Ready to Get Your <span className="text-cyan-400">Cash Offer?</span>
          </h2>
          <p className="text-slate-400 font-medium mb-8">
            Call us now — our team is standing by 7 days a week. The call is free, fast, and there is never any obligation.
          </p>
          <a
            href="tel:9092026006"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-black px-10 py-5 rounded-full transition-all shadow-2xl shadow-cyan-600/30"
          >
            <PhoneCall className="h-5 w-5" />
            (909) 202-6006
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 text-center border-t border-white/10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-4 text-cyan-600">
          <span className="font-serif font-black text-xl tracking-tighter text-white uppercase">Inland Empire Home Source</span>
        </Link>
        <div className="flex justify-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Inland Empire Home Source • All Rights Reserved
        </p>
      </footer>

    </div>
  );
}
