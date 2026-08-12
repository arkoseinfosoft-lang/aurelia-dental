# Aurelia Dental Studio

A single-page, highly animated website for a luxury dental clinic — built
with React, Vite and Tailwind CSS, with Razorpay payment gateway
integration for booking consultations online.

The navbar has 5 links (**Home · Philosophy · Treatments ·
Transformations · Reserve**) that all scroll smoothly to sections on this
one page — there is no multi-page routing, so there is nothing that can
404 on deploy.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18 or later.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Aurelia Dental Studio site"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

## 3. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub
   repo you just pushed.
2. Vercel auto-detects **Vite** — leave the defaults:
   - Build command: `vite build`
   - Output directory: `dist`
3. Click **Deploy**. That's it — no other configuration is required.

The site works immediately with **zero environment variables** — the
booking section runs in **Demo Mode** (a simulated, clearly-labelled
payment success, no money moves and nothing can fail).

## 4. Accept real payments (optional)

The booking section is wired for **Razorpay**, which is the most common
gateway for Indian clinics and needs no backend to open its checkout.

1. Create a free account at [razorpay.com](https://razorpay.com) and grab
   your **Key Id** from Dashboard → Settings → API Keys (use the
   publishable Key Id — never put the Key Secret in frontend code).
2. In Vercel: Project → Settings → Environment Variables, add:
   - `VITE_RAZORPAY_KEY_ID` = your key
3. Redeploy. The site will now open the real Razorpay checkout instead of
   Demo Mode.

> **Going fully live?** Razorpay's client-only checkout is great for
> collecting payments quickly, but for production you should verify each
> payment signature server-side before treating a booking as confirmed.
> A single Vercel serverless function (`/api/verify-payment.js`) using
> `razorpay` npm package's `validatePaymentVerification` helper is the
> standard way to do this — happy to add one if you tell me you're ready
> for it.

Prefer Stripe instead? The same pattern works: swap the `loadRazorpayScript`
/ `window.Razorpay` calls in `src/components/Booking.jsx` for Stripe's
`redirectToCheckout`, backed by a Stripe Payment Link.

## 5. Customize

Everything editorial lives in one file: **`src/data/content.js`**
— clinic name, address, phone, doctor bio, treatments, pricing,
gallery, and testimonials. Change the copy there and the whole site
updates.

Images are pulled live from a themed photo CDN (no local image files to
manage or that can break a build). To swap any image, just replace its
URL in `content.js` with your own clinic photography.

Colors, fonts and animation timings are defined in `tailwind.config.js`.

## 6. Project structure

```
src/
  components/   All UI sections (Navbar, Hero, About, Services, ...)
  data/         content.js — all copy, pricing & images in one place
  hooks/        useActiveSection (scrollspy), useCountUp (stat animation)
  App.jsx       Composes the whole single page
  index.css     Design tokens, base styles, reduced-motion support
```
