# CLAUDE.md

Bu fayl har suhbat boshida o'qiladi. Loyihada ishlashdan oldin shu qoidalarga rioya qil.

---

## Loyiha nima

Umidjon Majidovning **shaxsiy sotuvchi sayti** (portfolio). Bu blog yoki tajriba
maydoni emas — maqsadi bitta: tashrifchini mijozga aylantirish.

**Kim uchun:** O'zbekistondagi biznes egalari — ko'chmas mulk (turar-joy majmualari),
travel agentliklar, tibbiyot markazlari, onlayn ta'lim va kurs sotuvchilar.

**Muvaffaqiyat mezoni:** potensial mijoz 5 sekundda tushunsin — bu odam nima qiladi,
qanday natija beradi, qanday bog'lanish mumkin. Har bir o'zgarish shu savolga
xizmat qilishi kerak.

**Asosiy harakat (CTA):** Telegram. Barcha yo'llar shunga olib boradi.

**Til:** hamma narsa o'zbek tilida — kontent, tugmalar, navigatsiya, `alt` matnlar,
kod izohlari. Rus/ingliz versiyasi hozircha yo'q.

---

## Stek va struktura

Next.js 16 (App Router) · TypeScript · toza CSS (framework yo'q) · Vercel.

```
app/
  layout.tsx          shriftlar, metadata, JSON-LD
  page.tsx            seksiyalar ketma-ketligi
  globals.css         DESIGN TOKENLAR, base, tugmalar, reveal
  sections.css        har seksiyaning stili (raqamlangan bloklar)
  opengraph-image.tsx, icon.svg, robots.ts, sitemap.ts, not-found.tsx
components/           Header Hero Stats About Services WhyWebsite Process
                      Portfolio Mockup Clients Contact Footer Reveal Arrow
lib/
  site.ts             BARCHA KONTENT shu yerda
  useReveal.ts        scroll animatsiya hooki
public/
  img/umidjon.jpg     portret (hero + avatar)
  img/portfolio/      sayt skrinshotlari
  img/clients/        mijoz logolari
  files/              yuklab olinadigan PDF loyihalar
```

### Kontent qoidasi

Matn, raqam, loyiha, mijoz — hammasi `lib/site.ts` da. Komponent ichiga
qattiq yozilgan matn **qo'yma**. Eksportlar: `site`, `nav`, `stats`, `timeline`,
`skills`, `community`, `services`, `reasons`, `process`, `projects`, `clients`.

---

## Uslub qoidalari

### Ranglar — eng muhim qoida

Ikki aksent bor va ular **almashmaydi**:

| Token | Rang | Faqat shu uchun |
|---|---|---|
| `--accent` | `#FFCA7B` issiq qum | **MATN**: eyebrow, sarlavhadagi urg'u, raqam suffikslari, hover matni |
| `--brand` | `#1466F2` elektr ko'k | **SHAKL va FON**: tugmalar, chiziqlar, nuqtalar, orb, glow, progress-bar |

Ko'k matn yozma. Qum rangda tugma yasama. Yangi rang o'ylab topma — mavjud
tokenlardan foydalan (`--accent-hi`, `--brand-soft`, `--brand-line`, `--ink-2`…).
Barcha tokenlar `app/globals.css` boshida.

Fon: `--bg #08090A`, sirt `--surface #111315`, chegara `--border #1F2325`.
Sayt to'liq qorong'i — och tema yo'q.

### Tipografiya

Space Grotesk (sarlavha) · Inter (matn) · JetBrains Mono (terminal, raqam,
yorliq). Raqamlarda `tabular-nums`. Sarlavhalarda `letter-spacing` manfiy.

### Ohang

O'zbekcha, sodda, sotuvchi — lekin baqirmaydi. "Eng zo'r", "professional
xizmatlar" kabi bo'sh so'zlar o'rniga aniq gap: nima qilinadi, qancha vaqtda,
qanday natija. Raqam bo'lsa raqam bilan.

Terminal estetikasi joyida ishlatiladi (`//`, `$`, `[01]`, `>_`) — lekin
bezak sifatida, ma'noni to'sib qo'ymasin.

### Kompozitsiya

Har seksiyaning **o'z layouti** bor — bir xil kartochka gridini takrorlama.
Hozir: hero (2 ustun) → statistika bandi → about (bio + timeline) →
xizmatlar (editorial qatorlar) → nima uchun (gorizontal akkordeon) →
jarayon (4×2 grid) → portfolio (navbatlashuvchi keyslar) → mijozlar (marquee)
→ aloqa (markazlashgan). Yangi blok qo'shsang, mavjudlaridan farq qilsin.

### Oddiylik

- Kutubxona qo'shma. Animatsiya, karusel, ikonka — hammasi qo'lda yozilgan.
- CSS o'zgaruvchilardan foydalan, qiymatni qattiq yozma.
- Komponent kichik va bitta ishni qilsin.
- Semantik HTML: `section`, `article`, `nav`, `h1–h3` tartibda.

### Animatsiya

- Faqat `transform` va `opacity`. `width`, `height`, `top` animatsiya qilinmaydi.
- Scroll reveal — bitta `IntersectionObserver` (`lib/useReveal.ts`), element
  `.reveal` klassi va `--d` kechikishi bilan.
- `prefers-reduced-motion` hurmat qilinadi — buni buzma.

### Responsiv

Mobile-first, 320px dan 1440px gacha ishlashi kerak. Maksimal kontent eni 1240px.

---

## Texnik chegaralar

Bu loyihaning ataylab tanlangan chegaralari. Buzish kerak bo'lsa — avval so'ra,
sababini tushuntir.

### Bog'liqliklar

Faqat uchta: `next`, `react`, `react-dom` (+ TypeScript turlari). **Yangi paket
qo'shma.** Tailwind, styled-components, Framer Motion, GSAP, Swiper, ikonka
kutubxonalari — kerak emas. Karusel, akkordeon, animatsiya, SVG ikonka
hammasi qo'lda yozilgan va shunday qolsin.

Agar biror ish uchun paket zarur ko'rinsa — avval qo'lda yozib bo'ladimi,
shuni tekshir. Zarurat haqiqiy bo'lsa foydalanuvchidan ruxsat so'ra.

### Arxitektura

- **To'liq statik.** Barcha sahifalar `next build` da prerender qilinadi.
  Serverli logika, ma'lumotlar bazasi, API route yo'q.
- **Backend yo'q.** Aloqa formasi ham yo'q — barcha lidlar Telegram orqali.
  Forma qo'shish kerak bo'lsa, bu arxitektura qarori: avval muhokama.
- **Bitta sahifa** + `not-found`. Ko'p sahifali bo'lishi rejalashtirilmagan.
- **`"use client"` faqat zarurat bo'lsa.** Hozir 4 ta: `Header` (scroll,
  drawer), `Hero` (typing effekti), `WhyWebsite` (akkordeon holati),
  `Reveal` (observer). Qolgani server komponent — shunday qolsin.

