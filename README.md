# Inland Empire Home Source - Node.js Version

This is the Node.js/Express version of the Inland Empire Home Source website, converted from the original Python/Flask application.

## Features

- ✅ Express.js server (Node.js)
- ✅ EJS templating (similar to Jinja2)
- ✅ All 12 city landing pages with dynamic routing
- ✅ Situation-based pages (foreclosure, inherited, etc.)
- ✅ Blog integration with Contentful CMS
- ✅ Contact page with FAQ accordion
- ✅ Privacy Policy page
- ✅ 404 error handling
- ✅ Mobile-responsive design
- ✅ SEO-optimized meta tags

## File Structure

```
iehomesource-nodejs/
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
├── .env.example           # Environment variables template
├── data/
│   └── cities.js          # City data (converted from Python)
├── views/                 # EJS templates
│   ├── base.ejs           # Main layout template
│   ├── index.ejs          # Homepage
│   ├── cities.ejs         # Cities listing
│   ├── sell_fast.ejs      # City-specific landing page
│   ├── situations.ejs     # Situation pages
│   ├── blog.ejs           # Blog with Contentful
│   ├── contact.ejs        # Contact page
│   ├── privacy.ejs        # Privacy policy
│   └── 404.ejs            # 404 error page
├── public/                # Static assets
│   ├── css/
│   │   └── style.css      # Custom styles
│   ├── js/
│   │   └── main.js        # Client-side JavaScript
│   └── images/
│       └── cities/        # City images (add yours here)
└── .htaccess              # Optional server config
```

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your Contentful credentials (optional, for blog)
   ```

3. **Start the server:**
   ```bash
   npm start
   # Or for development with auto-reload:
   npm run dev
   ```

4. **Open in browser:**
   http://localhost:3000

## Deployment to Hostinger

### Requirements
- Hostinger Business Web Hosting or Cloud Hosting plan (Node.js Web Apps feature)
- Node.js version 18.x, 20.x, 22.x, or 24.x [^2^]

### Deployment Steps

#### Option 1: Deploy from GitHub (Recommended)

1. **Push this code to a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/iehomesource.git
   git push -u origin main
   ```

2. **In Hostinger hPanel:**
   - Go to **Websites** → **Add Website** → **Node.js Web App** [^2^]
   - Select **Import Git Repository**
   - Authorize GitHub access
   - Select your repository

3. **Configure Build Settings:**
   - **Framework:** Express.js (or "Other" if not auto-detected) [^2^]
   - **Node.js version:** 18.x or higher
   - **Entry file:** `server.js` [^2^]
   - **Package manager:** npm
   - **Environment variables:** Add your Contentful credentials if using the blog

4. **Click Deploy**

#### Option 2: Upload ZIP File

1. **Create a ZIP file** of this project (excluding node_modules and .git)

2. **In Hostinger hPanel:**
   - Go to **Websites** → **Add Website** → **Node.js Web App** [^2^]
   - Select **Upload your website files**
   - Upload the ZIP file

3. **Configure the same settings as above**

4. **Click Deploy**

### Post-Deployment

- **Add your city images** to `public/images/cities/` via File Manager
- **Set environment variables** in hPanel if using Contentful blog
- **Configure your domain** to point to the deployed app
- **Enable SSL** (usually automatic on Hostinger)

## Contentful Blog Setup (Optional)

To enable the blog functionality:

1. Create a free account at [Contentful](https://www.contentful.com)
2. Create a content model called `pageBlogPost` with fields:
   - `title` (Text)
   - `slug` (Text)
   - `short_description` (Text)
   - `published_date` (Date)
   - `featured_image` (Media)
3. Get your Space ID and Access Token from Contentful settings
4. Add them as environment variables in Hostinger hPanel:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`

## Important Notes

- **City images:** The app expects city images at `public/images/cities/riverside.png`, etc. Make sure to upload these via Hostinger's File Manager after deployment.
- **Podio form:** The contact form iframe uses Podio (already configured in the original app).
- **Phone number:** Update the phone number `(909) 202-6006` in templates if needed.

## Troubleshooting

### App won't start
- Check that `server.js` is set as the entry file in Hostinger settings [^2^]
- Verify Node.js version is 18.x or higher
- Check deployment logs in hPanel

### Images not showing
- Ensure images are uploaded to `public/images/cities/`
- Check file extensions match (some cities use .jpg instead of .png)

### Blog not loading
- Verify Contentful credentials are set as environment variables
- Check that content model matches expected structure

## Support

For Hostinger-specific issues, contact their 24/7 support via live chat.
For application issues, check the Node.js logs in Hostinger hPanel.

---

**Converted from Python/Flask to Node.js/Express**
Original author: Inland Empire Home Source
Conversion date: 2025
