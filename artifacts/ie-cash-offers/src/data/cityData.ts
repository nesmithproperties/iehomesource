export interface CityData {
  slug: string;
  name: string;
  county: string;
  unsplashQuery: string;
  tagline: string;
  intro: string;
  whyUs: string;
  neighborhoods: string[];
  highlights: string[];
}

export const cities: CityData[] = [
  {
    slug: "riverside-california",
    name: "Riverside",
    county: "Riverside County",
    unsplashQuery: "riverside+california+neighborhood",
    tagline: "Need to Sell Your Riverside, California Home Fast?",
    intro:
      "If you're a homeowner in Riverside, California who needs to sell quickly—whether it's due to foreclosure, an inherited property, a divorce, job relocation, or simply a home that needs more repairs than you can handle—Inland Empire Cash Offers is here to give you a fast, fair, all-cash offer with no hassle and no fees.",
    whyUs:
      "Inland Empire Cash Offers is a locally owned and operated cash home buying company based right here in Riverside, California. Unlike national hedge funds or impersonal online iBuyers, we are real people who live and work in the same communities you do. We understand the Riverside market, the neighborhoods, and the unique challenges homeowners face in Southern California. When you work with us, you talk directly to the decision-maker—not a call center.",
    neighborhoods: ["Canyon Crest", "Wood Streets", "La Sierra", "Arlington", "Orangecrest", "Arlanza", "Mission Grove"],
    highlights: [
      "No agent commissions or fees",
      "Close in as little as 7 days",
      "We buy in 100% as-is condition",
      "We pay ALL closing costs",
      "No cleaning or repairs needed",
      "Simple, stress-free process",
    ],
  },
  {
    slug: "san-bernardino-california",
    name: "San Bernardino",
    county: "San Bernardino County",
    unsplashQuery: "san+bernardino+california+house",
    tagline: "Need to Sell Your San Bernardino, California Home Fast?",
    intro:
      "Homeowners in San Bernardino, California who need a fast, reliable home sale have come to the right place. At Inland Empire Cash Offers, we buy houses throughout San Bernardino in any condition and any situation—no repairs, no showings, no agent commissions.",
    whyUs:
      "Inland Empire Cash Offers has been buying homes in San Bernardino, California for nearly a decade. We know this market inside and out. From the historic neighborhoods near downtown to the newer developments in the north end, we buy properties throughout the entire city. We're not a franchise—we're a local team that genuinely cares about helping San Bernardino homeowners move forward.",
    neighborhoods: ["Del Rosa", "Muscoy", "Devore", "Arrowhead Farms", "Highland Avenue Corridor", "Waterman Gardens", "Rialto Adjacent"],
    highlights: [
      "All San Bernardino zip codes served",
      "As-is purchases — no repairs",
      "Cash offers within 24 hours",
      "We pay ALL closing costs",
      "No open houses or showings",
      "Fast, flexible closing dates",
    ],
  },
  {
    slug: "fontana-california",
    name: "Fontana",
    county: "San Bernardino County",
    unsplashQuery: "fontana+california+suburb+house",
    tagline: "Need to Sell Your Fontana, California Home Fast?",
    intro:
      "Selling a home in Fontana, California doesn't have to be a long, drawn-out process. Inland Empire Cash Offers buys houses throughout Fontana quickly and fairly—whether your home needs major repairs, you're behind on payments, or you simply need to move on fast.",
    whyUs:
      "As a local Inland Empire company, Inland Empire Cash Offers knows the Fontana, California market well. We've helped countless Fontana homeowners escape difficult situations and move forward with their lives—without the stress of traditional home sales. We handle all the paperwork, pay all the closing costs, and let you pick the closing date.",
    neighborhoods: ["Citrus Heights", "Heritage Village", "Summit Heights", "Jurupa Hills", "Sierra Lakes", "Southridge", "West Fontana"],
    highlights: [
      "Serving all Fontana zip codes",
      "No agent commissions or fees",
      "Buy in any condition",
      "Flexible closing timeline",
      "Zero hidden costs",
      "Local Inland Empire experts",
    ],
  },
  {
    slug: "moreno-valley-california",
    name: "Moreno Valley",
    county: "Riverside County",
    unsplashQuery: "moreno+valley+california+home",
    tagline: "Need to Sell Your Moreno Valley, California Home Fast?",
    intro:
      "Moreno Valley, California homeowners who need to sell fast can skip the headaches of the traditional market. Inland Empire Cash Offers buys homes throughout MoVal directly for cash—no listings, no open houses, no waiting for financing approvals.",
    whyUs:
      "Inland Empire Cash Offers is a local cash buyer serving Moreno Valley, California and the surrounding Inland Empire. We understand that life moves fast, and sometimes you need a sale to happen even faster. That's why we've built a process that can take you from contact to closed in as little as seven days.",
    neighborhoods: ["Sunnymead Ranch", "Lake Perris Area", "Towngate", "March Air Reserve Base Area", "Edgemont", "Nason Street Corridor", "Perris Hill"],
    highlights: [
      "All MoVal neighborhoods covered",
      "We handle all paperwork",
      "Zero fees or hidden costs",
      "Close on your schedule",
      "As-is cash purchases",
      "Offer within 24 hours",
    ],
  },
  {
    slug: "rancho-cucamonga-california",
    name: "Rancho Cucamonga",
    county: "San Bernardino County",
    unsplashQuery: "rancho+cucamonga+california+neighborhood",
    tagline: "Need to Sell Your Rancho Cucamonga, California Home Fast?",
    intro:
      "Rancho Cucamonga, California is one of the most desirable cities in the Inland Empire—but even here, life happens. If you need to sell your home quickly without the hassle of the traditional market, Inland Empire Cash Offers provides a direct, fast, and fair cash purchase.",
    whyUs:
      "We've bought homes throughout Rancho Cucamonga, California for nearly a decade. From Etiwanda to the Victoria Gardens corridor, we understand what makes properties in RC unique. Our cash offers are competitive, our process is transparent, and you always deal directly with the decision-maker.",
    neighborhoods: ["Etiwanda", "Alta Loma", "Deer Creek", "Terra Vista", "Vintage Park", "Day Creek", "Caryn"],
    highlights: [
      "Competitive cash offers for RC homes",
      "No listings, showings, or open houses",
      "Sell in any condition or situation",
      "Close as fast as 7 days",
      "We cover all closing costs",
      "Local RC market experts",
    ],
  },
  {
    slug: "ontario-california",
    name: "Ontario",
    county: "San Bernardino County",
    unsplashQuery: "ontario+california+house+street",
    tagline: "Need to Sell Your Ontario, California Home Fast?",
    intro:
      "Ontario, California's central location in the Inland Empire makes it a busy, competitive market—but that doesn't mean you have to wait months to sell. Inland Empire Cash Offers buys houses throughout Ontario directly for cash, on your timeline.",
    whyUs:
      "Inland Empire Cash Offers is a locally trusted cash home buyer serving Ontario, California. Whether your property is near the airport corridor, downtown, or in one of Ontario's established residential neighborhoods, we buy homes as-is and close fast. No repairs, no fees, no surprises.",
    neighborhoods: ["Ontario Ranch", "Park Place", "Creekside", "Colony Park", "South Ontario", "Bon View", "Mountain View"],
    highlights: [
      "All Ontario zip codes served",
      "No repairs or updates required",
      "Cash offer within 24 hours",
      "We pay all closing costs",
      "No commissions or fees",
      "Flexible closing dates",
    ],
  },
  {
    slug: "corona-california",
    name: "Corona",
    county: "Riverside County",
    unsplashQuery: "corona+california+suburb+houses",
    tagline: "Need to Sell Your Corona, California Home Fast?",
    intro:
      "Corona, California homeowners who need to sell fast—whether due to a difficult tenant, financial hardship, an inherited property, or any other reason—can count on Inland Empire Cash Offers for a fair, no-obligation cash offer and a fast, clean closing.",
    whyUs:
      "Inland Empire Cash Offers has purchased homes throughout Corona, California across all price points and conditions. We're not here to lowball you—we're here to offer a fair price that reflects your home's current market value while giving you the speed and certainty a cash sale provides.",
    neighborhoods: ["Eagle Glen", "South Corona", "Temescal Valley", "Chase Ranch", "El Cerrito", "Corona Hills", "Sycamore Creek"],
    highlights: [
      "Serving all Corona neighborhoods",
      "Fast and fair cash offers",
      "No commissions or agent fees",
      "Flexible closing dates",
      "As-is purchases",
      "Close in as little as 7 days",
    ],
  },
  {
    slug: "victorville-california",
    name: "Victorville",
    county: "San Bernardino County",
    unsplashQuery: "victorville+california+high+desert+home",
    tagline: "Need to Sell Your Victorville, California Home Fast?",
    intro:
      "Victorville, California homeowners in the High Desert have a fast, reliable option when they need to sell: Inland Empire Cash Offers. We understand the High Desert market and buy houses throughout Victorville in any condition, any situation—fast.",
    whyUs:
      "The High Desert real estate market has its own unique dynamics, and Inland Empire Cash Offers has deep experience buying homes in Victorville, California. We know the neighborhoods, we understand the values, and we can make a fair offer based on real local data—not some algorithm from out of state.",
    neighborhoods: ["Spring Valley Lake", "Victorville South", "Old Town Victorville", "Bear Valley Road Corridor", "Green Tree", "Sunset Hills", "Liberty"],
    highlights: [
      "High Desert specialists",
      "All Victorville areas covered",
      "Any condition, any situation",
      "Close in as little as 7 days",
      "Local Victorville market knowledge",
      "Zero fees or commissions",
    ],
  },
  {
    slug: "murrieta-california",
    name: "Murrieta",
    county: "Riverside County",
    unsplashQuery: "murrieta+california+neighborhood+house",
    tagline: "Need to Sell Your Murrieta, California Home Fast?",
    intro:
      "Murrieta, California is one of Southern California's fastest-growing cities—but when you need to sell fast, the traditional market can still take months. Inland Empire Cash Offers buys homes throughout Murrieta directly for cash, on your schedule.",
    whyUs:
      "Inland Empire Cash Offers serves homeowners throughout Murrieta, California with a streamlined, honest cash buying process. We've helped Murrieta homeowners in all kinds of situations—from probate properties to homes needing major repairs—get a clean, fast sale without the drama.",
    neighborhoods: ["West Murrieta", "East Murrieta", "French Valley", "Copper Canyon", "Murrieta Hot Springs", "Greer Ranch", "La Cresta"],
    highlights: [
      "All Murrieta neighborhoods served",
      "No repairs or staging needed",
      "Transparent offer process",
      "We cover all closing costs",
      "Close in as few as 7 days",
      "Local Murrieta market experts",
    ],
  },
  {
    slug: "temecula-california",
    name: "Temecula",
    county: "Riverside County",
    unsplashQuery: "temecula+california+wine+country+house",
    tagline: "Need to Sell Your Temecula, California Home Fast?",
    intro:
      "Temecula, California is a beautiful city known for its wine country and strong community—but when you need to sell quickly, the traditional listing process can be slow. Inland Empire Cash Offers buys houses throughout Temecula for cash, with no fees and a fast closing.",
    whyUs:
      "Inland Empire Cash Offers is familiar with Temecula, California's diverse real estate market—from the wine country estates to the master-planned communities near Old Town. No matter the size, condition, or location of your Temecula home, we can make you a fair cash offer.",
    neighborhoods: ["Old Town Temecula", "Redhawk", "Wolf Creek", "Paloma Del Sol", "Harveston", "Temeku Hills", "Morgan Hill"],
    highlights: [
      "Serving all Temecula zip codes",
      "Fast cash offers",
      "Buy as-is — no repairs",
      "Flexible and fast closings",
      "We pay all closing costs",
      "No commissions or hidden fees",
    ],
  },
  {
    slug: "rialto-california",
    name: "Rialto",
    county: "San Bernardino County",
    unsplashQuery: "rialto+california+residential+street",
    tagline: "Need to Sell Your Rialto, California Home Fast?",
    intro:
      "Rialto, California homeowners who want a quick, straightforward sale can count on Inland Empire Cash Offers. We buy homes throughout Rialto in any condition and situation—no fees, no repairs, no waiting on bank approvals.",
    whyUs:
      "Inland Empire Cash Offers is a locally rooted cash home buyer that knows the Rialto, California market well. We understand the neighborhoods, the property values, and the challenges homeowners face. When we make an offer on your Rialto home, it's based on honest local data—not a national formula.",
    neighborhoods: ["Willow Avenue Corridor", "Etiwanda Avenue Area", "Rialto Unified District", "Agua Mansa", "Pepper Avenue", "Baseline Road Corridor", "North Rialto"],
    highlights: [
      "All Rialto areas covered",
      "Cash offers within 24 hours",
      "No commissions or hidden fees",
      "Close on your timeline",
      "As-is purchases",
      "Local Rialto market experts",
    ],
  },
  {
    slug: "hesperia-california",
    name: "Hesperia",
    county: "San Bernardino County",
    unsplashQuery: "hesperia+california+high+desert+house",
    tagline: "Need to Sell Your Hesperia, California Home Fast?",
    intro:
      "Hesperia, California is a growing High Desert city with a wide range of properties—from large lots to newer subdivisions. Inland Empire Cash Offers buys houses throughout Hesperia quickly and honestly, no matter the condition or situation.",
    whyUs:
      "Inland Empire Cash Offers has deep roots in the Hesperia, California High Desert market. We buy homes in every part of Hesperia—from the newer developments near Main Street to the larger rural parcels in the outskirts. If you need to sell fast, we can make it happen.",
    neighborhoods: ["Oak Hills", "Sultana", "Hesperia Lake Area", "Joshua Street Corridor", "Main Street District", "Ranchero Road Area", "Bear Valley Cutoff"],
    highlights: [
      "High Desert market experts",
      "Serving all Hesperia neighborhoods",
      "Any condition or situation",
      "Fast, honest cash offers",
      "We cover all closing costs",
      "Close in as little as 7 days",
    ],
  },
];

export const cityMap: Record<string, CityData> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
);
