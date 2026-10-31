import { siteConfig, type Lang } from '../config/site.config';

const fr = {
  nav: { cars: 'Véhicules', locations: 'Agences', why: 'Pourquoi nous', reviews: 'Avis', faq: 'FAQ', contact: 'Contact' },
  hero: {
    eyebrow: 'Location de voitures au Maroc',
    title1: 'Louez une voiture au Maroc,',
    title2: 'livrée à votre arrivée',
    sub: 'Prise en charge à Marrakech Menara, Casablanca Mohammed V ou en centre-ville de Marrakech. Annulation gratuite jusqu’à 48 h avant.',
    pickup: 'Lieu de prise en charge',
    from: 'Date de départ',
    to: 'Date de retour',
    search: 'Rechercher',
    stats: [['3', 'points de retrait'], ['48 h', 'annulation gratuite'], ['24/7', 'assistance']],
  },
  featured: { eyebrow: 'Notre sélection', title: 'Véhicules à la une', sub: 'De l’économique au luxe, assurance tous risques incluse dans chaque tarif.', all: 'Voir tout le catalogue' },
  catalog: {
    eyebrow: 'Catalogue', title: 'Toute notre flotte', sub: 'Filtrez par marque, boîte, carburant, places et budget.',
    brand: 'Marque', gearbox: 'Boîte', fuel: 'Carburant', seats: 'Places', price: 'Prix max / jour',
    all: 'Tous', reset: 'Réinitialiser', results: 'véhicule(s)', none: 'Aucun véhicule ne correspond à vos critères.',
    filters: 'Filtres', seatsMin: 'et plus',
  },
  gearbox: { manual: 'Manuelle', automatic: 'Automatique' },
  fuel: { diesel: 'Diesel', petrol: 'Essence', hybrid: 'Hybride', electric: 'Électrique' },
  category: { economy: 'Économique', compact: 'Compacte', suv: 'SUV', premium: 'Premium', luxury: 'Luxe', sport: 'Sport' },
  car: {
    perDay: '/ jour', seats: 'places', bags: 'bagages', details: 'Détails', specs: 'Caractéristiques', year: 'Année',
    ac: 'Climatisation', included: 'Inclus', book: 'Réserver sur WhatsApp', back: 'Retour au catalogue',
    total: 'Total estimé', days: 'jour(s)', similar: 'Vous aimerez aussi', gallery: 'Galerie', category: 'Catégorie',
    includes: ['Assurance tous risques', 'Kilométrage généreux', 'Annulation gratuite', 'Assistance 24/7'],
    pickMsg: 'Choisissez vos dates pour voir le total.', noDates: 'Dates à confirmer',
  },
  locations: { eyebrow: 'Agences', title: 'Où nous trouver', sub: 'Récupérez votre voiture là où vous atterrissez, ou au cœur de Marrakech.', choose: 'Choisir ce lieu', hours: 'Horaires' },
  why: {
    eyebrow: 'Pourquoi nous', title: 'Inclus dans chaque location',
    items: [
      ['Annulation gratuite', 'Changement de plan ? Annulez sans frais jusqu’à 48 h avant la prise en charge.', 'cancel'],
      ['Livraison aéroport', 'Votre voiture vous attend à l’arrivée, sans file d’attente.', 'plane'],
      ['Assurance complète', 'Tous risques, sans franchise cachée. Une caution est bloquée pendant la location.', 'shield'],
      ['Assistance 24/7', 'Une équipe francophone, anglophone et arabophone, joignable à toute heure.', 'headset'],
    ],
  },
  reviews: {
    eyebrow: 'Avis clients', title: 'Ce que disent nos clients',
    sampleTag: 'Exemple', sampleNote: 'Avis fictifs pour la démonstration, à remplacer par de vrais avis.',
  },
  faq: {
    eyebrow: 'FAQ', title: 'Questions fréquentes',
    items: [
      ['Quels documents sont nécessaires ?', 'Un permis de conduire valide depuis au moins 2 ans, une pièce d’identité ou un passeport, et une carte bancaire pour la caution.'],
      ['Puis-je annuler gratuitement ?', 'Oui, l’annulation est gratuite jusqu’à 48 heures avant la prise en charge.'],
      ['L’assurance est-elle incluse ?', 'Oui, l’assurance tous risques est incluse dans tous nos tarifs. Une caution est bloquée pendant la location.'],
      ['Livrez-vous à l’aéroport ?', 'Oui, à Marrakech Menara et Casablanca Mohammed V, 24h/24, sans frais supplémentaires.'],
      ['Y a-t-il une limite de kilomètres ?', 'Le kilométrage est généreux sur toutes nos offres. Contactez-nous pour un forfait illimité.'],
      ['Puis-je rendre la voiture dans une autre ville ?', 'Oui, le retour en aller simple est possible entre nos agences, sur demande.'],
    ],
  },
  contact: {
    eyebrow: 'Contact', title: 'Parlons de votre voyage', sub: 'Une question, un devis ? Écrivez-nous sur WhatsApp.',
    name: 'Votre nom', message: 'Votre message', send: 'Envoyer sur WhatsApp', phone: 'Téléphone', email: 'E-mail', address: 'Adresse',
    hours: 'Disponibilité', map: 'Carte', openMap: 'Ouvrir la carte',
  },
  footer: { rights: 'Tous droits réservés.', demo: 'Site de démonstration', links: 'Navigation' },
  wa: {
    float: 'Discuter sur WhatsApp',
    book: 'Bonjour {brand}, je souhaite réserver :\n🚗 Véhicule : {car}\n📍 Lieu : {pickup}\n📅 Du {from} au {to}',
    general: 'Bonjour {brand}, j’aimerais avoir des informations.',
    contact: 'Bonjour {brand}, je suis {name}.\n{message}',
    unset: 'à confirmer',
  },
  lang: 'Langue', menu: 'Menu', required: 'Requis', skip: 'Aller au contenu',
};

