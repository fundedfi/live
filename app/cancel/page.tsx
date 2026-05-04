import CTAButton from '@/components/CTAButton'

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-ink px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[.05] p-8">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-signal">Checkout Not Completed</p>
        <h1 className="mt-4 text-4xl font-black">Your review was not purchased.</h1>
        <p className="mt-5 leading-8 text-vault/80">
          You can restart checkout when ready. The review is designed to identify funding blockers before another application is submitted.
        </p>
        <div className="mt-8"><CTAButton label="Restart Checkout" /></div>
      </div>
    </main>
  )
}
