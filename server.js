require('dotenv').config();
const express = require('express');
const path = require('path');
const contentful = require('contentful');
const { CITIES, CITY_MAP } = require('./data/cities');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Current year middleware (like Flask context processor)
app.use((req, res, next) => {
  res.locals.current_year = new Date().getFullYear();
  res.locals.cities = CITIES;
  next();
});

// Situations data
const SITUATIONS = [
  {
    id: "foreclosure",
    icon: "triangle-exclamation",
    label: "Facing Foreclosure",
    headline: "Stop Foreclosure in California — Sell Your House Fast for Cash",
    body: [
      "Foreclosure is one of the most stressful situations a homeowner can face. In California, the foreclosure process can move quickly — once your lender records a Notice of Default (NOD), you may have as little as 111 days before your home is sold at a trustee sale. The consequences go far beyond losing your home: a foreclosure on your record can damage your credit score by 100–150 points or more and follow you for up to seven years.",
      "The good news is that a fast cash sale can stop the foreclosure process in its tracks. At Inland Empire Home Source, we work with homeowners throughout Southern California who are behind on payments and facing foreclosure. We can make you a fair cash offer within 24 hours and close before your auction date.",
      "We understand how overwhelming this situation feels, and we approach every homeowner with empathy and zero judgment. There are no fees, no commissions, and no pressure. If you're facing foreclosure in Riverside, San Bernardino, or anywhere else in the Inland Empire, call us today."
    ],
    cta: "Get a Cash Offer Before Your Auction Date"
  },
  {
    id: "inherited",
    icon: "house",
    label: "Inherited Property",
    headline: "Inherited a House in California? We Make It Simple to Sell Fast",
    body: [
      "Inheriting a property in California can feel like an unexpected burden — especially when you're already dealing with the emotional weight of losing a loved one. Between probate court, outstanding mortgages, property taxes, deferred maintenance, and disagreements among family members, an inherited home can quickly become a financial and logistical headache.",
      "Inland Empire Home Source specializes in buying inherited properties throughout Southern California, and we do it in any condition. We can work directly with the estate, the executor, or multiple heirs to make the process as smooth as possible. Whether the home is occupied, vacant, in probate, or needs significant repairs — it doesn't matter.",
      "We're experienced in the unique challenges that come with selling inherited real estate in California, including properties that are still in probate. If you've inherited a home in the Inland Empire and you're not sure what your options are, reach out to us."
    ],
    cta: "Sell Your Inherited California Home — No Hassle"
  },
  {
    id: "tenants",
    icon: "users",
    label: "Problem Tenants",
    headline: "Selling a Rental Property With Problem Tenants in California",
    body: [
      "California has some of the strongest tenant protection laws in the country, which can make it incredibly difficult to remove problematic renters — even when you want to sell your property. Non-paying tenants, lease violations, and damage to the property are all situations that can leave landlords feeling trapped.",
      "Inland Empire Home Source buys rental properties with tenants in place throughout Southern California. We are experienced investors who understand California's landlord-tenant laws, and we take on the tenant situation ourselves — so you don't have to.",
      "If you're a tired landlord who's done dealing with problem tenants and just wants out, we can help you sell fast, avoid the eviction process, and get cash in hand without any of the legal headaches."
    ],
    cta: "Sell Your Rental — Tenants In Place, No Problem"
  },
  {
    id: "divorce",
    icon: "scale-balanced",
    label: "Divorce Settlement",
    headline: "Selling a House During Divorce in California — Fast and Fair",
    body: [
      "Divorce is already one of life's most difficult transitions — and when a shared home is involved, it can make the process significantly more complicated. In California, property acquired during a marriage is generally considered community property, meaning both spouses typically have an equal claim.",
      "A fast cash sale is often the cleanest solution. When you sell your home to Inland Empire Home Source, you can divide the proceeds fairly, close quickly, and both move forward without dragging the process out for months.",
      "We buy homes in any condition and can accommodate the specific closing timeline required by your divorce proceedings. There are no agent commissions to split, no repair costs to negotiate, and no delays from buyer financing."
    ],
    cta: "Sell Your Home Fast During Divorce — We Can Help"
  },
  {
    id: "relocation",
    icon: "plane",
    label: "Job Relocation",
    headline: "Relocating for Work? Sell Your California Home Fast for Cash",
    body: [
      "A new job opportunity or company transfer is exciting — but it can also put enormous pressure on your timeline. If you're relocating out of the Inland Empire or out of California entirely, you may not have the luxury of waiting 60–90 days for a traditional home sale to close.",
      "Inland Empire Home Source can close in as little as 7 days, which means you can sell your home and move without looking back. We make the process simple: tell us about your property, get a cash offer within 24 hours, and choose a closing date that aligns with your moving timeline.",
      "Whether you're relocating from Riverside, Rancho Cucamonga, Corona, Murrieta, or anywhere else in Southern California, we're here to make your move as seamless as possible."
    ],
    cta: "Sell Before You Move — Get a Fast Cash Offer"
  },
  {
    id: "repairs",
    icon: "wrench",
    label: "Major Repairs Needed",
    headline: "Selling a House That Needs Major Repairs in California — We Buy As-Is",
    body: [
      "Not every homeowner has the time, money, or energy to fix up a property before selling it. Foundation problems, roof damage, fire or smoke damage, mold, outdated electrical or plumbing, and structural issues are all situations that can make a traditional sale nearly impossible.",
      "At Inland Empire Home Source, we buy homes in any condition throughout Southern California — and we mean any condition. We've purchased properties with significant foundation damage, fire-damaged homes, homes with full-roof failures, severe mold infestations, and everything in between.",
      "If you own a home in the Inland Empire that needs more work than you're willing or able to handle, you have options. You don't have to pour money into a property just to sell it."
    ],
    cta: "Get a Fair Cash Offer — No Repairs Required"
  },
  {
    id: "payments",
    icon: "clock",
    label: "Behind On Payments",
    headline: "Behind on Mortgage Payments in California? Here's How We Can Help",
    body: [
      "Falling behind on your mortgage payments can happen to anyone — a job loss, a medical emergency, a divorce, or any unexpected life event can make it impossible to keep up. In California, once you miss three to four months of payments, your lender can begin the formal foreclosure process.",
      "Selling your home for cash is often the fastest and most financially sound way out of this situation. If you have equity in your home, a cash sale can allow you to pay off the outstanding mortgage balance, settle any arrears, avoid a foreclosure on your record, and potentially put money in your pocket to start fresh.",
      "We work with homeowners across the Inland Empire who are in difficult financial situations, and we do it with compassion and zero judgment."
    ],
    cta: "Sell Fast Before It's Too Late — Get Your Cash Offer"
  },
  {
    id: "vacant",
    icon: "door-open",
    label: "Vacant Properties",
    headline: "Selling a Vacant Home in California — Stop the Costs and Sell Fast",
    body: [
      "Owning a vacant property in California is more costly than most homeowners realize. Beyond the ongoing mortgage payments, you're also responsible for property taxes, homeowner's insurance, utility minimums, HOA fees, regular maintenance, and the risk of vandalism, squatters, or code violations from the city.",
      "Whether your vacant home is a former rental, an inherited property, a house you've already moved out of, or a property that's been sitting because it needs too much work to sell traditionally, Inland Empire Home Source can help. We buy vacant homes throughout Southern California in any condition, with no repairs, no cleanup, and no showings.",
      "Selling a vacant property quickly isn't just financially smart — it's a way to eliminate ongoing risk and liability. The sooner you sell, the sooner you stop paying."
    ],
    cta: "Stop Paying for a Vacant Home — Get a Cash Offer"
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { active: 'home' });
});

