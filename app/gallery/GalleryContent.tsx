"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const galleryItems = [
  {
    id: 10,
    title: "Castile Blue Vase",
    category: "Vases",
    image: "/images/pottery-tumbler-blue.jpg",
  },
  {
    id: 11,
    title: "Bubble mug and bowl set",
    category: "Mugs",
    image: "/images/pottery-mug-blue.jpg",
  },
  {
    id: 12,
    title: "Bubble Mug Set",
    category: "Mugs",
    image: "/images/pottery-vase-mug-set.jpg",
  },
  {
    id: 13,
    title: "Ceramic Glaze Pot",
    category: "Pots",
    image: "/images/pottery-bowl-glazed.jpg",
  },
  {
    id: 14,
    title: "Lavender Bee Garden Mug",
    category: "Mugs",
    image: "/images/lavender-bee-mug.jpg",
  },
  {
    id: 15,
    title: "Carved Leaf Artisan Mug",
    category: "Mugs",
    image: "/images/carved-leaf-mug.jpg",
  },
  {
    id: 16,
    title: "Textured Mug",
    category: "Mugs",
    image: "/images/textured-green-mug.jpg",
  },
  {
    id: 17,
    title: "Autumn Leaf Bowl",
    category: "Bowls",
    image: "/images/autumn-leaf-bowl.jpg",
  },
  {
    id: 18,
    title: "Harvest Pumpkin Set",
    category: "Pots",
    image: "/images/ceramic-pumpkins.jpg",
  },
  {
    id: 19,
    title: "Castile Blue Carved Vase",
    category: "Vases",
    image: "/images/blue-sunflower-vase.jpg",
  },
  {
    id: 20,
    title: "Leaf Pattern Teapot",
    category: "Pots",
    image: "/images/ceramic-teapot-leaf-pattern.jpg",
  },
  {
    id: 22,
    title: "Custom Logo Mug",
    category: "Mugs",
    image: "/images/custom-logo-mug.jpg",
  },
  {
    id: 23,
    title: "Carved Mug",
    category: "Mugs",
    image: "/images/textured-harvest-mug.jpg",
  },
  {
    id: 24,
    title: "Scalloped Pink Mugs",
    category: "Mugs",
    image: "/images/pink-petal-mugs.jpg",
  },
  {
    id: 25,
    title: "Castile Blue Mug",
    category: "Mugs",
    image: "/images/vibrant-blue-mug.jpg",
  },
  {
    id: 26,
    title: "Lavender Stamped Mugs",
    category: "Mugs",
    image: "/images/lavender-stamped-mugs.jpg",
  },
  {
    id: 27,
    title: "Heart Rim Mugs",
    category: "Mugs",
    image: "/images/heart-rim-mugs.jpg",
  },
  {
    id: 28,
    title: "Small Blue Carved Mug",
    category: "Mugs",
    image: "/images/textured-forest-green-mug.jpg",
  },
  {
    id: 29,
    title: "Ladybug Mug",
    category: "Mugs",
    image: "/images/ladybug-mug.jpg",
  },
  {
    id: 30,
    title: "Blue Dipped Mug",
    category: "Mugs",
    image: "/images/blue-dipped-mug.jpg",
  },
]

const categories = ["All", "Mugs", "Bowls", "Vases", "Platters", "Pots"]

export default function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const searchParams = useSearchParams()
  const itemIdToScroll = searchParams.get("id")

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  useEffect(() => {
    if (itemIdToScroll) {
      const element = document.getElementById(`gallery-item-${itemIdToScroll}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }, [itemIdToScroll, filteredItems])

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clay-dark mb-4 sm:mb-6">Pottery Gallery</h1>
          <p className="text-lg sm:text-xl text-clay-primary max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Explore my collection of handcrafted pottery pieces. Each item is unique, food safe, and perfect for
            everyday use or special gifts.
            <br />
            *Not all items are available{" "}
            <Link
              href="https://clayhousepotteryjoy.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-clay-dark transition-colors"
            >
              Visit my Etsy Shop
            </Link>{" "}
            to purchase, or contact me.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4 sm:px-0">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                  category === selectedCategory
                    ? "bg-clay-primary hover:bg-clay-dark text-white"
                    : "border-clay-300 text-clay-primary hover:bg-clay-light"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 border-clay-200 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <Badge variant="outline" className="border-white text-white text-xs mb-1">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-clay-light to-clay-100 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-clay-dark mb-4">Love What You See?</h3>
          <p className="text-clay-primary mb-6 max-w-2xl mx-auto">
            Visit me at the Market Faire to see these pieces in person and discover even more unique creations. Each
            piece is one-of-a-kind and waiting for the perfect home!
          </p>
          <Button asChild size="lg" className="bg-clay-primary hover:bg-clay-dark text-white">
            <Link href="/contact">
              Visit My Booth <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}



