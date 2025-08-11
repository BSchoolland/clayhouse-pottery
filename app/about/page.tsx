 

import type { Metadata } from 'next'
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: 'About Anika Schoolland',
  description: 'Meet Anika Schoolland, the artist behind ClayHouse Pottery. Learn about her journey from a PlayHouse to ClayHouse and her passion for creating handcrafted pottery pieces.',
  keywords: ['Anika Schoolland', 'pottery artist', 'ClayHouse Pottery', 'pottery studio', 'handmade ceramics', 'pottery classes'],
  openGraph: {
    title: 'About Anika Schoolland | ClayHouse Pottery',
    description: 'Meet Anika Schoolland, the artist behind ClayHouse Pottery. Learn about her journey from a PlayHouse to ClayHouse.',
    images: ['/images/anika-studio-portrait.jpg'],
  },
}
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Home, Sparkles } from "lucide-react"



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clay-50 to-clay-100">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clay-dark mb-4 sm:mb-6">
              Meet Anika Schoolland
            </h1>
            <p className="text-xl text-clay-primary max-w-3xl mx-auto">The heart and hands behind ClayHouse Pottery</p>
          </div>

          {/* Main Story Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-clay-dark">My Journey</h2>
                <p className="text-sm sm:text-base text-clay-primary leading-relaxed">
                  Hello everyone! I am Anika Schoolland, and I have a small business called ClayHouse Pottery. I was
                  able to take pottery lessons in 2019 through a once a week class at the Chartreuse Muse in Modesto
                  when I was in eighth grade. I was very excited and inspired by the class and desired more time to
                  create. My parents found me a kick wheel for Christmas and I took off on it. I spend most of my time
                  during the summer on the wheel whether I'm teaching classes or making pottery myself. One of my
                  favorite projects when I was younger was building a playhouse in our backyard. Dad and I remodeled it
                  into the pottery studio… From PlayHouse to ClayHouse. While I have recently moved out of the backyard
                  studio into my grandfather's shop so I can make pottery year round, the story of PlayHouse to
                  ClayHouse lives on.
                </p>
                <p className="text-sm sm:text-base text-clay-primary leading-relaxed">
                  My mission is to make functional art as a co-creator with God, The Creator, for His glory; remembering
                  that,
                  {
                    '"You, O Lord, are our Father; we are the clay, and You are our Potter; we are all the work of Your hand."'
                  }
                  Isaiah 64:8
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in-right flex justify-center">
              <div className="relative z-10 w-1/2">
                {" "}
                {/* Adjusted to w-1/2 for 50% smaller */}
                <img
                  src="/images/anika-studio-portrait.jpg"
                  alt="Anika sitting on her pottery wheel in her studio"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-clay-light to-clay-200 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* PlayHouse to ClayHouse Story */}
          <Card className="mb-16 bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Removed the image div from here */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="h-8 w-8 text-clay-primary" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-clay-dark">From PlayHouse to ClayHouse</h3>
                  </div>
                  <p className="text-sm sm:text-base text-clay-primary leading-relaxed">
                    One of my favorite childhood projects was building a playhouse in our backyard. Years later, Dad and
                    I transformed that same playhouse into my pottery studio. It's such a special space - from a place
                    where I played as a child to where I now create art as a young adult. The transformation from
                    PlayHouse to ClayHouse represents my own journey of growth and passion.
                  </p>
                  <p className="text-sm sm:text-base text-clay-primary leading-relaxed">
                    Every piece I create in this studio carries that history and love. It's not just a workspace; it's
                    where dreams take shape, literally and figuratively.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <Card className="text-center bg-white/70 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-clay-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-clay-primary" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">Passion-Driven</h3>
                <p className="text-sm sm:text-base text-clay-primary">
                  Every piece is created with genuine love and enthusiasm for the craft.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/70 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-clay-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-clay-primary" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">Unique & Safe</h3>
                <p className="text-sm sm:text-base text-clay-primary">
                  All items are food safe and make perfect unique gifts for your loved ones.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/70 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-clay-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-clay-primary" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">Small Town Charm</h3>
                <p className="text-sm sm:text-base text-clay-primary">
                  Bringing handcrafted artistry to our local community with personal touch.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-clay-light to-clay-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-clay-dark mb-4">Visit Me at Market Faire!</h3>
            <p className="text-sm sm:text-base text-clay-primary mb-6 max-w-2xl mx-auto">
              I'd love to meet you in person! Please stop by my booth at the Market Faire to see my latest creations and
              chat about pottery. There's nothing quite like seeing and feeling these pieces in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-clay-primary hover:bg-clay-dark text-white">
                <Link href="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-clay-primary text-clay-primary hover:bg-clay-light bg-transparent"
              >
                <Link href="/gallery">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
