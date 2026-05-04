# fundedbiz-com-live

Clean revenue-first Next.js homepage for FundedBiz Capital Upgrade Review.

## Purpose
Replace the current preview/splash homepage with a compliant conversion page for the $497 Capital Upgrade Review.

## Required environment variables

```bash
NEXT_PUBLIC_STRIPE_497_URL=https://buy.stripe.com/REPLACE_WITH_497_PAYMENT_LINK
NEXT_PUBLIC_STRIPE_2500_URL=https://buy.stripe.com/REPLACE_WITH_2500_PAYMENT_LINK
NEXT_PUBLIC_CALENDAR_URL=https://calendly.com/REPLACE_WITH_REVIEW_CALENDAR
```

## Local install

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create GitHub repo: `fundedbiz-com-live`.
2. Push this project.
3. Import repo into Vercel.
4. Add env vars above.
5. Assign domains:
   - `fundedbiz.com`
   - `www.fundedbiz.com`
6. Confirm DNS:
   - Apex A: `76.76.21.21`
   - WWW CNAME: `cname.vercel-dns-0.com`

## Compliance guardrails

Avoid these public claims:
- guaranteed funding
- approval prediction
- quantum-speed
- full SSN collection
- consumer dashboard enabled
- start sequence / ignition console language

Approved framing:
- funding readiness intelligence
- estimated lender fit
- product-fit map
- application sequencing
- blocker detection
- readiness score
