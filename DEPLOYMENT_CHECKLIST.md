# FundedBiz Deployment Checklist

## 1. Stripe link swap
Replace placeholders in Vercel environment variables:

- `NEXT_PUBLIC_STRIPE_497_URL`
- `NEXT_PUBLIC_STRIPE_2500_URL`
- `NEXT_PUBLIC_CALENDAR_URL`

Do not hard-code live payment links into source unless required.

## 2. GitHub

```bash
git init
git add .
git commit -m "Launch FundedBiz revenue homepage"
git branch -M main
git remote add origin git@github.com:YOUR_ORG/fundedbiz-com-live.git
git push -u origin main
```

## 3. Vercel

- Import GitHub repo into Vercel.
- Project name: `fundedbiz-com-live`.
- Framework: Next.js.
- Add env vars before production deployment.
- Deploy.

## 4. Domain cutover

Assign domains to the new canonical project:

- `fundedbiz.com`
- `www.fundedbiz.com`

Remove those same domains from old/splash project if Vercel reports a domain conflict.

## 5. Smoke test

Check:

- `/` loads the offer page.
- Primary CTA opens Stripe $497 checkout.
- `/success` loads.
- `/cancel` loads.
- `/privacy` loads.
- `/terms` loads.
- Mobile hero and CTA render cleanly.

## 6. Campaign unlock

Only after smoke test passes:

- Build HubSpot list.
- Enroll first 250–500 contacts.
- Create top 25 call tasks.
