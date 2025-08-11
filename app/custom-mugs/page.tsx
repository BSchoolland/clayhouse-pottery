"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Heart, Palette, Clock, CheckCircle } from "lucide-react"

export default function CustomMugsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clay-50 to-clay-100">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center text-center md:text-left mb-16">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clay-dark">Custom Stamped Mugs</h1>
              <p className="text-lg sm:text-xl text-clay-primary max-w-3xl mx-auto md:mx-0">
                I make custom mugs for your business. Choose your text and logo and I will create a custom stamp so that
                you can have a uniquely handcrafted brand mug!
              </p>
              <Badge className="bg-clay-primary text-white px-4 py-2 text-sm inline-block md:inline-flex">
                Perfect for Employee and Customer Gifts or Sale
              </Badge>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <img
                src="/images/custom-logo-mug.jpg"
                alt="Custom ClayHouse Pottery logo mug"
                className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-clay-light to-clay-200 rounded-2xl -z-10 opacity-80"></div>
            </div>
          </div>

          {/* Process Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-clay-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">1. Choose Your Design</h3>
                <p className="text-clay-primary text-sm">
                  Request a custom design including names, dates, quotes, and simple graphics. Must order 6 or more
                  mugs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-clay-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">2. Handcrafted Creation</h3>
                <p className="text-clay-primary text-sm">
                  {
                    "I'll throw your mug on the wheel, stamp your design while the clay is leather-hard, then glaze and fire it."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-clay-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-clay-dark mb-2">3. Ready to Enjoy</h3>
                <p className="text-clay-primary text-sm">
                  Your custom mug will be ready in 3-4 weeks. Food safe, dishwasher friendly, and made to last.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Pricing & Options */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-clay-dark mb-6">Pricing & Options</h2>

              <div className="space-y-6">
                <Card className="bg-white/80 border-clay-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-clay-dark">Standard Custom Mug</h3>
                      <span className="text-xl font-bold text-clay-primary">$36</span>
                    </div>
                    <ul className="text-clay-primary text-sm space-y-1">
                      <li>• Name or short phrase (up to 15 characters)</li>
                      <li>• Choice of glaze color</li>
                      <li>• Standard 12oz size</li>
                      <li>• Food safe and dishwasher friendly</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Order Form */}
            <Card className="bg-white/90 border-clay-200">
              <CardHeader>
                <CardTitle className="text-clay-dark text-xl">Request Your Custom Mug</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-clay-dark">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="border-clay-200 focus:border-clay-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-clay-dark">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="border-clay-200 focus:border-clay-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-clay-dark">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-clay-200 focus:border-clay-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stampText" className="text-clay-dark">
                      Text to Stamp
                    </Label>
                    <Input
                      id="stampText"
                      placeholder="Enter your custom text"
                      className="border-clay-200 focus:border-clay-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="glazeColor" className="text-clay-dark">
                      Preferred Glaze Color
                    </Label>
                    <Input
                      id="glazeColor"
                      placeholder="e.g., Blue, Green, Natural, etc."
                      className="border-clay-200 focus:border-clay-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests" className="text-clay-dark">
                      Special Requests
                    </Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Any special design ideas, size preferences, or other details..."
                      rows={3}
                      className="border-clay-200 focus:border-clay-400 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-clay-primary hover:bg-clay-dark text-white">
                    Submit Custom Mug Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <Card className="bg-gradient-to-r from-clay-light to-clay-100 border-clay-200 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-clay-primary" />
                <h3 className="text-xl font-bold text-clay-dark">Important Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-clay-primary">
                <div>
                  <h4 className="font-semibold mb-2">Timeline & Process:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 3-4 weeks production time</li>
                    <li>• 50% deposit required to start</li>
                    <li>• Design approval before stamping</li>
                    <li>• Pickup at Market Faire or arrange delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Care Instructions:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Dishwasher and microwave safe</li>
                    <li>• Food safe glazes used</li>
                    <li>• Hand washing recommended for longevity</li>
                    <li>• Avoid extreme temperature changes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-clay-primary to-clay-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Something Special?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Custom stamped mugs make perfect gifts for weddings, birthdays, holidays, or any special occasion. Each
              piece is unique and made with love in my ClayHouse studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-clay-dark bg-transparent"
              >
                <Link href="/contact">
                  Ask Questions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-clay-dark bg-transparent"
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
