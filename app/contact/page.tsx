 


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ClayHouse Pottery. Visit us at Market Faire, contact Anika for custom orders, or schedule a studio visit. Located in Ripon, CA.',
  keywords: ['contact ClayHouse Pottery', 'pottery studio visit', 'custom pottery orders', 'Market Faire', 'Ripon CA pottery'],
  openGraph: {
    title: 'Contact Us | ClayHouse Pottery',
    description: 'Get in touch with ClayHouse Pottery. Visit us at Market Faire or contact Anika for custom orders.',
    images: ['/images/anika-at-pottery-wheel.jpg'],
  },
}


import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Clock, Mail, Phone, MessageCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clay-50 to-clay-100">
      <Navigation />

      <div className="pt-20 pb-8 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clay-dark mb-4 sm:mb-6">Get In Touch</h1>
            <p className="text-lg sm:text-xl text-clay-primary max-w-3xl mx-auto px-4 sm:px-0">
              I'd love to hear from you! Whether you have questions about my pottery, want to inquire about purchasing,
              or just want to chat about clay.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start sm:items-center gap-3 text-clay-dark text-lg sm:text-xl">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-clay-primary flex-shrink-0 mt-1 sm:mt-0" />
                    <span className="leading-tight">Visit Me at My Next Market</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-clay-primary text-sm sm:text-base leading-relaxed">
                    The best way to see my work is in person! I will have a booth at the local Market Faire where you
                    can touch, feel, and truly appreciate the craftsmanship of each piece.
                  </p>
                  <div className="flex items-start gap-3 text-clay-primary text-sm sm:text-base">
                    <Calendar className="h-4 w-4 text-clay-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">First Saturday in November: 9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-start gap-3 text-clay-primary text-sm sm:text-base">
                    <MapPin className="h-4 w-4 text-clay-primary flex-shrink-0 mt-0.5" />
                    <span>Enserink House, 21420 S Olive Ave. Ripon</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-clay-dark text-lg sm:text-xl">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-clay-primary flex-shrink-0" />
                    Studio Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-clay-primary text-sm sm:text-base leading-relaxed">
                    During summer months, I spend most of my time in the ClayHouse studio, either creating new pieces or
                    teaching pottery classes.
                  </p>
                  <div className="space-y-2 text-clay-primary text-sm sm:text-base">
                    <div>Summer Classes: BOOKED</div>
                    <div>Studio Visits: I'd love to show you my studio. Please contact ahead :)</div>
                    <div>Custom Orders: 6-8 weeks lead time</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-clay-light to-clay-100 border-clay-200">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-clay-dark text-lg sm:text-xl">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-clay-primary flex-shrink-0" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 text-clay-primary text-sm sm:text-base">
                    <Mail className="h-4 w-4 text-clay-primary flex-shrink-0 mt-0.5" />
                    <span className="break-all sm:break-normal">aschoolland@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-clay-primary text-sm sm:text-base">
                    <Phone className="h-4 w-4 text-clay-primary flex-shrink-0" />
                    <span>(209) 573-0373</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/80 border-clay-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-clay-dark text-lg sm:text-xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-clay-dark text-sm sm:text-base">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="border-clay-200 focus:border-clay-400 h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-clay-dark text-sm sm:text-base">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="border-clay-200 focus:border-clay-400 h-10 sm:h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-clay-dark text-sm sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-clay-200 focus:border-clay-400 h-10 sm:h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-clay-dark text-sm sm:text-base">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-clay-200 focus:border-clay-400 h-10 sm:h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-clay-dark text-sm sm:text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your pottery interests, custom requests, or just say hello!"
                      rows={4}
                      className="border-clay-200 focus:border-clay-400 min-h-[100px] sm:min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-clay-primary hover:bg-clay-dark text-white h-11 sm:h-12 text-sm sm:text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-clay-light to-clay-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-clay-dark mb-3 sm:mb-4">Custom Orders Welcome!</h3>
            <p className="text-clay-primary max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2 sm:px-0">
              Looking for something specific? I love creating custom pieces! Whether it's a special gift, a set for your dining room, or a unique piece for your home, let's work together to bring your vision to life. Custom orders typically take 6-8 weeks and require a 50% deposit.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
