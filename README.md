# Umidjon Majidov — portfolio

Bizneslar uchun sotuvchi saytlar yaratuvchi mutaxassisning shaxsiy sayti.
Next.js (App Router) + TypeScript + toza CSS.

## Ishga tushirish

```bash
npm install
npm run dev
```

Sayt: http://localhost:3000

## Buyruqlar

| Buyruq | Vazifasi |
| --- | --- |
| `npm run dev` | Lokal server |
| `npm run build` | Production build |
| `npm run start` | Build'ni ishga tushirish |

## Struktura

```
app/
  layout.tsx          — shriftlar, metadata, JSON-LD
  page.tsx            — barcha seksiyalar
  globals.css         — design tokenlar, base, tugmalar, animatsiya
  sections.css        — har bir seksiyaning stillari
  opengraph-image.tsx — OG rasm (avtomatik generatsiya)
  icon.svg            — favicon
  robots.ts / sitemap.ts
components/           — Header, Hero, Stats, About, Services,
                        WhyWebsite, Process, Portfolio, Clients,
                        Contact, Footer, Reveal, Arrow
lib/
  site.ts             — BARCHA kontent shu yerda
  useReveal.ts        — scroll animatsiya hooki
```

## Rasmlar

### Hero portreti

Portret ikki joyda ishlatiladi — hero va «Men haqimda» dagi avatar.
Ikkalasi ham `public/img/umidjon.jpg` dan o'qiladi (960x1280, ~108 KB).

Almashtirish uchun yangi rasmni shu nom bilan soling:

```bash
sips -s format jpeg -s formatOptions 82 -Z 1280 ~/Desktop/yangi.jpg --out "public/img/umidjon.jpg"
```

Rasm qora palitraga moslash uchun CSS'da grading qo'llanadi
(`app/sections.css` → `.shot__img img`): `brightness(0.84)`, `saturate(0.72)`
va ustidan ko'k tint + pastki scrim. Yangi rasm boshqa yorug'likda bo'lsa
shu qiymatlarni sozlang.

Kadr kesilishi: hero uchun `.shot__img img { object-position: 50% 12%; }`,
avatar uchun `.about__ava img { object-position: 50% 0%; }`.

### Portfolio skrinshotlari

`public/img/portfolio/` ichida — haqiqiy saytlarning bosh sahifasi.
Yangisini olish uchun (Chrome kerak):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1440,900 --virtual-time-budget=10000 --screenshot=shot.png https://sayt.uz
```

Keyin `sips -s format jpeg -s formatOptions 72 -Z 1280 shot.png --out public/img/portfolio/nom.jpg`
va `lib/site.ts` dagi loyihaga `image: "/img/portfolio/nom.jpg"` qo'shing.

### Mijoz logolari

20 ta logo `public/img/clients/` da — hammasi `Umidjon-Saytolog.pdf` ichidan
asl o'lchamda ajratib olingan (PDF ichidagi rasm obyektlari), keyin 256px ga
kichraytirilgan.

Marquee'da har biri oq plastinka ustida, `object-fit: contain` bilan chiqadi.
Yangi mijoz qo'shish: logoni shu papkaga soling va `lib/site.ts` → `clients`
massiviga qator qo'shing.

### PDF ko'rinishidagi loyihalar

Sayti domendan uzilgan loyihani PDF sifatida ko'rsatish mumkin:

1. PDF'ni `public/files/` ga soling.
2. `lib/site.ts` → `projects` da `file: true`, `href: "/files/nomi.pdf"`,
   `cta: "Dizaynni ko'rish (PDF)"` qo'ying.
3. Mockup uchun PDF birinchi ekranidan skrinshot oling va `image` ga bering.

Mockup ramkasida manzil o'rniga fayl nomi va `PDF` belgisi chiqadi, kartochkada
esa «arxiv · fayl nomi» yoziladi.

## Ranglar

`app/globals.css` ichidagi tokenlar:

- `--accent: #FFCA7B` — **matn** aksenti
- `--brand: #1466F2` — **shakl va fon** aksenti (tugmalar, chiziqlar, orblar)
- `--bg`, `--surface`, `--border`, `--ink*` — qora fon va matn darajalari

## Deploy (Vercel)

1. Kodni GitHub'ga yuklang.
2. Vercel'da **New Project** → repo'ni tanlang → sozlamasiz **Deploy**.
3. Domen ulangach `lib/site.ts` dagi `site.url` ni haqiqiy manzilga o'zgartiring
   (OG rasm, sitemap va canonical shu qiymatga tayanadi).
