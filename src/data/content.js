// Central place for every piece of copy, pricing and imagery on the site.
// Edit this file to rebrand the studio without touching component logic.

export const studio = {
  name: "Aurelia Dental Studio",
  shortName: "Aurelia",
  tagline: "Dentistry, composed like art.",
  phone: "+91 98765 43210",
  email: "hello@aureliadental.example",
  address: "Level 2, The Atrium, Marine Lines, Mumbai 400002",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  whatsapp: "919999999999",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Treatments", href: "#treatments" },
  { label: "Transformations", href: "#transformations" },
  { label: "Reserve", href: "#reserve" },
];

export const heroStats = [
  { value: 14, suffix: "", label: "Years in private practice" },
  { value: 3200, suffix: "+", label: "Smiles designed" },
  { value: 4.9, suffix: "/5", label: "Average patient rating", decimals: 1 },
];

export const heroImage =
  "https://loremflickr.com/1000/1250/dentist,smile/all?lock=214";

export const principles = [
  {
    icon: "Microscope",
    title: "Precision diagnostics",
    text: "3D intraoral scanning and digital X-rays replace guesswork with a charted, millimetre-accurate plan.",
  },
  {
    icon: "ShieldCheck",
    title: "Painless protocols",
    text: "Micro-needle anaesthesia and sedation options keep every procedure calm, quiet and comfortable.",
  },
  {
    icon: "Sparkles",
    title: "Hand-finished aesthetics",
    text: "Every veneer and crown is shade-matched and finished by hand under natural light, not fluorescent.",
  },
  {
    icon: "Infinity",
    title: "Lifetime aftercare",
    text: "Complimentary reviews and touch-ups for the life of any smile-design case done in studio.",
  },
];

export const doctor = {
  name: "Dr. Aanya Rathi",
  role: "Chief Prosthodontist & Founder",
  bio: "Trained in restorative and aesthetic dentistry, Dr. Rathi founded Aurelia in 2012 on a simple premise: a dental visit should feel considered, unhurried and quietly luxurious. She has since designed over three thousand smiles and lectures on digital smile design across Asia.",
  image: "https://loremflickr.com/900/1100/dentist,doctor/all?lock=88",
};

export const services = [
  {
    code: "SMDN",
    name: "Full Smile Design",
    desc: "A bespoke, computer-simulated blueprint of your new smile before a single tooth is touched.",
    price: "₹25,000",
    icon: "LayoutGrid",
  },
  {
    code: "VNR",
    name: "Porcelain Veneers",
    desc: "Ultra-thin, hand-layered porcelain shells that correct shape, shade and alignment in two visits.",
    price: "₹15,000",
    icon: "Gem",
  },
  {
    code: "ALGN",
    name: "Invisible Aligners",
    desc: "Clear, removable aligners that straighten teeth with no metal and minimal disruption to your day.",
    price: "₹45,000",
    icon: "Scan",
  },
  {
    code: "WHT",
    name: "Signature Whitening",
    desc: "A studio-only laser whitening protocol that lifts up to eight shades in a single sitting.",
    price: "₹8,000",
    icon: "Sun",
  },
  {
    code: "IMPL",
    name: "Dental Implants",
    desc: "Titanium implants with a guided-surgery workflow for a permanent, natural-feeling replacement tooth.",
    price: "₹35,000",
    icon: "Anchor",
  },
  {
    code: "RCT",
    name: "Root Canal Therapy",
    desc: "Single-sitting, microscope-assisted root canal therapy with rotary instruments for comfort.",
    price: "₹6,000",
    icon: "Activity",
  },
];

export const galleryItems = [
  {
    caption: "Case 01 · Full Smile Design",
    detail: "8 veneers + whitening · 3 visits",
    image: "https://loremflickr.com/700/860/smile,teeth/all?lock=301",
  },
  {
    caption: "Case 02 · Invisible Aligners",
    detail: "14 month course · retention set",
    image: "https://loremflickr.com/700/860/teeth,dental/all?lock=302",
  },
  {
    caption: "Case 03 · Signature Whitening",
    detail: "Single session · shade +8",
    image: "https://loremflickr.com/700/860/smile,portrait/all?lock=303",
  },
  {
    caption: "Case 04 · Porcelain Veneers",
    detail: "6 veneers, upper arch",
    image: "https://loremflickr.com/700/860/dental,smile/all?lock=304",
  },
  {
    caption: "Case 05 · Implant Restoration",
    detail: "Single tooth · guided surgery",
    image: "https://loremflickr.com/700/860/teeth,white/all?lock=305",
  },
  {
    caption: "Case 06 · Full Smile Design",
    detail: "10 veneers · custom shade BL1",
    image: "https://loremflickr.com/700/860/smile,face/all?lock=306",
  },
];

export const testimonials = [
  {
    name: "Meera Kapoor",
    treatment: "Porcelain Veneers",
    quote:
      "Every step was charted and explained before it happened. The result looks like my own teeth, only the version I always wanted.",
    avatar: "https://loremflickr.com/200/200/woman,portrait/all?lock=401",
    rating: 5,
  },
  {
    name: "Arjun Malhotra",
    treatment: "Invisible Aligners",
    quote:
      "Fourteen months of aligners and not one person at work noticed until I told them. The studio itself feels more spa than clinic.",
    avatar: "https://loremflickr.com/200/200/man,portrait/all?lock=402",
    rating: 5,
  },
  {
    name: "Priya Nair",
    treatment: "Signature Whitening",
    quote:
      "I booked and paid for my consultation online in under a minute and was in the chair two days later. Effortless from start to finish.",
    avatar: "https://loremflickr.com/200/200/woman,face/all?lock=403",
    rating: 5,
  },
  {
    name: "Rohan Verma",
    treatment: "Dental Implants",
    quote:
      "Painless, precise, and Dr. Rathi's team followed up personally a week later. This is what dental care should always feel like.",
    avatar: "https://loremflickr.com/200/200/man,face/all?lock=404",
    rating: 5,
  },
];

export const packages = [
  {
    id: "consult",
    name: "Consultation",
    price: 999,
    note: "Fully refundable against any treatment",
    features: [
      "30-minute studio consultation",
      "Digital X-ray if required",
      "Personalised treatment roadmap",
    ],
  },
  {
    id: "scan",
    name: "Smile Assessment",
    price: 2499,
    note: "Includes 3D intraoral scan",
    featured: true,
    features: [
      "Everything in Consultation",
      "3D intraoral scan & digital preview",
      "Take-home smile-design simulation",
      "Priority booking within 48 hours",
    ],
  },
  {
    id: "vip",
    name: "VIP Priority",
    price: 4999,
    note: "For same-week appointments",
    features: [
      "Everything in Smile Assessment",
      "Same-week appointment slot",
      "Dedicated patient coordinator",
      "Complimentary signature whitening touch-up",
    ],
  },
];
