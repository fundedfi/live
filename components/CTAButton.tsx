export default function CTAButton({ label = 'Get My Capital Upgrade Review' }: { label?: string }) {
  const href = process.env.NEXT_PUBLIC_STRIPE_497_URL || '#'
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-signal px-6 py-4 text-base font-bold text-ink transition hover:opacity-90"
    >
      {label}
    </a>
  )
}
