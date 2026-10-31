/**
 * ═══════════════════════════════════════════════════════════════
 *  ATLAS DRIVE — SITE CONFIG
 *  Everything you need to rebrand the site for a new client lives
 *  here (plus the car list in ./cars.json and texts in src/i18n).
 * ═══════════════════════════════════════════════════════════════
 */
import cars from './cars.json';

export type L10n = { fr: string; en: string; ar: string };

export const siteConfig = {
  /* ── Brand ─────────────────────────────────────────────── */
  brand: {
    name: 'Atlas Drive',
    // Short word shown in lighter weight next to the name (optional, '' to hide)
    suffix: 'Car Rental',
    // Leave '' to use the default mark, or set e.g. '/logo.svg'
    // (put the file in /public). Use a light/transparent logo for dark bg.
    logoImage: '',
    tagline: {
      fr: 'Location de voitures premium au Maroc',
      en: 'Premium car rental in Morocco',
      ar: 'تأجير السيارات الفاخرة في المغرب',
    } as L10n,
  },

  /* ── Colors (any CSS color) ────────────────────────────── */
  colors: {
    bg: '#161513',          // page background
    surface: '#1c1a18',     // cards
    surfaceHigh: '#262421',  // hovered / raised cards, inputs
    border: 'rgba(239,233,222,.08)',
    text: '#efe9de',        // primary text
    muted: '#aaa398',       // secondary text
    faint: '#8a847a',       // meta text and icons
    accent: '#d4a24c',      // saffron, one flat accent
    onAccent: '#14110a',    // text on accent buttons
  },

  /* ── Contact ───────────────────────────────────────────── */
  // International format, digits only, no "+" (Morocco = 212, drop the leading 0)
  whatsapp: '212600000000',
  contact: {
    phone: '+212 6 00 00 00 00',
    email: 'contact@atlasdrive.ma',
    address: 'Boulevard Mohammed VI, Guéliz, Marrakech',
    hours: { fr: '7j/7 — 24h/24', en: '7 days a week — 24/7', ar: 'طوال أيام الأسبوع — 24/24' } as L10n,
    socials: { instagram: '#', facebook: '#' },
  },

  /* ── Money ─────────────────────────────────────────────── */
  currency: 'MAD',

  /* ── Pickup locations ──────────────────────────────────── */
  locations: [
    {
      id: 'rak-airport',
      icon: 'plane',
      name: {
        fr: 'Aéroport Marrakech Menara',
        en: 'Marrakech Menara Airport',
        ar: 'مطار مراكش المنارة',
      } as L10n,
      address: { fr: 'Terminal 1, hall des arrivées', en: 'Terminal 1, arrivals hall', ar: 'المبنى 1، قاعة الوصول' } as L10n,
      hours: { fr: '24h/24', en: '24/7', ar: '24/24' } as L10n,
      fee: 0,
    },
    {
      id: 'cmn-airport',
      icon: 'plane',
      name: {
        fr: 'Aéroport Casablanca Mohammed V',
        en: 'Casablanca Mohammed V Airport',
        ar: 'مطار الدار البيضاء محمد الخامس',
      } as L10n,
      address: { fr: 'Terminal 1, hall des arrivées', en: 'Terminal 1, arrivals hall', ar: 'المبنى 1، قاعة الوصول' } as L10n,
      hours: { fr: '24h/24', en: '24/7', ar: '24/24' } as L10n,
      fee: 0,
    },
    {
      id: 'city-center',
      icon: 'building',
      name: { fr: 'Centre-ville', en: 'City center', ar: 'وسط المدينة' } as L10n,
      address: {
        fr: 'Boulevard Mohammed VI, Guéliz, Marrakech',
        en: 'Boulevard Mohammed VI, Guéliz, Marrakech',
        ar: 'شارع محمد السادس، جيليز، مراكش',
      } as L10n,
      hours: { fr: '8h – 22h', en: '8am – 10pm', ar: '8 ص – 10 م' } as L10n,
      fee: 0,
    },
  ],

  /* ── Languages (first = default) ───────────────────────── */
  languages: [
    { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },
    { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
    { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' },
  ] as const,

  /* ── Cars (edit src/config/cars.json) ──────────────────── */
  cars,

  /* ── Reviews ───────────────────────────────────────────── */
  // SAMPLE CONTENT. Replace with the client's real reviews, then set sample: false
  // to remove the "sample" label from the page.
  reviews: {
    sample: true,
    items: [
      {
        name: { fr: 'Camille D.', en: 'Camille D.', ar: 'كاميل د.' } as L10n,
        city: { fr: 'Paris', en: 'Paris', ar: 'باريس' } as L10n,
        text: {
          fr: 'Voiture neuve livrée à Menara à 1 h du matin. Un service impeccable, je recommande les yeux fermés.',
          en: 'Brand-new car delivered at Menara at 1 am. Flawless service, I recommend it without hesitation.',
          ar: 'سيارة جديدة سُلّمت لي في مطار المنارة عند الواحدة صباحًا. خدمة ممتازة، أنصح بها بشدة.',
        } as L10n,
      },
      {
        name: { fr: 'James R.', en: 'James R.', ar: 'جيمس ر.' } as L10n,
        city: { fr: 'Londres', en: 'London', ar: 'لندن' } as L10n,
        text: {
          fr: 'Service fluide, transparent et professionnel. Notre road trip dans l’Atlas était inoubliable.',
          en: 'Smooth, transparent and professional. Our Atlas road trip was unforgettable.',
          ar: 'خدمة سلسة وشفافة ومهنية. كانت رحلتنا في الأطلس لا تُنسى.',
        } as L10n,
      },
      {
        name: { fr: 'Salma B.', en: 'Salma B.', ar: 'سلمى ب.' } as L10n,
        city: { fr: 'Casablanca', en: 'Casablanca', ar: 'الدار البيضاء' } as L10n,
        text: {
          fr: 'Réservation par WhatsApp en deux minutes, prix clair et véhicule très propre. Parfait.',
          en: 'Booked on WhatsApp in two minutes, clear pricing and a spotless car. Perfect.',
          ar: 'حجزت عبر واتساب في دقيقتين، أسعار واضحة وسيارة نظيفة جدًا. رائع.',
        } as L10n,
      },
      {
        name: { fr: 'Lukas M.', en: 'Lukas M.', ar: 'لوكاس م.' } as L10n,
        city: { fr: 'Berlin', en: 'Berlin', ar: 'برلين' } as L10n,
        text: {
          fr: 'De belles voitures et aucun frais caché. L’annulation gratuite nous a sauvés quand notre vol a changé.',
          en: 'Great cars and zero hidden fees. Free cancellation saved us when our flight changed.',
          ar: 'سيارات رائعة وبدون رسوم خفية. الإلغاء المجاني أنقذنا عندما تغيّرت رحلتنا.',
        } as L10n,
      },
    ],
  },

  /* ── Map (OpenStreetMap embed) ─────────────────────────── */
  // Centre of the contact map. Set to the agency's exact coordinates.
  map: { lat: 31.6355, lng: -8.0103, zoom: 16 },

  // Hero background photo (Unsplash or a file in /public)
  heroImage:
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=75',
};

export type Lang = (typeof siteConfig.languages)[number]['code'];
export type Car = (typeof cars)[number];
