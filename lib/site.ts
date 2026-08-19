export const site = {
  name: "Umidjon Majidov",
  role: "Bizneslar uchun sotuvchi saytlar yarataman",
  location: "Toshkent, O'zbekiston",
  phone: "+998 91 071-01-05",
  phoneHref: "tel:+998910710105",
  email: "umidmajidov120@gmail.com",
  telegram: "https://t.me/umid_majiddev",
  telegramHandle: "@umid_majiddev",
  instagram: "https://www.instagram.com/umidjon_majiddev/",
  instagramHandle: "@umidjon_majiddev",
  url: "https://umidjon-majidov.vercel.app",
} as const;

export const nav = [
  { href: "#top", label: "Bosh sahifa", idx: "01" },
  { href: "#about", label: "Men haqimda", idx: "02" },
  { href: "#services", label: "Xizmatlar", idx: "03" },
  { href: "#process", label: "Jarayon", idx: "04" },
  { href: "#portfolio", label: "Portfolio", idx: "05" },
  { href: "#contact", label: "Aloqa", idx: "06" },
];

export const stats = [
  { value: "50", suffix: "+", label: "Ishga tushirilgan sotuvchi sayt" },
  { value: "3", suffix: "+", label: "Yil digital va veb sohasida" },
  { value: "90", suffix: "%", label: "Sayt tashriflar ko'rsatkichi (60% dan o'sdi)" },
  { value: "50", suffix: "%", label: "Loyiha yetkazish muddati qisqardi" },
];

export const timeline = [
  {
    year: "2023",
    title: "TATU — Dasturiy injiniring",
    org: "Toshkent Axborot Texnologiyalari Universiteti · GPA 4.0",
    text: "Bakalavr bosqichi. Shu yerdan kod, tizimli fikrlash va mahsulot mantig'i boshlandi.",
  },
  {
    year: "2025 · fevral",
    title: "Team Lead — Nextmark agency",
    org: "Web-site developers jamoasi rahbari",
    text: "5+ mijoz sayti. Jamoa jarayonini qayta qurdim — loyiha yetkazish muddati 50% ga qisqardi.",
  },
  {
    year: "2025 · sentabr",
    title: "Web designer & developer — AsosIT",
    org: "Remote · hozirgacha",
    text: "20+ sotuvchi landing page. Sayt tashriflar ko'rsatkichini 60% dan 90% gacha ko'tardim.",
  },
  {
    year: "2025 — hozir",
    title: "Mustaqil mutaxassis va ustoz",
    org: "Freelance IT solutions · Private tutor",
    text: "50+ freelance loyiha. 2 shogirdni noldan kasbga olib chiqdim, AI Girls Bootcamp'da 2 marta mentor va hakam.",
    now: true,
  },
];

export const skills = [
  { group: "Veb & No-code", items: ["Tilda", "JavaScript", "Next.js", "Python"] },
  { group: "Dizayn", items: ["Figma", "UI/UX", "Web-design", "Prototip"] },
  { group: "Boshqaruv", items: ["Loyiha boshqaruvi", "Sotuv", "Mijoz bilan muloqot", "Team lead"] },
];

export const community = [
  { tag: "MENTOR", text: "AI Girls Bootcamp — mentor va hakam (2 marta)" },
  { tag: "2024", text: "ICTWEEK — Registration Manager" },
  { tag: "2024", text: "Microsoft Developers Community — Registration Manager" },
  { tag: "2024", text: "World Conference on Creativity Economy" },
  { tag: "2025", text: "E-Commerce Central Asia Expo" },
  { tag: "UM'S", text: "UM's Team 3-avlod — texnik menejer" },
];

export const services = [
  {
    name: "Korporativ saytlar",
    desc: "Kompaniyaning to'liq yuzi: xizmatlar, jamoa, keyslar va aloqa oqimi. Yirik mijoz sizni jiddiy qabul qiladigan daraja.",
  },
  {
    name: "Lendinglar",
    desc: "Bitta maqsadga qurilgan sotuvchi sahifa: taklif, dalil, harakatga chaqiriq. Target va zapusklar uchun tez yuklanadi.",
  },
  {
    name: "Internet-do'konlar",
    desc: "Katalog, savat va buyurtma oqimi. Mijoz mahsulotni topadi va ikki qadamda sotib oladi.",
  },
  {
    name: "Redizayn",
    desc: "Mavjud sayt bor, lekin sotmayapti. Struktura, matn va vizualni konversiya foydasiga qayta quraman.",
  },
  {
    name: "Veb-ilovalar",
    desc: "Standart shablon yetmaganda — hisob-kitob, shaxsiy kabinet yoki CRM bilan bog'langan interfeys.",
  },
];