### Rasmlar

- `next/image` **ishlatilmagan** — oddiy `<img>` (`width`, `height`,
  `loading="lazy"`). Bu ataylab: konfiguratsiya va runtime bog'liqligi
  bo'lmasin. Yangi rasmda ham shu uslubni davom ettir.
- Barcha rasm **lokal**, `public/` ichida. Tashqi CDN yoki hotlink yo'q.
- Hajm: skrinshot **400 KB dan oshmasin** (JPEG, sifat ~82, eni 1600px),
  logo **100 KB dan oshmasin** (PNG, 256px).
  Siqish: `sips -s format jpeg -s formatOptions 82 -Z 1600 manba --out chiqish`
- Istisno: `public/files/` dagi PDF loyihalar (12 MB gacha) — ular yuklab
  olinadi, sahifa bilan birga yuklanmaydi.

### Shriftlar

Uchta va faqat uchta, `next/font/google` orqali (Space Grotesk, Inter,
JetBrains Mono). To'rtinchisini qo'shma — sahifa og'irlashadi.

### Kuzatuv va maxfiylik

Analitika, piksel, cookie banner, uchinchi tomon skripti **yo'q**. Qo'shish
kerak bo'lsa — foydalanuvchi qarori, o'zboshimchalik bilan qo'shma.

### Brauzer qo'llab-quvvatlashi

Zamonaviy evergreen brauzerlar (Chrome, Safari, Firefox, Edge — oxirgi 2 yil).
`aspect-ratio`, `backdrop-filter`, `mask-image`, `writing-mode`, `text-wrap`
ishlatilgan. IE va eski Safari qo'llab-quvvatlanmaydi.

`-webkit-` prefiksi `mask-image` va `backdrop-filter` uchun majburiy —
Safari'da usiz ishlamaydi, mavjudlarini olib tashlama.

### Kod sifati