type Dict = typeof fr;

const en: Dict = {
  nav: { cars: 'Cars', locations: 'Locations', why: 'Why us', reviews: 'Reviews', faq: 'FAQ', contact: 'Contact' },
  hero: {
    eyebrow: 'Car rental in Morocco',
    title1: 'Rent a car in Morocco,',
    title2: 'delivered at arrivals',
    sub: 'Pick up at Marrakech Menara, Casablanca Mohammed V or in Marrakech city center. Free cancellation up to 48 hours before pickup.',
    pickup: 'Pickup location', from: 'Pickup date', to: 'Return date', search: 'Search',
    stats: [['3', 'pickup points'], ['48 h', 'free cancellation'], ['24/7', 'support']],
  },
  featured: { eyebrow: 'Our selection', title: 'Featured vehicles', sub: 'From economy to luxury, full insurance included in every rate.', all: 'View full catalog' },
  catalog: {
    eyebrow: 'Catalog', title: 'Our full fleet', sub: 'Filter by brand, gearbox, fuel, seats and budget.',
    brand: 'Brand', gearbox: 'Gearbox', fuel: 'Fuel', seats: 'Seats', price: 'Max price / day',
    all: 'All', reset: 'Reset', results: 'vehicle(s)', none: 'No vehicle matches your criteria.',
    filters: 'Filters', seatsMin: 'and more',
  },
  gearbox: { manual: 'Manual', automatic: 'Automatic' },
  fuel: { diesel: 'Diesel', petrol: 'Petrol', hybrid: 'Hybrid', electric: 'Electric' },
  category: { economy: 'Economy', compact: 'Compact', suv: 'SUV', premium: 'Premium', luxury: 'Luxury', sport: 'Sport' },
  car: {
    perDay: '/ day', seats: 'seats', bags: 'bags', details: 'Details', specs: 'Specifications', year: 'Year',
    ac: 'Air conditioning', included: 'Included', book: 'Book on WhatsApp', back: 'Back to catalog',
    total: 'Estimated total', days: 'day(s)', similar: 'You may also like', gallery: 'Gallery', category: 'Category',
    includes: ['Full insurance', 'Generous mileage', 'Free cancellation', '24/7 assistance'],
    pickMsg: 'Pick your dates to see the total.', noDates: 'Dates to be confirmed',
  },
  locations: { eyebrow: 'Locations', title: 'Where to find us', sub: 'Pick up your car where you land, or in the heart of Marrakech.', choose: 'Choose this location', hours: 'Hours' },
  why: {
    eyebrow: 'Why choose us', title: 'Included in every rental',
    items: [
      ['Free cancellation', 'Plans changed? Cancel free of charge up to 48 hours before pickup.', 'cancel'],
      ['Airport delivery', 'Your car is waiting at arrivals, with no queue.', 'plane'],
      ['Full insurance', 'Comprehensive cover with no hidden excess. A deposit is held during the rental.', 'shield'],
      ['24/7 support', 'A French, English and Arabic speaking team, reachable at any hour.', 'headset'],
    ],
  },
  reviews: {
    eyebrow: 'Reviews', title: 'What customers say',
    sampleTag: 'Sample', sampleNote: 'Placeholder reviews for the demo, to be replaced with real ones.',
  },
  faq: {
    eyebrow: 'FAQ', title: 'Frequently asked questions',
    items: [
      ['Which documents do I need?', 'A driving licence held for at least 2 years, an ID or passport, and a bank card for the deposit.'],
      ['Can I cancel for free?', 'Yes, cancellation is free up to 48 hours before pickup.'],
      ['Is insurance included?', 'Yes, full insurance is included in all our rates. A deposit is held during the rental.'],
      ['Do you deliver to the airport?', 'Yes — Marrakech Menara and Casablanca Mohammed V, 24/7, at no extra cost.'],
      ['Is there a mileage limit?', 'Mileage is generous on all offers. Contact us for an unlimited package.'],
      ['Can I return the car in another city?', 'Yes, one-way returns between our locations are available on request.'],
    ],
  },
  contact: {
    eyebrow: 'Contact', title: 'Let’s talk about your trip', sub: 'A question or a quote? Write to us on WhatsApp.',
    name: 'Your name', message: 'Your message', send: 'Send on WhatsApp', phone: 'Phone', email: 'Email', address: 'Address',
    hours: 'Availability', map: 'Map', openMap: 'Open map',
  },
  footer: { rights: 'All rights reserved.', demo: 'Demo website', links: 'Navigation' },
  wa: {
    float: 'Chat on WhatsApp',
    book: 'Hello {brand}, I would like to book:\n🚗 Car: {car}\n📍 Pickup: {pickup}\n📅 From {from} to {to}',
    general: 'Hello {brand}, I would like some information.',
    contact: 'Hello {brand}, my name is {name}.\n{message}',
    unset: 'to be confirmed',
  },
  lang: 'Language', menu: 'Menu', required: 'Required', skip: 'Skip to content',
};