app.get('/cities', (req, res) => {
  res.render('cities', { active: 'cities' });
});

app.get('/sell-my-house-fast-:slug', (req, res) => {
  const city = CITY_MAP[req.params.slug];
  if (!city) {
    return res.status(404).render('404', { active: '' });
  }
  res.render('sell_fast', { city, active: 'cities' });
});

app.get('/we-buy-houses-any-condition-california', (req, res) => {
  res.render('situations', { situations: SITUATIONS, active: '' });
});

app.get('/blog', async (req, res) => {
  let posts = [];
  let error = null;

  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  console.log('Space ID:', spaceId);
console.log('Token length:', accessToken ? accessToken.length : 0);
console.log('Token starts with:', accessToken ? accessToken.substring(0, 10) + '...' : 'undefined')

  if (spaceId && accessToken) {
    try {
      const client = contentful.createClient({
        space: spaceId,
        accessToken: accessToken
      });

      const entries = await client.getEntries({
        content_type: 'pageBlogPost',
        include: 2,
        order: '-fields.publishedDate'
      });

      posts = entries.items.map(entry => {
        const f = entry.fields;
        let imageUrl = null;
        const featured = f.featured_image;
        if (featured && featured.fields) {
          const fileObj = featured.fields.file || {};
          const url = fileObj.url || '';
          if (url) {
            imageUrl = url.startsWith('//') ? `https:${url}` : url;
          }
        }
        return {
          title: f.title || f.internal_name || 'Untitled',
          slug: f.slug || entry.sys.id,
          excerpt: f.short_description || '',
          published_date: (f.published_date || '').toString().substring(0, 10),
          image_url: imageUrl
        };
      });
} catch (e) {
  error = e.message;
  console.log('Contentful error:', e.message);
  console.log('Full error:', e);
}
  } else {
    error = 'Contentful credentials not configured.';
  }

  res.render('blog', { posts, error, active: 'blog' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { active: 'contact' });
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy', { active: '' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { active: '' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