export const reasons = [
  {
    i: "01",
    h: "Yuqori konversiya",
    p: "Tashrifchi «qiziqdim» dan «ariza qoldirdim» gacha bir necha qadamda yetadi.",
    long:
      "Sayt tasodifiy emas, oqim bo'yicha quriladi: e'tiborni ushlash, ishonchni qurish, e'tirozni yopish, harakatga chaqirish. Har blokning bitta vazifasi bor — keyingi qadamga olib o'tish.",
    metric: "60% → 90%",
    metricLabel: "tashrif ko'rsatkichi",
  },
  {
    i: "02",
    h: "Brend pozitsiyasi",
    p: "Sayt — biznesingizning birinchi taassuroti. U narxni ham belgilaydi.",
    long:
      "Mijoz sizni ko'rgan birinchi 5 sekundda «qimmat» yoki «arzon» degan qarorga keladi. Premium daraja vizual — bu bezak emas, narx yorlig'i.",
    metric: "5 sek",
    metricLabel: "birinchi taassurot",
  },
  {
    i: "03",
    h: "Mijozlar bazasi",
    p: "Har bir ariza — sizga tegishli kontakt. Instagram algoritmiga bog'liq emas.",
    long:
      "Ijtimoiy tarmoqda auditoriya sizniki emas — platformaniki. Saytdan kelgan telefon va email esa sizning aktivingiz: istalgan vaqtda qayta sotuv qilasiz.",
    metric: "100%",
    metricLabel: "baza sizniki",
  },
  {
    i: "04",
    h: "Sotuvni avtomatlashtirish",
    p: "Sayt tunda ham ishlaydi: tushuntiradi, ishontiradi, lid yig'adi.",
    long:
      "Bir xil savollarga har kuni javob berish shart emas. Sayt narx, shart va jarayonni o'zi tushuntiradi — sizga faqat tayyor mijoz qoladi.",
    metric: "24/7",
    metricLabel: "to'xtamaydi",
  },
  {
    i: "05",
    h: "Mahsulotni yoritish",
    p: "Murakkab xizmatni sotuvchi tilida, tartib bilan tushuntirib beradi.",
    long:
      "Xizmatingiz murakkab bo'lsa, uni bir postga sig'dirib bo'lmaydi. Saytda esa bosqichma-bosqich ko'rsatasiz: nima qilasiz, qanday qilasiz, natija qanday bo'ladi.",
    metric: "8 bosqich",
    metricLabel: "aniq jarayon",
  },
  {
    i: "06",
    h: "Ma'lumot yig'ish",
    p: "Analitika ko'rsatadi: odam qayerda ketyapti va nima ishlayapti.",
    long:
      "Taxmin qilish tugaydi. Qaysi blok o'qiladi, qayerda chiqib ketishadi, qaysi tugma bosiladi — hammasi raqamda. Keyingi qaror faktga tayanadi.",
    metric: "0 taxmin",
    metricLabel: "faqat raqam",
  },
];

export const process = [
  { n: "01", h: "Brifing", p: "Biznesingizni, mijozingizni va sotuv jarayoningizni chuqur o'rganamiz.", t: "1-kun" },
  { n: "02", h: "Biznes va raqobat tahlili", p: "Bozor, raqiblar va ular sotolmayotgan nuqtalarni topaman.", t: "1–2 kun" },
  { n: "03", h: "Sotuvchi matn", p: "Konversiyaga yo'naltirilgan kopirayting — sarlavhadan CTA gacha.", t: "2-kun" },
  { n: "04", h: "Dizayn", p: "Premium darajadagi vizual: tartib, ritm va e'tibor boshqaruvi.", t: "2–3 kun" },
  { n: "05", h: "Verstka", p: "Tilda'da piksel-perfect joylash. Mobil versiya alohida sozlanadi.", t: "1–2 kun" },
  { n: "06", h: "CRM o'rnatish", p: "Lidlar Telegram va CRM'ga tushadi — birortasi yo'qolmaydi.", t: "0.5 kun" },
  { n: "07", h: "Tekshiruv", p: "QA: formalar, tezlik, linklar, barcha qurilmalarda sifat nazorati.", t: "0.5 kun" },
  { n: "08", h: "30 daqiqalik dars", p: "Admin panelda o'zingiz ishlashni o'rgataman. Sayt sizniki.", t: "30 daqiqa" },
];