const ar: Dict = {
  nav: { cars: 'السيارات', locations: 'الفروع', why: 'لماذا نحن', reviews: 'آراء العملاء', faq: 'الأسئلة', contact: 'اتصل بنا' },
  hero: {
    eyebrow: 'تأجير السيارات في المغرب',
    title1: 'استأجر سيارة في المغرب،',
    title2: 'تُسلَّم لك عند الوصول',
    sub: 'استلم سيارتك في مطار مراكش المنارة أو مطار الدار البيضاء محمد الخامس أو وسط مراكش. إلغاء مجاني حتى 48 ساعة قبل الاستلام.',
    pickup: 'مكان الاستلام', from: 'تاريخ الاستلام', to: 'تاريخ الإرجاع', search: 'بحث',
    stats: [['3', 'نقاط استلام'], ['48 س', 'إلغاء مجاني'], ['24/7', 'دعم']],
  },
  featured: { eyebrow: 'اختيارنا لك', title: 'سيارات مميزة', sub: 'من الاقتصادية إلى الفاخرة، والتأمين الشامل مشمول في كل الأسعار.', all: 'عرض كل السيارات' },
  catalog: {
    eyebrow: 'الكتالوج', title: 'أسطولنا الكامل', sub: 'صفِّ حسب الماركة وناقل الحركة والوقود والمقاعد والميزانية.',
    brand: 'الماركة', gearbox: 'ناقل الحركة', fuel: 'الوقود', seats: 'المقاعد', price: 'أقصى سعر / يوم',
    all: 'الكل', reset: 'إعادة ضبط', results: 'سيارة', none: 'لا توجد سيارة تطابق معاييرك.',
    filters: 'التصفية', seatsMin: 'فأكثر',
  },
  gearbox: { manual: 'عادي', automatic: 'أوتوماتيكي' },
  fuel: { diesel: 'ديزل', petrol: 'بنزين', hybrid: 'هجين', electric: 'كهربائي' },
  category: { economy: 'اقتصادية', compact: 'مدمجة', suv: 'دفع رباعي', premium: 'بريميوم', luxury: 'فاخرة', sport: 'رياضية' },
  car: {
    perDay: '/ يوم', seats: 'مقاعد', bags: 'حقائب', details: 'التفاصيل', specs: 'المواصفات', year: 'السنة',
    ac: 'تكييف', included: 'مشمول', book: 'احجز عبر واتساب', back: 'العودة إلى الكتالوج',
    total: 'المجموع التقديري', days: 'يوم', similar: 'قد يعجبك أيضًا', gallery: 'الصور', category: 'الفئة',
    includes: ['تأمين شامل', 'مسافة كافية', 'إلغاء مجاني', 'مساعدة 24/7'],
    pickMsg: 'اختر التواريخ لعرض المجموع.', noDates: 'التواريخ ستُحدَّد لاحقًا',
  },
  locations: { eyebrow: 'الفروع', title: 'أين تجدنا', sub: 'استلم سيارتك حيث تهبط طائرتك، أو في قلب مراكش.', choose: 'اختيار هذا المكان', hours: 'ساعات العمل' },
  why: {
    eyebrow: 'لماذا نحن', title: 'مشمول في كل عملية كراء',
    items: [
      ['إلغاء مجاني', 'تغيّرت خططك؟ ألغِ مجانًا حتى 48 ساعة قبل الاستلام.', 'cancel'],
      ['التسليم في المطار', 'سيارتك تنتظرك عند الوصول، دون طوابير.', 'plane'],
      ['تأمين شامل', 'تغطية كاملة دون رسوم خفية. يُحجز مبلغ ضمان خلال فترة الكراء.', 'shield'],
      ['دعم 24/7', 'فريق يتحدث الفرنسية والإنجليزية والعربية، متاح في أي وقت.', 'headset'],
    ],
  },
  reviews: {
    eyebrow: 'آراء العملاء', title: 'ماذا يقول عملاؤنا',
    sampleTag: 'مثال', sampleNote: 'آراء تجريبية للعرض، يجب استبدالها بآراء حقيقية.',
  },
  faq: {
    eyebrow: 'الأسئلة الشائعة', title: 'أسئلة متكررة',
    items: [
      ['ما الوثائق المطلوبة؟', 'رخصة قيادة سارية منذ سنتين على الأقل، وبطاقة هوية أو جواز سفر، وبطاقة بنكية للضمان.'],
      ['هل يمكنني الإلغاء مجانًا؟', 'نعم، الإلغاء مجاني حتى 48 ساعة قبل موعد الاستلام.'],
      ['هل التأمين مشمول؟', 'نعم، التأمين الشامل مشمول في جميع أسعارنا. يُحجز مبلغ ضمان خلال فترة الكراء.'],
      ['هل توصلون السيارة إلى المطار؟', 'نعم، في مطار مراكش المنارة ومطار الدار البيضاء محمد الخامس، على مدار الساعة وبدون تكلفة إضافية.'],
      ['هل هناك حد للمسافة؟', 'المسافة المسموحة كافية في جميع عروضنا. تواصل معنا للحصول على باقة غير محدودة.'],
      ['هل يمكنني إرجاع السيارة في مدينة أخرى؟', 'نعم، الإرجاع في اتجاه واحد بين فروعنا متاح عند الطلب.'],
    ],
  },
  contact: {
    eyebrow: 'اتصل بنا', title: 'لنتحدث عن رحلتك', sub: 'سؤال أو عرض سعر؟ راسلنا عبر واتساب.',
    name: 'اسمك', message: 'رسالتك', send: 'إرسال عبر واتساب', phone: 'الهاتف', email: 'البريد الإلكتروني', address: 'العنوان',
    hours: 'أوقات التوفر', map: 'خريطة', openMap: 'فتح الخريطة',
  },
  footer: { rights: 'جميع الحقوق محفوظة.', demo: 'موقع تجريبي', links: 'التنقل' },
  wa: {
    float: 'تحدث معنا عبر واتساب',
    book: 'مرحبًا {brand}، أرغب في الحجز:\n🚗 السيارة: {car}\n📍 مكان الاستلام: {pickup}\n📅 من {from} إلى {to}',
    general: 'مرحبًا {brand}، أرغب في الحصول على معلومات.',
    contact: 'مرحبًا {brand}، اسمي {name}.\n{message}',
    unset: 'سيُحدَّد لاحقًا',
  },
  lang: 'اللغة', menu: 'القائمة', required: 'مطلوب', skip: 'انتقل إلى المحتوى',
};

const dicts: Record<Lang, Dict> = { fr, en, ar };

export const useT = (lang: Lang) => dicts[lang];
export const locale = (lang: Lang) => ({ fr: 'fr-FR', en: 'en-GB', ar: 'ar-MA' }[lang]);
export const isRtl = (lang: Lang) => lang === 'ar';
export const L = (v: Record<string, string>, lang: Lang) => v[lang] ?? v.fr;

/** Prefix a path with the deployment base + language. */
export const href = (lang: Lang, path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${lang}/${path}`; // path should end with "/" (or be empty)
};
export const asset = (p: string) => (p.startsWith('http') ? p : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${p}`);
export const img = (id: string, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
export const waLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
export const fill = (tpl: string, vars: Record<string, string>) =>
  tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
