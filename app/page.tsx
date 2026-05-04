import CTAButton from '../components/CTAButton'

const checks = [
  'Business age and entity readiness',
  'Revenue consistency and deposit patterns',
  'Credit profile positioning',
  'Existing debt and payment load',
  'Bank statement and document readiness',
  'Denial and decline trigger review',
  'Lender/product-fit mapping',
  'SBA, term loan, line of credit, and bridge path options',
  'Recommended application sequence',
  '30-day capital readiness action plan'
]

const included = [
  '10-category funding readiness review',
  'Blocker and risk-factor summary',
  'Product-fit map for your next capital move',
  'Sequencing recommendation before applying again',
  'Branded PDF summary and 30-minute strategist review'
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <section className="relative bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-black tracking-tight">FundedBiz</div>
            <a href="#buy" className="rounded-full border border-white/20 px-4 py-2 text-sm text-vault hover:border-signal">Start Review</a>
          </nav>

          <div className="grid items-center gap-10 py-20 md:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm font-semibold text-signal">
                For established business owners preparing for the next capital move
              </p>
              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Unlock more capital before your next denial.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-vault/85">
                The FundedBiz Capital Upgrade Review identifies funding blockers, lender-fit gaps, and the cleanest application sequence before you submit another file.
              </p>
              <div id="buy" className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton />
                <p className="text-sm text-vault/70">One-time review: <span className="font-bold text-white">$497</span></p>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-6 text-vault/55">
                No funding outcome is guaranteed. This review provides readiness intelligence, estimated lender fit, and strategic sequencing guidance based on information you provide.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <p className="text-sm font-bold uppercase tracking-[.25em] text-signal">Review Output</p>
              <h2 className="mt-3 text-3xl font-black">Your capital readiness map</h2>
              <div className="mt-6 space-y-3">
                {included.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-vault/90">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ['Who it is for', 'Businesses 12+ months operating that want a cleaner capital path before applying again.'],
            ['What we diagnose', 'Readiness gaps, documentation issues, credit and cashflow constraints, and likely product-fit mismatches.'],
            ['What you receive', 'A PDF summary, recommended sequence, and 30-minute strategy call focused on your next move.']
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[.04] p-6">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-vault/75">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-steel/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-black tracking-tight">The 10 checks inside the review</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {checks.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-ink/50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal text-sm font-black text-ink">{index + 1}</span>
                <p className="text-vault/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Post-purchase flow</h2>
            <ol className="mt-8 space-y-4 text-vault/85">
              <li><strong className="text-white">1.</strong> Complete secure checkout.</li>
              <li><strong className="text-white">2.</strong> Submit the intake form with business and funding context.</li>
              <li><strong className="text-white">3.</strong> FundedBiz reviews your readiness profile and blocker pattern.</li>
              <li><strong className="text-white">4.</strong> You receive a PDF summary and 30-minute strategy review.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-gold/30 bg-gold/10 p-8">
            <h3 className="text-2xl font-black">Important compliance note</h3>
            <p className="mt-4 leading-7 text-vault/80">
              FundedBiz is not a lender and does not make credit decisions. The Capital Upgrade Review is an advisory readiness product. It does not guarantee funding, approval, rates, terms, or lender acceptance.
            </p>
            <div className="mt-8"><CTAButton label="Start My $497 Review" /></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-vault/55">
        © {new Date().getFullYear()} FundedBiz. Powered by FUNDING OPTIMI⚡ER™ readiness intelligence. LOAN$TACK≡R™ platform layer pending.
      </footer>
    </main>
  )
}
