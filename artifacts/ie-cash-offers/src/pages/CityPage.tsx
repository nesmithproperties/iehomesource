import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  MapPin,
  PhoneCall,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import heroImg from "@/assets/images/hero-house.png";
import { cities } from "@/data/cityData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface CityPageProps {
  city: string;
  county: string;
  description: string;
  highlights: string[];
  image: string;
}

const cityData: Record<string, CityPageProps> = {
  riverside: {
    city: "Riverside",
    county: "Riverside County",
    image: "https://www.rcc.edu/images/about/Riverside-lg.jpg",
    description: "Riverside is the largest city in the Inland Empire and home to a diverse range of neighborhoods. Whether you're in Canyon Crest, Wood Streets, or near UCR, we buy houses throughout Riverside quickly and for a fair cash price.",
    highlights: [
      "All Riverside neighborhoods served",
      "Close in as little as 7 days",
      "No repairs or clean-up needed",
      "We cover all closing costs",
    ],
  },
  "san-bernardino": {
    city: "San Bernardino",
    county: "San Bernardino County",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/SanBernardinoStationStreetside_%28cropped%29.jpg",
    description: "San Bernardino homeowners face unique challenges—whether it's an aging property, financial pressure, or a life transition. We buy houses throughout San Bernardino in any condition, with no fees or commissions.",
    highlights: [
      "All San Bernardino areas served",
      "As-is purchases — no repairs",
      "Fast, flexible closing dates",
      "Cash offers within 24 hours",
    ],
  },
  fontana: {
    city: "Fontana",
    county: "San Bernardino County",
    image: "https://imagescdn.homes.com/i2/ozjvohAgLaD0aPeY3YEO1M2ocXlR1cLjbCnVNU2M7wE/102/fontana-ca-2.jpg?p=1",
    description: "Fontana is a fast-growing city with a strong community feel. If you need to sell your Fontana home fast—whether due to relocation, financial hardship, or inherited property—we can help with a direct cash offer.",
    highlights: [
      "Serving all Fontana zip codes",
      "No agent commissions or fees",
      "Buy in any condition",
      "Flexible closing timeline",
    ],
  },
  "moreno-valley": {
    city: "Moreno Valley",
    county: "Riverside County",
    image: "https://images.trvl-media.com/place/10582/6dedbeb8-a813-4c2e-a2dd-d97e5c3fdd6f.jpg",
    description: "Moreno Valley homeowners can skip the stress of listing. We purchase homes throughout MoVal quickly and fairly—no open houses, no repairs, no waiting months for a buyer.",
    highlights: [
      "All MoVal neighborhoods covered",
      "We handle all paperwork",
      "Zero fees or hidden costs",
      "Close on your schedule",
    ],
  },
  "rancho-cucamonga": {
    city: "Rancho Cucamonga",
    county: "San Bernardino County",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f",
    description: "Rancho Cucamonga has some of the most desirable properties in the Inland Empire. If you need a quick, hassle-free sale, we make competitive cash offers on homes throughout RC—from Victoria Gardens to Etiwanda.",
    highlights: [
      "Competitive cash offers for RC homes",
      "No listing, showings, or open houses",
      "Sell in any condition or situation",
      "Close as fast as 7 days",
    ],
  },
  ontario: {
    city: "Ontario",
    county: "San Bernardino County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Ontario's central location makes it a hub for the Inland Empire. If you're looking to sell your Ontario home without the traditional hassle, we provide direct cash purchases with a smooth, transparent process.",
    highlights: [
      "All Ontario zip codes served",
      "No repairs or updates required",
      "Cash offer within 24 hours",
      "We pay all closing costs",
    ],
  },
  corona: {
    city: "Corona",
    county: "Riverside County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Corona is a thriving city with a growing real estate market. Whether you're dealing with a difficult tenant, facing foreclosure, or simply need to sell fast, we buy houses throughout Corona quickly and fairly.",
    highlights: [
      "Serving all Corona neighborhoods",
      "Fast and fair cash offers",
      "No commissions or agent fees",
      "Flexible closing dates",
    ],
  },
  victorville: {
    city: "Victorville",
    county: "San Bernardino County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Victorville homeowners in the High Desert can count on us for a fast, direct sale. We understand the High Desert market and can make fair cash offers on homes throughout Victorville regardless of condition.",
    highlights: [
      "High Desert specialists",
      "All Victorville areas covered",
      "Any condition, any situation",
      "Close in as little as 7 days",
    ],
  },
  murrieta: {
    city: "Murrieta",
    county: "Riverside County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Murrieta is one of the fastest-growing cities in Southern California. If you need to sell your Murrieta home without the stress of a traditional listing, we offer a fast, honest, and straightforward cash buying process.",
    highlights: [
      "All Murrieta neighborhoods served",
      "No repairs or staging needed",
      "Transparent offer process",
      "We cover all closing costs",
    ],
  },
  temecula: {
    city: "Temecula",
    county: "Riverside County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Temecula's wine country charm attracts buyers from across SoCal. But if you need to sell quickly, the traditional market can be slow. We buy Temecula homes directly for cash—no waiting, no hassle.",
    highlights: [
      "Serving all Temecula zip codes",
      "Fast cash offers",
      "Buy as-is — no repairs",
      "Flexible and fast closings",
    ],
  },
  rialto: {
    city: "Rialto",
    county: "San Bernardino County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Rialto homeowners who need a quick, straightforward sale can rely on us. We buy homes throughout Rialto in any condition and situation—no fees, no repairs, no waiting.",
    highlights: [
      "All Rialto areas covered",
      "Cash offers within 24 hours",
      "No commissions or hidden fees",
      "Close on your timeline",
    ],
  },
  hesperia: {
    city: "Hesperia",
    county: "San Bernardino County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    description: "Hesperia is a growing High Desert community with a wide range of properties. We buy houses throughout Hesperia quickly and fairly—whether you're behind on payments, need to relocate, or just want a fast, clean sale.",
    highlights: [
      "High Desert market experts",
      "Serving all Hesperia neighborhoods",
      "Any condition or situation",
      "Fast, honest cash offers",
    ],
  },
};

