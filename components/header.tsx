"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Check if the link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>gocleanerchimney@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" />
              <span>THE CHIMNEY SHOPEE TAGORE ROAD GODOWN ROAD KRISHNA COMPLEX CORNER. RAJKOT</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <Facebook size={16} />
            </a> */}
            <a href="https://www.instagram.com/jkm_hardware_hub?igsh=MTgxcTg4dmlkajQ1dA%3D%3D" target="_blank" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <Instagram size={16} />
            </a>
            {/* <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <Twitter size={16} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg py-2" : "shadow-md py-4"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center relative z-10">
            <div className="relative h-14 w-48 transition-transform duration-300 hover:scale-105">
              <Image src="/logo.svg" alt="GO Cleaner Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 font-medium rounded-md transition-all duration-300 relative ${
                  isActive("/") ? "text-primary bg-teal-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">Home</span>
                {isActive("/") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-primary"></span>
                )}
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 font-medium rounded-md transition-all duration-300 relative ${
                  isActive("/about") ? "text-primary bg-teal-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">About</span>
                {isActive("/about") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-primary"></span>
                )}
              </Link>

              <Link
                href="/products"
                className={`px-4 py-2 font-medium rounded-md transition-all duration-300 relative ${
                  isActive("/products")
                    ? "text-primary bg-teal-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">Products</span>
                {isActive("/products") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-primary"></span>
                )}
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 font-medium rounded-md transition-all duration-300 relative ${
                  isActive("/contact") ? "text-primary bg-teal-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">Contact</span>
                {isActive("/contact") && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-primary"></span>
                )}
              </Link>
            </nav>

            {/* Call to Action Button */}
            <a
              href="tel:+918200066085"
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-md font-medium hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone size={16} />
              <span>+91 82000 66085</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white absolute left-0 right-0 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container-custom py-4 flex flex-col space-y-3">
            <Link
              href="/"
              className={`font-medium px-4 py-3 rounded-md transition-colors duration-300 flex items-center ${
                isActive("/") ? "text-primary bg-teal-50" : "hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="ml-2">Home</span>
            </Link>
            <Link
              href="/about"
              className={`font-medium px-4 py-3 rounded-md transition-colors duration-300 flex items-center ${
                isActive("/about") ? "text-primary bg-teal-50" : "hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="ml-2">About</span>
            </Link>
            <Link
              href="/products"
              className={`font-medium px-4 py-3 rounded-md transition-colors duration-300 flex items-center ${
                isActive("/products") ? "text-primary bg-teal-50" : "hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="ml-2">Products</span>
            </Link>
            <Link
              href="/contact"
              className={`font-medium px-4 py-3 rounded-md transition-colors duration-300 flex items-center ${
                isActive("/contact") ? "text-primary bg-teal-50" : "hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="ml-2">Contact</span>
            </Link>

            <div className="pt-2 border-t border-gray-100">
              <a
                href="tel:+918200066085"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-3 rounded-md font-medium hover:opacity-90 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} />
                <span>Call Us: +91 82000 66085</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6 pt-2">
              {/* <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a> */}
              <a  href="https://www.instagram.com/jkm_hardware_hub?igsh=MTgxcTg4dmlkajQ1dA%3D%3D" target="_blank" aria-label="Instagram" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

