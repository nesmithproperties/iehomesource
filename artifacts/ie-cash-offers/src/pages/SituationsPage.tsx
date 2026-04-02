import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Building2,
  Users,
  Scale,
  Plane,
  Wrench,
  Clock,
  Users2,
  Home as HomeIcon,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { cities } from "@/data/cityData";

const situations = [
  {
    id: "foreclosure",
    icon: AlertCircle,
    label: "Facing Foreclosure",
    headline: "Stop Foreclosure in California — Sell Your House Fast for Cash",
    body: [
      "Foreclosure is one of the most stressful situations a homeowner can face. In California, the foreclosure process can move quickly — once your lender records a Notice of Default (NOD), you may have as little as 111 days before your home is sold at a trustee sale. The consequences go far beyond losing your home: a foreclosure on your record can damage your credit score by 100–150 points or more and follow you for up to seven years, making it difficult to rent, borrow, or rebuild financially.",
      "The good news is that a fast cash sale can stop the foreclosure process in its tracks. At Inland Empire Cash Offers, we work with homeowners throughout Southern California who are behind on payments and facing foreclosure. We can make you a fair cash offer within 24 hours and close before your auction date — allowing you to pay off your mortgage balance, avoid the foreclosure on your record, and potentially walk away with remaining equity in your pocket.",
      "We understand how overwhelming this situation feels, and we approach every homeowner with empathy and zero judgment. There are no fees, no commissions, and no pressure. If you're facing foreclosure in Riverside, San Bernardino, or anywhere else in the Inland Empire, call us today — the sooner we connect, the more options we can give you.",
    ],
    cta: "Get a Cash Offer Before Your Auction Date",
  },
  {
    id: "inherited",
    icon: Building2,
    label: "Inherited Property",
    headline: "Inherited a House in California? We Make It Simple to Sell Fast",
    body: [
      "Inheriting a property in California can feel like an unexpected burden — especially when you're already dealing with the emotional weight of losing a loved one. Between probate court, outstanding mortgages, property taxes, deferred maintenance, and disagreements among family members, an inherited home can quickly become a financial and logistical headache. And if the property is in another city or state from where you live, managing it remotely only adds to the stress.",
      "Inland Empire Cash Offers specializes in buying inherited properties throughout Southern California, and we do it in any condition. We can work directly with the estate, the executor, or multiple heirs to make the process as smooth as possible. Whether the home is occupied, vacant, in probate, or needs significant repairs — it doesn't matter. We buy it as-is, so you don't have to spend a dime on cleanup, renovations, or staging.",
      "We're experienced in the unique challenges that come with selling inherited real estate in California, including properties that are still in probate. If you've inherited a home in the Inland Empire and you're not sure what your options are, reach out to us — we'll walk you through the process, answer your questions, and make you a fair cash offer with no obligation.",
    ],
    cta: "Sell Your Inherited California Home — No Hassle",
  },
  {
    id: "tenants",
    icon: Users,
    label: "Problem Tenants",
    headline: "Selling a Rental Property With Problem Tenants in California",
    body: [
      "California has some of the strongest tenant protection laws in the country, which can make it incredibly difficult to remove problematic renters — even when you want to sell your property. Non-paying tenants, lease violations, and damage to the property are all situations that can leave landlords feeling trapped. Traditional buyers typically want vacant homes, which means you'd need to go through a costly, time-consuming eviction process before you could even list your property.",
      "Inland Empire Cash Offers buys rental properties with tenants in place throughout Southern California. We are experienced investors who understand California's landlord-tenant laws, and we take on the tenant situation ourselves — so you don't have to. Whether your tenants are behind on rent, refusing to leave, or causing damage to the property, we can purchase your home as-is and handle everything after closing.",
      "If you're a tired landlord who's done dealing with problem tenants and just wants out, we can help you sell fast, avoid the eviction process, and get cash in hand without any of the legal headaches. We serve all of the Inland Empire, including Riverside, San Bernardino, Fontana, Rialto, and beyond.",
    ],
    cta: "Sell Your Rental — Tenants In Place, No Problem",
  },
  {
    id: "divorce",
    icon: Scale,
    label: "Divorce Settlement",
    headline: "Selling a House During Divorce in California — Fast and Fair",
    body: [
      "Divorce is already one of life's most difficult transitions — and when a shared home is involved, it can make the process significantly more complicated. In California, property acquired during a marriage is generally considered community property, meaning both spouses typically have an equal claim. Deciding whether to sell, who gets to stay, and how to split the equity can lead to prolonged disputes, legal fees, and delays that leave both parties stuck in limbo.",
      "A fast cash sale is often the cleanest solution. When you sell your home to Inland Empire Cash Offers, you can divide the proceeds fairly, close quickly, and both move forward without dragging the process out for months. We work with divorcing homeowners throughout the Inland Empire and can coordinate with attorneys and courts when needed to make the transaction as smooth as possible.",
      "We buy homes in any condition and can accommodate the specific closing timeline required by your divorce proceedings. There are no agent commissions to split, no repair costs to negotiate, and no delays from buyer financing. Just a fair cash offer, a fast closing, and a clean break for both parties.",
    ],
    cta: "Sell Your Home Fast During Divorce — We Can Help",
  },
  {
    id: "relocation",
    icon: Plane,
    label: "Job Relocation",
    headline: "Relocating for Work? Sell Your California Home Fast for Cash",
    body: [
      "A new job opportunity or company transfer is exciting — but it can also put enormous pressure on your timeline. If you're relocating out of the Inland Empire or out of California entirely, you may not have the luxury of waiting 60–90 days for a traditional home sale to close. Carrying two mortgages, managing a home from a distance, or trying to coordinate a closing from another state is stressful and expensive.",
      "Inland Empire Cash Offers can close in as little as 7 days, which means you can sell your home and move without looking back. We make the process simple: tell us about your property, get a cash offer within 24 hours, and choose a closing date that aligns with your moving timeline. No repairs, no staging, no open houses. You can even leave behind furniture or personal items — we handle it.",
      "Whether you're relocating from Riverside, Rancho Cucamonga, Corona, Murrieta, or anywhere else in Southern California, we're here to make your move as seamless as possible. Don't let your home slow you down from the next chapter of your life.",
    ],
    cta: "Sell Before You Move — Get a Fast Cash Offer",
  },
  {
    id: "repairs",
    icon: Wrench,
    label: "Major Repairs Needed",
    headline: "Selling a House That Needs Major Repairs in California — We Buy As-Is",
    body: [
      "Not every homeowner has the time, money, or energy to fix up a property before selling it. Foundation problems, roof damage, fire or smoke damage, mold, outdated electrical or plumbing, and structural issues are all situations that can make a traditional sale nearly impossible — or require tens of thousands of dollars in repairs before a conventional buyer's lender will approve the purchase.",
      "At Inland Empire Cash Offers, we buy homes in any condition throughout Southern California — and we mean any condition. We've purchased properties with significant foundation damage, fire-damaged homes, homes with full-roof failures, severe mold infestations, and everything in between. We don't require repairs, inspections, or renovations before closing. We evaluate the property as it currently stands and make you a fair offer based on its current market value.",
      "If you own a home in the Inland Empire that needs more work than you're willing or able to handle, you have options. You don't have to pour money into a property just to sell it — and you don't have to accept a lowball offer just because the home needs work. We'll give you a fair, honest cash offer with no obligation. Call us today and let's talk about what your home is worth.",
    ],
    cta: "Get a Fair Cash Offer — No Repairs Required",
  },
  {
    id: "payments",
    icon: Clock,
    label: "Behind On Payments",
    headline: "Behind on Mortgage Payments in California? Here's How We Can Help",
    body: [
      "Falling behind on your mortgage payments can happen to anyone — a job loss, a medical emergency, a divorce, or any unexpected life event can make it impossible to keep up. In California, once you miss three to four months of payments, your lender can begin the formal foreclosure process. Every month you wait, the situation becomes harder to resolve — late fees accumulate, your credit takes damage, and your options narrow.",
      "Selling your home for cash is often the fastest and most financially sound way out of this situation. If you have equity in your home — even a small amount — a cash sale can allow you to pay off the outstanding mortgage balance, settle any arrears, avoid a foreclosure on your record, and potentially put money in your pocket to start fresh. Inland Empire Cash Offers can make you a cash offer within 24 hours and close in as little as 7 days, which is often fast enough to stop the clock on the foreclosure process.",
      "We work with homeowners across the Inland Empire who are in difficult financial situations, and we do it with compassion and zero judgment. If you're behind on payments and worried about what comes next, reaching out to us costs you nothing and could save you thousands of dollars — and years of credit damage.",
    ],
    cta: "Sell Fast Before It's Too Late — Get Your Cash Offer",
  },
  {
    id: "vacant",
    icon: Users2,
    label: "Vacant Properties",
    headline: "Selling a Vacant Home in California — Stop the Costs and Sell Fast",
    body: [
      "Owning a vacant property in California is more costly than most homeowners realize. Beyond the ongoing mortgage payments, you're also responsible for property taxes, homeowner's insurance (which is often higher for vacant properties), utility minimums, HOA fees, regular maintenance, and the risk of vandalism, squatters, or code violations from the city. Every month a property sits vacant, you're paying for it — even if no one is living there.",
      "Whether your vacant home is a former rental, an inherited property, a house you've already moved out of, or a property that's been sitting because it needs too much work to sell traditionally, Inland Empire Cash Offers can help. We buy vacant homes throughout Southern California in any condition, with no repairs, no cleanup, and no showings. We handle everything from the initial offer through closing, and we can move as fast as you need.",
      "Selling a vacant property quickly isn't just financially smart — it's a way to eliminate ongoing risk and liability. The sooner you sell, the sooner you stop paying. Call us today for a fast, fair cash offer on your vacant Inland Empire home.",
    ],
    cta: "Stop Paying for a Vacant Home — Get a Cash Offer",
  },
];

