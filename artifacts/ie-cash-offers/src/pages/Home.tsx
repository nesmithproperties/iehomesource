import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Award,
  Ban,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  DollarSign,
  Home as HomeIcon,
  Key,
  MapPin,
  PhoneCall,
  Plane,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

import heroImg from "@/assets/images/hero-house.png";
import handshakeImg from "@/assets/images/handshake.png";
import neighborhoodImg from "@/assets/images/neighborhood.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-8 w-8 text-primary" />
            <span className="font-serif font-bold text-2xl tracking-tight text-foreground">Sell Fast Inland Empire</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#why-us" data-testid="link-why-us" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Why Us</a>
            <a href="#how-it-works" data-testid="link-how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" data-testid="link-testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#final-cta" data-testid="link-nav-contact" className="flex items-center gap-2 text-sm font-bold text-primary">
              <PhoneCall className="h-4 w-4" /> (626) 893-0240
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero — full-bleed background image ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-20">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[hsl(220,50%,10%)]/70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold mb-6 border border-white/25 backdrop-blur-sm">
                <MapPin className="h-4 w-4" /> Trusted in the Inland Empire
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white mb-5">
                Sell Your House Fast in Inland Empire for Cash
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-lg">
                Get a fair cash offer within 24 hours. No repairs. No agents. No fees.
              </p>
              <ul className="space-y-3">
                {["Close in as little as 7 days", "We buy houses in any condition", "No commissions or hidden costs"].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-base font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} id="hero-form">
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-background/95 backdrop-blur border-t border-border">
        <a href="#hero-form" data-testid="button-mobile-sticky-cta"
          className="flex justify-center items-center h-12 w-full rounded-md bg-primary text-white font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg">
          Get My Cash Offer <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>

      {/* ── Trust Bar ── */}
      <section className="border-y border-border bg-card py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: MapPin,       label: "Local Inland Empire Buyers" },
              { icon: Ban,          label: "No Fees or Commissions" },
              { icon: CalendarDays, label: "Close On Your Timeline" },
              { icon: Award,        label: "Hundreds of Homes Purchased" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3" data-testid={`trust-item-${label.replace(/\s+/g, "-").toLowerCase()}`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="why-us" className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <img src={handshakeImg} alt="Local IE Cash Offers team meeting with homeowner" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Why Inland Empire Homeowners Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                We are local cash buyers who understand the Inland Empire market. When you contact us, you are speaking directly with real buyers, not a call center.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We evaluate your property honestly and give you a fair cash offer based on real data. There is no pressure and no obligation. Our goal is to make the process simple and stress-free from start to finish.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Homes Bought Locally</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="text-3xl font-bold text-primary mb-1">A+</div>
                  <div className="text-sm text-muted-foreground">BBB Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Three simple steps to a stress-free sale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ClipboardList,
              step: "Step 1",
              title: "Submit Your Property",
              desc: "Fill out the form or call us. It takes less than a minute.",
            },
            {
              icon: DollarSign,
              step: "Step 2",
              title: "Receive Your Cash Offer",
              desc: "We review your property and send you a no-obligation offer within 24 hours.",
            },
            {
              icon: Key,
              step: "Step 3",
              title: "Close On Your Timeline",
              desc: "Choose your closing date. We handle all paperwork and pay all closing costs.",
            },
          ].map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } } }}
              className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              data-testid={`step-card-${i + 1}`}
            >
              <div className="absolute top-4 right-6 text-6xl font-bold text-primary/5 select-none">{i + 1}</div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{step}</p>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Situations Section ── */}
      <section className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src={neighborhoodImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              We Buy Houses In Any Situation
            </h2>
            <p className="text-lg text-white/70">No matter your situation, we provide a simple and reliable solution.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: AlertCircle, label: "Facing Foreclosure" },
              { icon: Building2,   label: "Inherited Property" },
              { icon: Users,       label: "Problem Tenants" },
              { icon: DollarSign,  label: "Divorce" },
              { icon: Plane,       label: "Relocating" },
              { icon: Wrench,      label: "Major Repairs Needed" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div key={label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.08 } } }}
                className="bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col items-center text-center gap-4 backdrop-blur-sm"
                data-testid={`situation-${label.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-white">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What Homeowners Say</h2>
          <p className="text-lg text-muted-foreground">Real experiences from real Inland Empire homeowners.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "They gave me a fair offer and closed quickly. I did not have to fix anything.", author: "Maria G.", location: "Riverside" },
            { quote: "The process was simple and stress-free. I would definitely recommend them.", author: "James R.", location: "San Bernardino" },
            { quote: "I needed to sell fast and they delivered exactly what they promised.", author: "Angela T.", location: "Ontario" },
          ].map(({ quote, author, location }, i) => (
            <motion.div key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } } }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col"
              data-testid={`testimonial-card-${i + 1}`}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1 text-base mb-6">"{quote}"</p>
              <div>
                <p className="font-bold text-foreground">{author}</p>
                <p className="text-sm text-muted-foreground">{location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="final-cta" className="relative overflow-hidden py-28 md:py-40">
        <img src={neighborhoodImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[hsl(220,50%,10%)]/75 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-5">
              Get Your Cash Offer Today
            </h2>
            <p className="text-lg md:text-xl text-white/75 mb-10">
              Find out what your home is worth. No obligation. No pressure.
            </p>
            <a href="#hero-form" data-testid="button-final-cta"
              className="inline-flex justify-center items-center h-14 px-10 rounded-md bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-colors shadow-xl shadow-primary/30">
              Get My Cash Offer <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HomeIcon className="h-6 w-6 text-primary" />
                <span className="font-serif font-bold text-xl tracking-tight">Sell Fast Inland Empire</span>
              </div>
              <p className="text-background/60 leading-relaxed max-w-xs">
                The most trusted cash home buyers in the Inland Empire. We buy houses fast, for cash, in any condition.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-background/60">
                <li className="flex items-center gap-3"><PhoneCall className="h-5 w-5 text-primary" /> (626) 893-0240</li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Inland Empire, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Service Areas</h4>
              <ul className="grid grid-cols-2 gap-2 text-background/60">
                <li>Riverside</li>
                <li>San Bernardino</li>
                <li>Corona</li>
                <li>Ontario</li>
                <li>Moreno Valley</li>
                <li>Fontana</li>
                <li>Redlands</li>
                <li>Rancho Cucamonga</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-background/10 text-center text-sm text-background/40">
            &copy; {new Date().getFullYear()} Sell Fast Inland Empire. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
