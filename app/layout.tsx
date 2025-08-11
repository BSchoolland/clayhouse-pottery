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
        <meta name="theme-color" content="#D4A574" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
