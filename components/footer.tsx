"use client"

import Link from "next/link"
import { Heart, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-clay-dark text-clay-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-clay-primary to-clay-dark rounded-full"></div>
              <span className="text-lg sm:text-xl font-bold">ClayHouse Pottery</span>
            </div>
            <div className="text-clay-100 leading-relaxed" contentEditable suppressContentEditableWarning={true}>
              Handcrafted pottery made with love in my ClayHouse studio. From PlayHouse to ClayHouse - every piece tells
              a story.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-clay-100 hover:text-white transition-colors py-1"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-clay-100 hover:text-white transition-colors py-1"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                About Anika
              </Link>
              <Link
                href="/gallery"
                className="block text-clay-100 hover:text-white transition-colors py-1"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block text-clay-100 hover:text-white transition-colors py-1"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Visit Me</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 text-clay-100">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Next Market - Homestead Market Faire - 21420 S Olive Avenue in Ripon - November 8, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-clay-100">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>aschoolland@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-clay-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-clay-100 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm">
            Made with <Heart className="h-4 w-4 text-red-400" /> by Anika Schoolland
            <span className="mx-2">•</span>ClayHouse Pottery - Est. 2020
          </p>
        </div>
      </div>
    </footer>
  )
}