export default function CityPage({ citySlug }: { citySlug: string }) {
  const data = cityData[citySlug];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    window.scrollTo(0, 0);
  }, [citySlug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">City Not Found</h1>
          <Link href="/" className="text-[#0891b2] underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const { city, county, description, highlights, image } = data;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-[#0891b2]" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">Inland Empire Home Source</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/cities" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Cities</Link>
            <Link href="/blog" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Blog</Link>
            <Link href="/contact" className="text-slate-600 hover:text-[#0891b2] transition-colors uppercase tracking-widest">Contact Us</Link>
            <a href="tel:9092026006" className="flex items-center gap-2 bg-[#0891b2] text-white px-6 py-2.5 rounded-full font-black hover:bg-[#0e7490] transition-all shadow-lg shadow-cyan-600/20">
              <PhoneCall className="h-4 w-4" /> (909) 202-6006
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={image || heroImg} alt={city} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:col-span-6 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0891b2] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
                <MapPin className="h-3 w-3" /> {county}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.05] mb-6 tracking-tight drop-shadow-2xl">
                We Buy Houses In <span className="text-[#22d3ee] italic">{city}</span> For Cash.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed font-bold">
                {description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {highlights.map((item) => (
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

      <footer className="bg-slate-950 text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 text-[#0891b2]">
            <span className="font-serif font-black text-2xl tracking-tighter text-white uppercase">Inland Empire Home Source</span>
          </div>
          <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.3em] mb-8">
            Serving San Bernardino & Riverside Counties Since 2004
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16 border-y border-white/5 py-12">
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Our Mission</h5>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">We provide a fast, fair, and honest way to sell your home in the Inland Empire. We believe in providing solutions that help homeowners move forward with their lives.</p>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Cities We Serve</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {cities.map(({ name, slug }) => (
                  <Link
                    key={slug}
                    href={`/sell-my-house-fast-${slug}`}
                    className="text-slate-300 hover:text-[#0891b2] text-sm font-medium transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs tracking-widest text-white mb-4">Legal Disclaimer</h5>
              <p className="text-slate-300 text-sm leading-relaxed font-medium italic">Inland Empire Home Source is a private real estate investment firm. We are not real estate agents or brokers. We buy properties directly from homeowners for cash.</p>
            </div>
          </div>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Inland Empire Home Source • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}