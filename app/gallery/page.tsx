import type { Metadata } from 'next'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import GalleryContent from "./GalleryContent"

export const metadata: Metadata = {
  title: 'Pottery Gallery',
  description: 'Explore our collection of handcrafted pottery pieces. Unique mugs, bowls, vases, and more. Each item is food safe and perfect for everyday use or special gifts.',
  keywords: ['pottery gallery', 'handcrafted mugs', 'ceramic bowls', 'pottery vases', 'handmade ceramics', 'ClayHouse Pottery'],
  openGraph: {
    title: 'Pottery Gallery | ClayHouse Pottery',
    description: 'Explore our collection of handcrafted pottery pieces. Unique mugs, bowls, vases, and more.',
    images: ['/images/pottery-mug-blue.jpg'],
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clay-50 to-clay-100">
      <Navigation />
      <GalleryContent />
      <Footer />
    </div>
  )
}
