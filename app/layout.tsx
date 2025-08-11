import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Clayhouse Pottery - Handcrafted Pottery by Anika Schoolland',
    template: '%s | Clayhouse Pottery'
  },
  description: 'Handcrafted pottery pieces made with love by Anika Joy in ClayHouse Studios. Unique mugs, bowls, vases, and custom pieces. Food safe and perfect for everyday use or special gifts.',
  keywords: ['handcrafted pottery', 'ceramic mugs', 'custom pottery', 'Anika Schoolland', 'ClayHouse Pottery', 'handmade ceramics', 'pottery classes', 'food safe pottery'],
  authors: [{ name: 'Anika Schoolland' }],
  creator: 'Anika Schoolland',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clayhousepottery.com',
    siteName: 'Clayhouse Pottery',
    title: 'Clayhouse Pottery - Handcrafted Pottery by Anika Schoolland',
    description: 'Handcrafted pottery pieces made with love by Anika Joy in ClayHouse Studios. Unique mugs, bowls, vases, and custom pieces.',
    images: [
      {
        url: '/images/anika-at-pottery-wheel.jpg',
        width: 1200,
        height: 630,
        alt: 'Anika Schoolland creating pottery at her wheel in ClayHouse Studios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clayhouse Pottery - Handcrafted Pottery by Anika Schoolland',
    description: 'Handcrafted pottery pieces made with love by Anika Joy in ClayHouse Studios.',
    images: ['/images/anika-at-pottery-wheel.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4A574" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClayHouse Pottery",
              "description": "Handcrafted pottery pieces made with love by Anika Joy in ClayHouse Studios",
              "url": "https://clayhousepottery.com",
              "telephone": "(209) 573-0373",
              "email": "aschoolland@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "21420 S Olive Ave",
                "addressLocality": "Ripon",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "founder": {
                "@type": "Person",
                "name": "Anika Schoolland",
                "jobTitle": "Potter and Artist"
              },
              "sameAs": [
                "https://clayhousepotteryjoy.etsy.com"
              ],
              "priceRange": "$$$",
              "paymentAccepted": "Cash, Check",
              "currenciesAccepted": "USD"
            })
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
