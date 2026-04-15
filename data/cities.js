const CITIES = [
  {
    slug: "riverside-california",
    name: "Riverside",
    county: "Riverside County",
    tagline: "Sell Your House Fast in Riverside, CA — Get a Fair Cash Offer Today",
    intro: "Are you a homeowner in Riverside, California looking to sell your house quickly and without the headaches of the traditional market? Whether you're facing foreclosure, dealing with an inherited property, going through a divorce, relocating for work, or simply tired of a home that needs costly repairs — Inland Empire Home Source is here to help. We make fair, all-cash offers on homes throughout Riverside with no fees, no commissions, and no repairs required. You pick the closing date. We handle everything else.",
    why_us: "Inland Empire Home Source is a locally owned and operated cash home buying company based right here in Riverside, CA. Unlike national hedge funds or out-of-state iBuyers, we are real people who live and invest in the same communities you do. We understand Riverside's neighborhoods — from Canyon Crest to La Sierra to Orangecrest — and we price our offers based on real, local market knowledge. When you call us, you speak directly to the decision-maker. No call centers. No runaround. Just a fast, honest, and fair cash offer for your Riverside home.",
    neighborhoods: ["Canyon Crest", "Wood Streets", "La Sierra", "Arlington", "Orangecrest", "Arlanza", "Mission Grove"],
    highlights: ["Zero agent commissions or hidden fees", "Close in as little as 7 days", "We buy 100% as-is — no repairs needed", "We pay ALL closing costs", "No cleaning, staging, or showings", "Simple, stress-free closing process"],
    image: "images/cities/riverside.png"
  },
  {
    slug: "san-bernardino-california",
    name: "San Bernardino",
    county: "San Bernardino County",
    tagline: "Sell Your House Fast in San Bernardino, CA — Cash Offers in 24 Hours",
    intro: "Homeowners in San Bernardino, California who need a fast, reliable sale have come to the right place. At Inland Empire Home Source, we buy houses throughout San Bernardino in any condition and any situation — no repairs, no showings, no agent commissions, and no waiting months for a buyer. Whether your home is facing foreclosure, has deferred maintenance, is tied up in probate, or you simply need to move on quickly, we can help. We'll make you a no-obligation cash offer within 24 hours and close on your timeline.",
    why_us: "Inland Empire Home Source has been buying homes in San Bernardino, California for nearly a decade. We know this market inside and out — from the historic neighborhoods near downtown to the newer developments in the north end. We're not a franchise or a Wall Street fund. We're a local team that genuinely cares about helping San Bernardino homeowners move forward.",
    neighborhoods: ["Del Rosa", "Muscoy", "Devore", "Arrowhead Farms", "Highland Avenue Corridor", "Waterman Gardens", "Rialto Adjacent"],
    highlights: ["All San Bernardino zip codes served", "Buy as-is — zero repairs required", "Fair cash offer within 24 hours", "We pay ALL closing costs", "No open houses, showings, or listings", "Fast, flexible closing on your schedule"],
    image: "images/cities/san-bernardino.png"
  },
  {
    slug: "fontana-california",
    name: "Fontana",
    county: "San Bernardino County",
    tagline: "Sell Your House Fast in Fontana, CA — No Repairs, No Fees, Cash in Days",
    intro: "Selling your home in Fontana, California doesn't have to be a long, stressful process. Inland Empire Home Source buys houses throughout Fontana quickly and fairly — whether your home needs major repairs, you're behind on mortgage payments, dealing with problem tenants, or you simply need to sell fast and move on. We buy Fontana homes as-is for cash, with no agent fees, no commissions, and no obligation.",
    why_us: "As a local Inland Empire company, Inland Empire Home Source knows the Fontana, California real estate market extremely well. We've helped countless Fontana homeowners escape difficult situations — from foreclosure and probate to job loss and major property damage — and move forward with their lives without the stress of traditional home sales.",
    neighborhoods: ["Citrus Heights", "Heritage Village", "Summit Heights", "Jurupa Hills", "Sierra Lakes", "Southridge", "West Fontana"],
    highlights: ["Serving all Fontana zip codes", "No agent commissions or fees ever", "Buy in any condition — as-is", "Flexible closing — you choose the date", "Zero hidden costs or surprises", "Local Inland Empire cash buyers"],
    image: "images/cities/fontana.png"
  },
  {
    slug: "moreno-valley-california",
    name: "Moreno Valley",
    county: "Riverside County",
    tagline: "Sell Your House Fast in Moreno Valley, CA — Fair Cash Offers, Any Condition",
    intro: "Moreno Valley, California homeowners who need to sell fast can skip the headaches of the traditional real estate market. Inland Empire Home Source buys homes throughout MoVal directly for cash — no listings, no open houses, no waiting on bank financing or buyer contingencies. Whether you're dealing with a property in poor condition, a difficult financial situation, or you've inherited a home you don't want to manage, we provide a fast, honest, and fair cash solution.",
    why_us: "Inland Empire Home Source is a local cash buyer serving Moreno Valley, California and the surrounding Inland Empire. We understand that life moves fast, and sometimes you need a home sale to happen even faster. That's why we've built a process that can take you from first contact to closed escrow in as little as seven days.",
    neighborhoods: ["Sunnymead Ranch", "Lake Perris Area", "Towngate", "March Air Reserve Base Area", "Edgemont", "Nason Street Corridor", "Perris Hill"],
    highlights: ["All MoVal neighborhoods covered", "We handle all paperwork and escrow", "Zero fees, commissions, or hidden costs", "Close on your schedule — as fast as 7 days", "Cash purchases in any condition", "Fair offer within 24 hours of contact"],
    image: "images/cities/moreno-valley.png"
  },
  {
    slug: "rancho-cucamonga-california",
    name: "Rancho Cucamonga",
    county: "San Bernardino County",
    tagline: "Sell Your House Fast in Rancho Cucamonga, CA — Competitive Cash Offers",
    intro: "Rancho Cucamonga, California is one of the most desirable cities in the Inland Empire — but even here, life happens. If you need to sell your home quickly without the hassle of listing with an agent, Inland Empire Home Source provides a direct, fast, and fair cash purchase. We buy homes throughout Rancho Cucamonga in any condition and any situation, with zero fees and a closing timeline that works for you.",
    why_us: "We've bought homes throughout Rancho Cucamonga, California for nearly a decade. We understand what makes RC properties unique — the desirable school districts, the established neighborhoods, the higher price points — and our offers reflect that. When you work with us, you're working directly with a local buyer who knows the community.",
    neighborhoods: ["Etiwanda", "Alta Loma", "Deer Creek", "Terra Vista", "Vintage Park", "Day Creek", "Caryn"],
    highlights: ["Competitive cash offers for RC homes", "No listings, showings, or open houses", "Sell in any condition or situation", "Close as fast as 7 days", "We cover all closing costs", "Local RC market experts"],
    image: "images/cities/rancho-cucamonga.jpg"
  },
  {
    slug: "ontario-california",
    name: "Ontario",
    county: "San Bernardino County",
    tagline: "Sell Your House Fast in Ontario, CA — No Fees, No Repairs, Cash Offer Today",
    intro: "Ontario, California's central location in the Inland Empire makes it a busy, competitive real estate market — but that doesn't mean you have to wait months to sell your home. Inland Empire Home Source buys houses throughout Ontario directly for cash, on your timeline. Whether you're dealing with an inherited property, a home that needs extensive repairs, a rental with problem tenants, or any other challenging situation, we can help.",
    why_us: "Inland Empire Home Source is a locally trusted cash home buyer serving Ontario, California and the surrounding San Bernardino County communities. We understand the Ontario market, we make offers based on real local data, and we pride ourselves on a process that is completely transparent with no surprise fees or last-minute price reductions.",
    neighborhoods: ["Ontario Ranch", "Park Place", "Creekside", "Colony Park", "South Ontario", "Bon View", "Mountain View"],
    highlights: ["All Ontario zip codes served", "No repairs or updates ever required", "Fair cash offer within 24 hours", "We pay all closing costs", "No commissions or agent fees", "Flexible closing — your timeline"],
    image: "images/cities/ontario.jpg"
  },
  {
    slug: "corona-california",
    name: "Corona",
    county: "Riverside County",
    tagline: "Sell Your House Fast in Corona, CA — Trusted Cash Home Buyers",
    intro: "Corona, California homeowners who need to sell fast — whether due to a difficult tenant, financial hardship, an inherited property, a pending foreclosure, or any other reason — can count on Inland Empire Home Source for a fair, no-obligation cash offer and a fast, clean closing. We buy houses throughout Corona in every neighborhood, in any condition, with no repairs required and no agent fees to pay.",
    why_us: "Inland Empire Home Source has purchased homes throughout Corona, California across all price points, conditions, and situations. We're not here to lowball you — we're here to make a fair offer that reflects your home's current market value while giving you the speed and certainty that a traditional sale simply can't provide.",
    neighborhoods: ["Eagle Glen", "South Corona", "Temescal Valley", "Chase Ranch", "El Cerrito", "Corona Hills", "Sycamore Creek"],
    highlights: ["Serving all Corona neighborhoods", "Fast and fair cash offers — 24 hours", "No commissions or agent fees", "Flexible closing dates — your choice", "As-is purchases in any condition", "Close in as little as 7 days"],
    image: "images/cities/corona.jpg"
  },
  {
    slug: "victorville-california",
    name: "Victorville",
    county: "San Bernardino County",
    tagline: "Sell Your House Fast in Victorville, CA — High Desert Cash Home Buyers",
    intro: "Victorville, California homeowners in the High Desert have a fast, reliable option when they need to sell: Inland Empire Home Source. We understand the unique dynamics of the High Desert real estate market and buy houses throughout Victorville in any condition and any situation — fast. Whether you're facing foreclosure, dealing with a property you've inherited, behind on property taxes, or just need to sell and move on without the hassle of listing, we can help.",
    why_us: "The High Desert real estate market has its own unique dynamics, and Inland Empire Home Source has deep experience buying homes in Victorville, California. We know the neighborhoods, we understand the values, and we make fair offers based on real local High Desert data — not some out-of-state algorithm.",
    neighborhoods: ["Spring Valley Lake", "Victorville South", "Old Town Victorville", "Bear Valley Road Corridor", "Green Tree", "Sunset Hills", "Liberty"],
    highlights: ["High Desert specialists — local experts", "All Victorville areas and zip codes covered", "Any condition, any situation", "Close in as little as 7 days", "Local Victorville market knowledge", "Zero fees, commissions, or hidden costs"],
    image: "images/cities/victorville.jpg"
  },
  {
    slug: "murrieta-california",
    name: "Murrieta",
    county: "Riverside County",
    tagline: "Sell Your House Fast in Murrieta, CA — No Agent, No Fees, Cash Offer Today",
    intro: "Murrieta, California is one of Southern California's fastest-growing and most desirable cities — but when you need to sell your home quickly, even a hot market can take months. Inland Empire Home Source buys homes throughout Murrieta directly for cash, on your schedule and completely as-is. No repairs, no staging, no open houses, no agent commissions.",
    why_us: "Inland Empire Home Source serves homeowners throughout Murrieta, California with a streamlined, honest, and fully transparent cash buying process. We've helped Murrieta homeowners in all kinds of situations close quickly and move forward without drama. We know the Murrieta market well, from West Murrieta to French Valley.",
    neighborhoods: ["West Murrieta", "East Murrieta", "French Valley", "Copper Canyon", "Murrieta Hot Springs", "Greer Ranch", "La Cresta"],
    highlights: ["All Murrieta neighborhoods served", "No repairs, cleaning, or staging needed", "Transparent, honest offer process", "We cover all closing costs", "Close in as few as 7 days", "Local Murrieta market experts"],
    image: "images/cities/murrieta.jpg"
  },
  {
    slug: "temecula-california",
    name: "Temecula",
    county: "Riverside County",
    tagline: "Sell Your House Fast in Temecula, CA — Fair Cash Offers, Close in 7 Days",
    intro: "Temecula, California is a beautiful city known for its wine country, top-rated schools, and strong sense of community — but when you need to sell your home quickly, even Temecula's desirable market can take months through the traditional listing process. Inland Empire Home Source buys houses throughout Temecula for cash, with no agent fees, no repairs required, and a closing timeline that you control.",
    why_us: "Inland Empire Home Source is familiar with Temecula, California's diverse and dynamic real estate market — from the wine country estates and custom homes to the master-planned communities near Old Town. No matter the size, condition, or situation of your Temecula property, we can make you a fair cash offer backed by real local market data.",
    neighborhoods: ["Old Town Temecula", "Redhawk", "Wolf Creek", "Paloma Del Sol", "Harveston", "Temeku Hills", "Morgan Hill"],
    highlights: ["Serving all Temecula zip codes", "Fast, fair cash offers — no obligation", "Buy as-is — zero repairs needed", "Flexible and fast closings", "We pay all closing costs", "No commissions or hidden fees ever"],
    image: "images/cities/temecula.png"
  },
  {
    slug: "rialto-california",
    name: "Rialto",
    county: "San Bernardino County",
    tagline: "Sell Your House Fast in Rialto, CA — Cash Home Buyers, Any Condition",
    intro: "Rialto, California homeowners who want a quick, straightforward home sale can count on Inland Empire Home Source. We buy homes throughout Rialto in any condition and any situation — no fees, no repairs required, no waiting on bank approvals or buyer financing. Whether you're dealing with a distressed property, falling behind on mortgage payments, managing an inherited home, or just want to avoid the lengthy traditional sales process, we can help.",
    why_us: "Inland Empire Home Source is a locally rooted cash home buyer that knows the Rialto, California real estate market inside and out. We understand the neighborhoods, the property values, and the real challenges that Rialto homeowners face. When we make you an offer on your home, it's based on honest local data and a genuine desire to help.",
    neighborhoods: ["Willow Avenue Corridor", "Etiwanda Avenue Area", "Rialto Unified District", "Agua Mansa", "Pepper Avenue", "Baseline Road Corridor", "North Rialto"],
    highlights: ["All Rialto areas and zip codes covered", "Fair cash offers within 24 hours", "No commissions or hidden fees", "Close on your timeline — as fast as 7 days", "As-is purchases — any condition", "Local Rialto market experts"],
    image: "images/cities/rialto.jpg"
  },
  {
    slug: "hesperia-california",
    name: "Hesperia",
    county: "San Bernardino County",
    tagline: "Sell Your House Fast in Hesperia, CA — High Desert Cash Home Buyers",
    intro: "Hesperia, California is a growing High Desert community with a wide range of properties — from large rural parcels to newer subdivisions near Main Street. If you need to sell your Hesperia home quickly and without the hassle of listing with a real estate agent, Inland Empire Home Source can help. We buy houses throughout Hesperia in any condition and any situation — no repairs, no commissions, no delays.",
    why_us: "Inland Empire Home Source has deep roots in the Hesperia, California High Desert market. We've bought homes in every part of Hesperia — from the newer developments near the Main Street corridor to the larger rural parcels on the outskirts of town. We understand High Desert property values, and we make offers that are fair, transparent, and based on real local data.",
    neighborhoods: ["Oak Hills", "Sultana", "Hesperia Lake Area", "Joshua Street Corridor", "Main Street District", "Ranchero Road Area", "Bear Valley Cutoff"],
    highlights: ["High Desert market experts — local team", "Serving all Hesperia neighborhoods", "Any condition or situation", "Fast, honest cash offers", "We cover all closing costs", "Close in as little as 7 days"],
    image: "images/cities/hesperia.jpg"
  }
];

const CITY_MAP = {};
CITIES.forEach(city => {
  CITY_MAP[city.slug] = city;
});

module.exports = { CITIES, CITY_MAP };
