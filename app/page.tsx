"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Heart, Palette, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clay-50 to-clay-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in-up text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-clay-dark leading-tight">
                  <span className="block">Welcome To</span>
                  <span className="block text-clay-primary">ClayHouse</span>
                  <span className="block text-clay-dark">Pottery</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-clay-primary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Handcrafted pottery pieces made with love by Anika Joy in ClayHouse Studios.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-clay-primary hover:bg-clay-dark text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
                >
                  <Link href="/gallery">
                    View Gallery <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-clay-primary text-clay-primary hover:bg-clay-light bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
                >
                  <Link href="/about">Learn My Story</Link>
                </Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative animate-fade-in-right flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
                <img
                  src="/images/anika-at-pottery-wheel.jpg"
                  alt="Anika shaping clay on a pottery wheel in her studio"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                {/* Decorative background element */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full bg-gradient-to-br from-clay-light to-clay-200 rounded-2xl -z-10 opacity-80"></div>
                {/* Additional decorative elements for larger screens */}
                <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 lg:w-32 lg:h-32 bg-clay-primary/20 rounded-full -z-10"></div>
                <div className="hidden lg:block absolute -top-8 -left-4 w-16 h-16 bg-clay-dark/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-clay-light/30 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-clay-primary/20 to-transparent rounded-full blur-2xl -z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white/50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-clay-dark mb-3 sm:mb-4">
              Why Choose ClayHouse Pottery?
            </h2>
            <p className="text-clay-primary max-w-2xl mx-auto">
              Every piece is uniquely crafted on the potters wheel in my ClayHouse studio - Every piece tells a story
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-clay-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Heart className="h-8 w-8 text-clay-primary" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">Made with Love</h3>
                <p className="text-clay-primary">
                  Each piece is handcrafted with care and attention to detail in my studio.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-clay-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Palette className="h-8 w-8 text-clay-primary" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">Food Safe</h3>
                <p className="text-clay-primary">
                  All pottery pieces are food safe and perfect for everyday use or special occasions.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-clay-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Users className="h-8 w-8 text-clay-primary" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">Unique Gifts</h3>
                <p className="text-clay-primary">
                  Perfect for gifting or treating yourself to something special and one-of-a-kind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-clay-dark mb-3 sm:mb-4">Featured Pieces</h2>
            <p className="text-clay-primary">A glimpse into our handcrafted collection</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Link href="/gallery?id=11" className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/pottery-mug-blue.jpg"
                  alt="Handcrafted blue ceramic mug with curved handle"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <Link href="/gallery?id=20" className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/ceramic-teapot-leaf-pattern.jpg"
                  alt="Ceramic teapot with a muted green/brown glaze and a carved leaf-like pattern"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <Link href="/gallery?id=13" className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/pottery-bowl-glazed.jpg"
                  alt="Beautiful glazed ceramic bowl with blue-green and brown tones"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-clay-primary hover:bg-clay-dark text-white">
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
