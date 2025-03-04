import Contact from "./contact"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GO Cleaner for inquiries about our kitchen chimneys, product demonstrations, installation services, or customer support. We're here to help you find the perfect chimney for your kitchen.",
  keywords: [
    "contact GO Cleaner",
    "kitchen chimney support",
    "chimney installation",
    "kitchen appliance inquiry",
    "GO Cleaner dealers",
  ],
  openGraph: {
    title: "Contact GO Cleaner",
    description: "Get in touch with our team for product inquiries, demonstrations, or support.",
    url: "https://gocleaner.com/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact GO Cleaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GO Cleaner",
    description: "Get in touch with our team for product inquiries, demonstrations, or support.",
    images: ["/twitter-contact.jpg"],
  },
  alternates: {
    canonical: "https://gocleaner.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Structured Data for Contact Page */}
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "GO Cleaner",
              telephone: "+918200066085",
              email: "info@gocleaner.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Industrial Area",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+918200066085",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
            },
          }),
        }}
      />

      <Contact />
    </>
  )
}

