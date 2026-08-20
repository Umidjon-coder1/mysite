# Server va Deploy

## Infratuzilma

| | |
|---|---|
| Provider | Hetzner Cloud (CX23, Helsinki) |
| OS | Ubuntu 26.04 LTS |
| Domen | umidjon-saytolog.uz (Cloudflare DNS, DNS-only) |
| Web server | Docker + Caddy (avtomatik HTTPS, Let's Encrypt) |
| Ilova | Next.js, standalone output, Docker konteynerida |

## Kirish

- SSH: `ssh deploy@<server-ip>` — faqat SSH-kalit orqali, parol bilan kirish o'chirilgan
- Root orqali to'g'ridan-to'g'ri SSH kirish o'chirilgan (`PermitRootLogin no`)
- `deploy` foydalanuvchisi parolsiz `sudo` va `docker` guruhiga ega

## Xavfsizlik

- `ufw` firewall: faqat 22 (SSH), 80, 443 portlari ochiq
- `fail2ban` — SSH brute-force himoyasi
- Serverga faqat kalit orqali kirish mumkin

## Deploy tuzilishi

Serverda: `~/apps/`
```
apps/
├── docker-compose.yml   # app + caddy servislari
├── Caddyfile             # reverse proxy va domen sozlamalari
└── mysite/                # shu repo clone qilingan joy
```

## GitHub Actions orqali avtodeploy

`.github/workflows/deploy.yml` — `main` branch'ga push qilinganda avtomatik ishga tushadi:

1. GitHub Actions serverga SSH orqali ulanadi
2. Ulanish uchun ishlatiladigan kalit **faqat bitta buyruqni** bajarishga cheklangan (`git pull && docker compose up -d --build`) — boshqa hech narsaga ruxsati yo'q
3. Kalit GitHub repo'ning **Secrets** bo'limida saqlanadi (`DEPLOY_SSH_KEY`, `DEPLOY_HOST`, `DEPLOY_USER`), kodda yoki bu faylda hech qanday maxfiy ma'lumot yo'q

**Natija**: `git push origin main` qilish — saytni yangilash uchun yetarli, serverga qo'lda kirish shart emas.

## Qo'lda deploy qilish kerak bo'lsa

```bash
ssh deploy@<server-ip>
cd ~/apps/mysite && git pull
cd ~/apps && docker compose up -d --build app
```

## Loglarni ko'rish

```bash
ssh deploy@<server-ip>
docker logs mysite --tail 50   # ilova loglari
docker logs caddy --tail 50    # reverse proxy / SSL loglari
```
