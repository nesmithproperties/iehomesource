import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, PhoneCall, Clock, ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    slug: "sell-house-fast-inland-empire",
    title: "5 Signs It's Time to Sell Your Inland Empire Home for Cash",
    excerpt:
      "Holding onto a property can cost more than you realize. If you recognize any of these signs, a fast cash sale may be your best move.",
    date: "March 28, 2025",
    readTime: "4 min read",
    category: "Selling Tips",
  },
  {
    slug: "selling-house-during-divorce-california",
    title: "How to Sell a House During a Divorce in California",
    excerpt:
      "Divorce is already stressful. Dealing with a shared property on top of it can feel overwhelming. Here's what California homeowners need to know.",
    date: "March 14, 2025",
    readTime: "5 min read",
    category: "Divorce",
  },
  {
    slug: "inherited-house-california",
    title: "What Happens When You Inherit a House in California?",
    excerpt:
      "Inheriting a property comes with decisions that need to be made quickly. We break down your options so you can choose what's best for your family.",
    date: "February 27, 2025",
    readTime: "6 min read",
    category: "Probate",
  },
  {
    slug: "foreclosure-timeline-california",
    title: "Foreclosure Timeline in California: What Homeowners Need to Know",
    excerpt:
      "California foreclosures follow a specific legal process. Understanding the timeline gives you more options — including selling before it's too late.",
    date: "February 10, 2025",
    readTime: "5 min read",
    category: "Foreclosure",
  },
  {
    slug: "cash-offer-vs-listing-agent",
    title: "Cash Offer vs. Listing With an Agent: Which Is Right for You?",
    excerpt:
      "Both paths have their place. We give you an honest comparison so you can make the decision that fits your timeline and goals.",
    date: "January 22, 2025",
    readTime: "5 min read",
    category: "Selling Tips",
  },
  {
    slug: "sell-rental-property-inland-empire",
    title: "How to Sell a Rental Property With Tenants in the Inland Empire",
    excerpt:
      "Selling a tenant-occupied home has its own set of rules in California. Here's what landlords need to know before listing — or accepting a cash offer.",
    date: "January 8, 2025",
    readTime: "5 min read",
    category: "Landlords",
  },
];

const categoryColors: Record<string, string> = {
  "Selling Tips": "bg-cyan-600/10 text-cyan-700 border-cyan-200",
  Divorce: "bg-purple-600/10 text-purple-700 border-purple-200",
  Probate: "bg-amber-600/10 text-amber-700 border-amber-200",
  Foreclosure: "bg-red-600/10 text-red-700 border-red-200",
  Landlords: "bg-green-600/10 text-green-700 border-green-200",
};

export default function BlogPage() {
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
            <Link href="/blog" className="text-cyan-600 uppercase tracking-widest">Blog</Link>
            <Link href="/contact" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Contact Us</Link>
            <a href="tel:9092026006" className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-full font-black hover:shadow-xl transition-all">
              <PhoneCall className="h-4 w-4" /> (909) 202-6006
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-36 pb-16 bg-slate-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-[11px] font-black uppercase tracking-widest mb-6">
            <BookOpen className="h-3.5 w-3.5" /> Resources & Guides
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black tracking-tighter mb-6 uppercase">
            The IE Home Source <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-slate-300 text-lg font-medium leading-relaxed">
            Honest guides to help Inland Empire homeowners navigate selling, probate, foreclosure, and more — written by people who actually buy homes here.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif font-black text-xl tracking-tight text-slate-900 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-slate-400 text-xs font-medium">{post.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-cyan-600 font-black text-xs uppercase tracking-widest hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-black tracking-tighter uppercase mb-4">
            Ready to <span className="text-cyan-400">Sell Your Home?</span>
          </h2>
          <p className="text-slate-400 font-medium mb-8">
            Skip the research — just call us. We'll answer all your questions and make you a fair cash offer within 24 hours.
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
        <Link href="/" className="flex items-center justify-center gap-2 mb-4">
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
