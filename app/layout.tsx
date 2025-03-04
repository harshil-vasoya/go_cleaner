import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "GO Cleaner - Stylish Kitchen Chimneys",
    template: "%s | GO Cleaner",
  },
  description:
    "Premium kitchen chimneys created with perfection to keep your kitchen smoke free. Featuring touch-free cleaning, filter-less design for great suction, and 100% copper winding motors.",
  keywords: ["kitchen chimney", "GO cleaner", "filter-less chimney", "auto clean chimney", "touch control chimney"],
  authors: [{ name: "GO Cleaner" }],
  creator: "GO Cleaner",
  publisher: "GO Cleaner",
  formatDetection: {
    email: false,
    telephone: true,
    address: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'