export default function SituationsPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* NAV */}
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
            <Link href="/cities" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Cities</Link>
            <a href={`${import.meta.env.BASE_URL}#why-us`} className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Why Choose Us</a>
            <a href={`${import.meta.env.BASE_URL}#how-it-works`} className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Our Process</a>
            <a href={`${import.meta.env.BASE_URL}#faqs`} className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">FAQs</a>
            <a href="tel:6268930240" className="flex items-center gap-2 bg-[#0891b2] text-white px-6 py-2.5 rounded-full font-black hover:bg-[#0e7490] transition-all shadow-lg shadow-cyan-600/20">
              <PhoneCall className="h-4 w-4" /> (626) 893-0240
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 bg-slate-950 text-white text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0891b2] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            We Have A Solution For Every Situation
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black leading-tight tracking-tighter mb-6 max-w-4xl mx-auto">
            We Buy Houses in <span className="text-[#22d3ee] italic">Any Condition</span> — For Any Reason
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            No matter what you're going through, there's a fast, fair, and honest path forward. Explore the situations below and find the information that applies to you.
          </p>
          <a
            href="tel:6268930240"
            className="inline-flex items-center gap-2 bg-[#0891b2] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[#0e7490] transition-all shadow-xl shadow-cyan-900/30"
          >
            <PhoneCall className="h-5 w-5" /> Call Now: (626) 893-0240
          </a>
        </motion.div>
      </section>

      {/* JUMP LINKS */}
      <section className="bg-slate-100 border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-2 justify-center">
          {situations.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest bg-white border border-slate-200 text-slate-700 hover:bg-[#0891b2] hover:text-white hover:border-[#0891b2] px-3 py-2 rounded-full transition-all"
            >
              <s.icon className="h-3.5 w-3.5" />
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* SITUATION SECTIONS */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
        {situations.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="h-7 w-7 text-[#0891b2]" />
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#0891b2]">
                  Situation {i + 1} of {situations.length}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-slate-900 mb-8 leading-snug">
                {s.headline}
              </h2>
              <div className="space-y-5 mb-10">
                {s.body.map((para, j) => (
                  <p key={j} className="text-slate-600 leading-relaxed text-[17px] font-medium">
                    {para}
                  </p>
                ))}
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#0891b2] flex-shrink-0" />
                <p className="text-slate-700 font-bold text-sm flex-1">{s.cta}</p>
                <a
                  href="tel:6268930240"
                  className="flex items-center gap-2 bg-[#0891b2] text-white px-5 py-3 rounded-full font-black text-sm hover:bg-[#0e7490] transition-all whitespace-nowrap"
                >
                  <PhoneCall className="h-4 w-4" /> Call Now
                </a>
              </div>
              {i < situations.length - 1 && (
                <div className="mt-16 border-b border-slate-200" />
              )}
            </motion.div>
          </section>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <section className="bg-[#0891b2] py-20 text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tighter mb-4">
          Ready to Get Your Cash Offer?
        </h2>
        <p className="text-white/85 text-lg font-medium mb-8 max-w-xl mx-auto">
          No fees. No repairs. No pressure. Just a fast, honest, and fair cash offer for your Southern California home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:6268930240"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0891b2] px-8 py-4 rounded-full font-black text-lg hover:bg-slate-100 transition-all"
          >
            <PhoneCall className="h-5 w-5" /> (626) 893-0240
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all"
          >
            <ChevronRight className="h-5 w-5" /> Back to Home
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HomeIcon className="h-7 w-7 text-[#0891b2]" />
            <span className="font-serif font-black text-xl tracking-tighter text-white uppercase">Sell Fast Inland Empire</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-10">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/sell-my-house-fast-${city.slug}`}
                className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-tighter transition-colors"
              >
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