- TypeScript `strict: true`. `any` yozma, `@ts-ignore` qo'yma.
- ESLint konfiguratsiyasi yo'q — build lint bilan tekshirmaydi, shuning uchun
  toza yozish sening zimmangda.
- Har o'zgarishdan keyin `npm run build` xatosiz o'tishi **majburiy**.

### Foydalanish imkoniyati (minimal daraja)

- Har `<img>` da mazmunli `alt` (dekorativ bo'lsa `alt=""` + `aria-hidden`).
- Fokus ko'rinadigan bo'lsin — `:focus-visible` stilini o'chirma.
- Interaktiv element `<button>` yoki `<a>` bo'lsin, `div` ga `onClick` osma.
- Katta matn kontrasti 3:1 dan past tushmasin (shuning uchun `--ink-4`
  faqat mayda dekorativ yorliqlar uchun).
- `prefers-reduced-motion` har animatsiyada hisobga olinsin.

---

## Ish qoidalari

### 1. Avval reja, keyin kod

Kattaroq o'zgarish (yangi seksiya, layout qayta qurish, bir nechta fayl)
so'ralsa — **avval qisqa reja ko'rsat**: nima o'zgaradi, qaysi fayllar,
qanday ko'rinadi. Tasdiqni kutib, keyin yoz.

Kichik aniq ishga (matn tuzatish, rang almashtirish, bitta qiymat) reja shart
emas — darrov qil.

### 2. Kichik qadamlar

Bir vaqtda bitta ishni tugat va tekshir. O'nta narsani birga o'zgartirib,
oxirida "bo'ldi" dema. Har bosqichda `npm run build` xatosiz o'tsin.

### 3. Ko'rmasdan "tayyor" dema

Vizual o'zgarish kiritsang — o'zing ko'r. Foydalanuvchidan tekshirishni so'rama.
Skrinshot olish usuli pastda.

### 4. Faktni to'qima

Tajriba, raqam, mijoz nomi, loyiha tavsifi — faqat foydalanuvchi bergan
ma'lumot. Bilmasang so'ra. Sayt manzilini taxmin qilma — `curl` bilan tekshir.

### 5. Ruxsat

Deploy qilish, domen sotib olish, tashqi xizmatga ma'lumot yuborish —
foydalanuvchi aytmaguncha qilma. Fayl o'chirishdan oldin ichiga qara.

### 6. Maxfiylik

Bu faylga yoki repoga **parol, API kalit, token yozilmaydi**. Maxfiy qiymat
kerak bo'lsa `.env.local` (u `.gitignore` da). Sirni chatda ham qaytarma.

---

## Amaliy eslatmalar

Bu loyihada oldin vaqt yo'qotilgan joylar — takrorlama:

**Skrinshot olish.** Brauzer paneli beqaror. Ishonchli usul — headless Chrome,
`--force-prefers-reduced-motion` bilan (aks holda `.reveal` elementlari
ko'rinmay, bo'sh rasm chiqadi):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars --force-prefers-reduced-motion \
  --window-size=1440,1000 --virtual-time-budget=10000 \
  --user-data-dir=/tmp/cshot --screenshot=/tmp/shot.png http://localhost:3100
```

Butun sahifani olish uchun `--window-size=1440,13000`, keyin `sips` bilan kesib
ol. `sips -c <balandlik> <kenglik> --cropOffset <yuqoridan> <chapdan>` —
**yuqoridan** hisoblanadi. URL ga `#anchor` qo'shma, bo'sh rasm chiqadi.

**Foydalanuvchi fayllari.** `~/Desktop` va `~/Downloads` ba'zan macOS himoyasi
(TCC) tufayli ochilmaydi — `ls` ishlaydi, `cp` esa "Operation not permitted"
beradi. Bunda faylni loyiha papkasiga ko'chirishni so'ra.

**Mijoz logolari.** Sayt favicon'ini logo sifatida ishlatma — ular app-ikonka,
marquee'da xunuk chiqadi. Logolar `Umidjon-Saytolog.pdf` ichidan asl o'lchamda
olingan (PDF ichidagi rasm obyektlarini Python bilan ajratish mumkin).

**Marquee.** Bo'shliq `gap` bilan emas, element ichida (`margin-right`) beriladi
va ro'yxat 4 marta takrorlanib `-25%` ga siljiydi — shundagina halqa uzilmaydi.

**Deploy oldidan.** `lib/site.ts` dagi `site.url` haqiqiy domenga o'zgartirilsin —
OG rasm, sitemap va canonical shunga tayanadi.
