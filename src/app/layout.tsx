import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics';


export const metadata: Metadata = {
  title: {
    template: '%s - Consult Net Zero',
    default: 'Consult Net Zero - Retrofitting Made Simple',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Consult Net Zero Blog"
          href="/blog/feed.xml"
        />
      </head>
			<GoogleAnalytics GA_MEASUREMENT_ID='G-VECVT1S1B7'/>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
