import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FundedBiz Capital Upgrade Review',
  description: 'A funding readiness review for established business owners preparing for their next capital move.',
  metadataBase: new URL('https://fundedbiz.com'),
  openGraph: {
    title: 'FundedBiz Capital Upgrade Review',
    description: 'Identify funding blockers, improve lender fit, and map your next capital sequence.',
    url: 'https://fundedbiz.com',
    siteName: 'FundedBiz',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
