import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <AnimateOnScroll animation="slide-in-left">
            <div className="space-y-4">
              <div className="relative h-16 w-52 bg-white rounded-md p-3 hover-float">
                <Image src="/logo.svg" alt="GO Cleaner Logo" fill className="object-contain" />
              </div>
              <p className="text-sm">GO Cleaner</p>
              <p className="text-sm">
                GO Cleaner - Stylish kitchen chimneys created with perfection to keep your kitchen smoke free.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Quick Links */}
          <AnimateOnScroll animation="slide-in-left" delay={100}>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Products */}
          <AnimateOnScroll animation="slide-in-left" delay={200}>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Our Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products/go-smart"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    GO Smart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/go-curved"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    GO Curved
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/go-black-platinum"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    GO Black Platinum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/go-galaxy-edge"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    GO Galaxy Edge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/go-3d"
                    className="text-sm hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-2 group-hover:mr-1 transition-all duration-300"></span>
                    GO 3D
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll animation="slide-in-left" delay={300}>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 hover-float">
                  <Phone size={16} />
                  <span className="text-sm">+91 82000 66085</span>
                </li>
                <li className="flex items-center gap-2 hover-float">
                  <Mail size={16} />
                  <span className="text-sm">gocleanerchimney@gmail.com</span>
                </li>
                <li className="flex items-start gap-2 hover-float">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">THE CHIMNEY SHOPEE TAGORE ROAD GODOWN ROAD KRISHNA COMPLEX CORNER. RAJKOT</span>
                </li>
              </ul>
              <div className="flex space-x-4 pt-2">
                {/* <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors duration-300 transform hover:scale-110"
                >
                  <Facebook size={20} />
                </a> */}
               <a href="https://www.instagram.com/jkm_hardware_hub?igsh=MTgxcTg4dmlkajQ1dA%3D%3D" target="_blank" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              {/* <Instagram size={16} /> */}
            </a>
                {/* <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-primary transition-colors duration-300 transform hover:scale-110"
                >
                  <Twitter size={20} />
                </a> */}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="scale-in" delay={400}>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} GO Cleaner. All rights reserved.</p>
            <p className="mt-2">
              Developed by{" "}
              <a
                href="https://topgrowth.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TopGrowth IT Solution
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}

