# Kids Juction — Toy Shop Website

A responsive, static React + Vite showcase for **Kids Juction**, Chandpur, Bijnor. No shopping cart, checkout, payments, backend or database.

## Run locally

Requires Node.js 18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Production

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to Netlify, Vercel, Cloudflare Pages or any static host. Set build command `npm run build` and output directory `dist`.

## Change shop details

Edit **`src/data/shop.js`** to change the name, phone, address, map link and optional social links. Edit **`src/data/products.js`** to change the catalogue, category names, ages and product descriptions. Images are stored in `public/images/`.

Product entries are *illustrative examples*, not verified live stock. Update them to match the actual store inventory. Ages are illustrative; confirm with actual packaging. The photos were generated for this project from an AI-created toy shop concept and should be replaced with genuine shop/product photos when available.

## SEO before publishing

- Set `websiteUrl` in `src/data/shop.js` to the real live domain.
- Add `<link rel="canonical" href="https://yourdomain.com/" />` in `index.html` once the domain is known.
- Update Open Graph image URL if needed.
- Add a `public/sitemap.xml` containing your real production URL, and add its absolute URL to `public/robots.txt`.
- Verify the website in Google Search Console and create/claim a Google Business Profile.
- Update business hours only when confirmed. No hours are currently asserted.
- For stronger SEO, pre-render or statically generate HTML for content sections; this is currently a client-rendered SPA, with crawlable initial metadata and JSON-LD local business data.

## Contact

Phone: +91-8126988054  
Address: Navyug Market, Chandpur, District Bijnor, Uttar Pradesh 246725, India

## Note

The brand name is deliberately spelled **Kids Juction** exactly as supplied.