export type Project = {
  title: string;
  type: string;
  desc: string;
  href: string;
  live: boolean;
  /** Havola sayt emas, yuklab olinadigan fayl bo'lsa */
  file?: boolean;
  cta?: string;
  mark: string;
  image: string | null;
  domain: string;
  from: string;
  to: string;
  feature?: boolean;
};

export const projects: Project[] = [
  {
    title: "MatchedExpo",
    type: "Korporativ sayt",
    desc: "Xalqaro ta'lim yarmarkasi uchun to'liq korporativ platforma — tadbir dasturi, ishtirokchilar va ro'yxatdan o'tish oqimi bilan.",
    href: "https://matchedexpo.com",
    domain: "matchedexpo.com",
    live: true,
    mark: "ME",
    image: "/img/portfolio/matchedexpo.jpg",
    feature: true,
    from: "#1466F2",
    to: "#0B3F9E",
  },
  {
    title: "Avalon Residence",
    type: "Ko'chmas mulk · Landing",
    desc: "268 xonadonli turar-joy majmuasi uchun premium sayt: obyekt, joylashuv, xonadon tanlash va konsultatsiya arizasi.",
    href: "https://avalonresidence.uz",
    domain: "avalonresidence.uz",
    live: true,
    mark: "AV",
    image: "/img/portfolio/avalon.jpg",
    from: "#C9A227",
    to: "#5E4A12",
  },
  {
    title: "Harakat",
    type: "Ko'chmas mulk · Landing",
    desc: "Biznes-klass turar-joy majmuasi. Kvizli hero — tashrifchi birinchi ekrandayoq xonadon tanlab, ariza qoldiradi.",
    href: "https://harakat-tjm.uz",
    domain: "harakat-tjm.uz",
    live: true,
    mark: "HK",
    image: "/img/portfolio/harakat.jpg",
    from: "#B59F72",
    to: "#4A3E24",
  },
  {
    title: "Fazo Avenue",
    type: "Vizitka sayt",
    desc: "JBA Group turar-joy majmuasi uchun ixcham vizitka sayt: obyekt taqdimoti, infratuzilma va bir qadamli aloqa.",
    href: "https://fazoavenue.uz",
    domain: "fazoavenue.uz",
    live: true,
    mark: "FA",
    image: "/img/portfolio/fazoavenue.jpg",
    from: "#2A63D8",
    to: "#C98A3C",
  },
  {
    title: "Performance Marketing 3.0",
    type: "Kurs sotuvi · Landing",
    desc: "Abdulloh Jamilovning marketologlar uchun oflayn kursi: taklif, 5 muammo — 9 yechim strukturasi, shogirdlar natijasi va yozilish oqimi. Sayt domendan uzilgan — to'liq dizayn maketi PDF'da saqlangan.",
    href: "/files/performance-marketing-3.pdf",
    domain: "performance-marketing-3.pdf",
    live: false,
    file: true,
    cta: "Dizaynni ko'rish (PDF)",
    mark: "PM",
    image: "/img/portfolio/performance-marketing.jpg",
    from: "#2A2440",
    to: "#111018",
  },
];

export const clients: { n: string; logo: string }[] = [
  { n: "Harakat", logo: "/img/clients/harakat.png" },
  { n: "Avalon Residence", logo: "/img/clients/avalon.png" },
  { n: "Furqat Residence", logo: "/img/clients/furqat.png" },
  { n: "Nahl Travel", logo: "/img/clients/nahltravel.png" },
  { n: "Fazo Avenue", logo: "/img/clients/fazoavenue.png" },
  { n: "Mock24", logo: "/img/clients/mock24.png" },
  { n: "MatchedExpo", logo: "/img/clients/matchedexpo.png" },
  { n: "Shiroq Business School", logo: "/img/clients/shiroq.png" },
  { n: "UzTea", logo: "/img/clients/uztea.png" },
  { n: "Max Power Horse", logo: "/img/clients/maxpowerhorse.png" },
  { n: "JoinPoint", logo: "/img/clients/joinpoint.png" },
  { n: "MedBrand", logo: "/img/clients/medbrand.png" },
  { n: "Deep Vision", logo: "/img/clients/deepvision.png" },
  { n: "IUI", logo: "/img/clients/iui.png" },
  { n: "T.", logo: "/img/clients/tdot.png" },
  { n: "BE", logo: "/img/clients/be.png" },
  { n: "V", logo: "/img/clients/vmark.png" },
  { n: "Loop", logo: "/img/clients/loop.png" },
  { n: "Puzzle", logo: "/img/clients/puzzle.png" },
  { n: "Wave", logo: "/img/clients/wave.png" },
];
