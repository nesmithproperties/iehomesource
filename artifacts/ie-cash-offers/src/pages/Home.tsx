import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, DollarSign, Home as HomeIcon, MapPin, PhoneCall } from "lucide-react";
import LeadForm from "@/components/LeadForm";

// Images
import heroImg from "@/assets/images/hero.png";
import distressedImg from "@/assets/images/distressed.png";
import handshakeImg from "@/assets/images/handshake.png";
import neighborhoodImg from "@/assets/images/neighborhood.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-8 w-8 text-primary" />
            <span className="font-serif font-bold text-2xl tracking-tight text-foreground">IE Cash Offers</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" data-testid="link-how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How it Works</a>
            <a href="#benefits" data-testid="link-benefits" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Benefits</a>
            <a href="#contact" data-testid="link-nav-contact" className="flex items-center gap-2 text-sm font-bold text-primary">
              <PhoneCall className="h-4 w-4" /> (951) 555-0199
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Trusted in the Inland Empire
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-foreground mb-6">
              Sell your house fast. <span className="text-primary">No agents, no repairs.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We buy houses as-is for cash in Riverside, San Bernardino, and surrounding areas. Get a fair offer in 24 hours and close in as little as 7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" data-testid="button-hero-cta" className="inline-flex justify-center items-center h-14 px-8 rounded-md bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Get Your Cash Offer <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img src={heroImg} alt="Beautiful Southern California Home" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] md:aspect-square lg:aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* Trusted Logos / Social Proof */}
      <section className="border-y border-border bg-muted/30 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Helping homeowners across the Inland Empire</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            <span className="text-xl font-bold font-serif">Riverside</span>
            <span className="text-xl font-bold font-serif">San Bernardino</span>
            <span className="text-xl font-bold font-serif">Ontario</span>
            <span className="text-xl font-bold font-serif">Corona</span>
            <span className="text-xl font-bold font-serif">Fontana</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">How our process works</h2>
          <p className="text-lg text-muted-foreground">We've simplified real estate to give you a stress-free exit. No open houses, no waiting, no uncertainty.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: PhoneCall,
              title: "1. Contact Us",
              desc: "Fill out the form or give us a call. Tell us a bit about your property and your situation."
            },
            {
              icon: DollarSign,
              title: "2. Get Your Offer",
              desc: "We evaluate the home and present you with a fair, no-obligation cash offer within 24 hours."
            },
            {
              icon: CheckCircle2,
              title: "3. Choose Your Closing Date",
              desc: "Accept the offer and we close at a local reputable title company on the day you choose."
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } } }}
              className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <step.icon className="w-32 h-32" />
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split Section: Any Condition */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
              <img src={distressedImg} alt="House needing repairs" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">We buy houses in <span className="text-primary">any condition</span></h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                Inherited a house full of stuff? Roof caving in? Dealing with bad tenants? Don't spend a dime on repairs or cleaning. We buy properties exactly as they are. Leave what you don't want behind.
              </p>
              <ul className="space-y-4 mb-8">
                {["No cleaning or staging required", "No repairs or renovations needed", "We handle code violations and unpermitted work", "Leave unwanted belongings behind"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-lg text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits vs Traditional */}
      <section id="benefits" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">A better way to sell</h2>
          <p className="text-lg text-muted-foreground">See how selling to IE Cash Offers compares to the traditional real estate route.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div className="border border-border rounded-3xl p-8 md:p-12 bg-card/50">
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Traditional Agent</h3>
            <ul className="space-y-6">
              {[
                { label: "Commissions & Fees", value: "6% of sale price + hidden fees" },
                { label: "Repairs Needed", value: "Thousands out of pocket" },
                { label: "Closing Timeline", value: "30-90+ days" },
                { label: "Showings", value: "Multiple open houses, strangers in your home" },
                { label: "Certainty", value: "Buyer financing can fall through" }
              ].map((item, i) => (
                <li key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Us */}
          <div className="border-2 border-primary rounded-3xl p-8 md:p-12 bg-primary/5 relative shadow-xl shadow-primary/5">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              The IE Cash Way
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">IE Cash Offers</h3>
            <ul className="space-y-6">
              {[
                { label: "Commissions & Fees", value: "NONE. We pay all closing costs." },
                { label: "Repairs Needed", value: "NONE. We buy entirely as-is." },
                { label: "Closing Timeline", value: "As little as 7 days, or on your schedule." },
                { label: "Showings", value: "Just one quick walk-through." },
                { label: "Certainty", value: "We pay cash. No banks, no appraisals, no falling through." }
              ].map((item, i) => (
                <li key={i} className="border-b border-primary/20 pb-4 last:border-0 last:pb-0">
                  <div className="text-sm text-primary mb-1">{item.label}</div>
                  <div className="font-bold text-lg">{item.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Local. Fair. Transparent.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We aren't a faceless national corporation. We are local Inland Empire investors who understand this market intimately. Whether you're in Riverside, Redlands, or Rancho Cucamonga, we treat you like a neighbor because you are one.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Facing foreclosure? Going through a divorce? Inherited a property you can't manage? We provide discreet, professional solutions tailored to your unique situation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Homes Bought Locally</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">A+</div>
                  <div className="text-sm text-muted-foreground">Better Business Bureau</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <img src={handshakeImg} alt="Trust and handshake" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={neighborhoodImg} alt="Inland Empire Neighborhood" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to move on?</h2>
            <p className="text-xl text-muted-foreground">Fill out the form below to get your no-obligation cash offer started.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HomeIcon className="h-6 w-6 text-primary" />
                <span className="font-serif font-bold text-xl tracking-tight">IE Cash Offers</span>
              </div>
              <p className="text-background/60 leading-relaxed max-w-xs">
                The most trusted cash home buyers in the Inland Empire. We buy houses fast, for cash, in any condition.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-background/60">
                <li className="flex items-center gap-3"><PhoneCall className="h-5 w-5 text-primary" /> (951) 555-0199</li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Riverside, CA 92501</li>
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
            &copy; {new Date().getFullYear()} IE Cash Offers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
