export default function SuccessPage() {
  const calendar = process.env.NEXT_PUBLIC_CALENDAR_URL || '#'
  return (
    <main className="min-h-screen bg-ink px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[.05] p-8">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-signal">Purchase Confirmed</p>
        <h1 className="mt-4 text-4xl font-black">Your Capital Upgrade Review is underway.</h1>
        <p className="mt-5 leading-8 text-vault/80">
          Next step: complete your intake and schedule your strategist review. Your review focuses on readiness, blocker detection, lender-fit strategy, and application sequencing.
        </p>
        <a href={calendar} className="mt-8 inline-flex rounded-xl bg-signal px-6 py-4 font-bold text-ink">Schedule Review</a>
      </div>
    </main>
  )
}
