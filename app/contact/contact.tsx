"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"
import FAQAccordion from "@/components/faq-accordion"

// FAQ data
const faqItems = [
  {
    question: "How do I schedule a product demonstration?",
    answer:
      "You can schedule a product demonstration by filling out the contact form or calling our customer service number. Our team will arrange a convenient time for you.",
  },
  {
    question: "What is the warranty coverage?",
    answer:
      "All GO Cleaner kitchen chimneys come with a lifetime warranty on manufacturing defects. Please refer to the warranty card for detailed terms and conditions.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, we provide professional installation services for all our products. The installation is carried out by our certified technicians to ensure optimal performance.",
  },
  {
    question: "How often should I clean my kitchen chimney?",
    answer:
      "Thanks to our auto-clean technology, GO Cleaner chimneys require minimal maintenance. We recommend running the auto-clean function once every 2-3 weeks depending on your cooking frequency. The exterior can be wiped down as needed with a soft cloth.",
  },
  {
    question: "Can I get replacement parts for my chimney?",
    answer:
      "Yes, we provide genuine replacement parts for all our models. Contact our customer service team with your model number and the specific part you need, and we'll arrange for the replacement.",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    setErrorMessage("")

    try {
      // Send inquiry email to admin
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // Send confirmation email to user
        await fetch("/api/send-email-confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError(true)
        setErrorMessage(data.message || "Failed to send your message. Please try again.")
      }
    } catch (error) {
      setSubmitError(true)
      setErrorMessage("An unexpected error occurred. Please try again later.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-in-left">
            <div className="max-w-3xl">
              <h1 className="mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl">
                Have questions about our products? Need assistance with your purchase? Our team is here to help.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover-float hover-glow">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">Customer Support</p>
                <a
                  href="tel:+918200066085"
                  className="text-primary font-medium hover:underline transition-all duration-300"
                >
                  +91 82000 66085
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover-float hover-glow">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">For Inquiries</p>
                <a
                  href="mailto:gocleanerchimney@gmail.com"
                  className="text-primary font-medium hover:underline transition-all duration-300"
                >
                  gocleanerchimney@gmail.com
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover-float hover-glow">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Headquarters</p>
                <address className="not-italic text-primary">GO Cleaner, Industrial Area, India</address>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnScroll animation="slide-in-left">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 animate-fade-in">
                    Thank you for your message! We'll get back to you shortly. A confirmation email has been sent to
                    your email address.
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 animate-fade-in">
                    {errorMessage || "There was an error sending your message. Please try again."}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="phone" className="font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="subject" className="font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Installation">Installation</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Warranty">Warranty</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="message" className="font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message{" "}
                        <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Map or Additional Info */}
            <AnimateOnScroll animation="slide-in-right">
              <div>
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>

                <div className="bg-gray-50 p-6 rounded-lg mb-8 hover-float hover-glow">
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

                <FAQAccordion items={faqItems} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Dealers Section */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">Authorized Dealers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Visit our authorized dealers to experience GO Cleaner kitchen chimneys in person.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover-float hover-glow">
                <h3 className="text-xl font-bold mb-2">North Region</h3>
                <address className="not-italic text-gray-600 mb-4">
                  123 Main Street, Delhi
                  <br />
                  Phone: +91 98765 43210
                  <br />
                  Email: delhi@gocleaner.com
                </address>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover-float hover-glow">
                <h3 className="text-xl font-bold mb-2">West Region</h3>
                <address className="not-italic text-gray-600 mb-4">
                  456 Market Road, Mumbai
                  <br />
                  Phone: +91 98765 43211
                  <br />
                  Email: mumbai@gocleaner.com
                </address>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover-float hover-glow">
                <h3 className="text-xl font-bold mb-2">South Region</h3>
                <address className="not-italic text-gray-600 mb-4">
                  789 Park Avenue, Bangalore
                  <br />
                  Phone: +91 98765 43212
                  <br />
                  Email: bangalore@gocleaner.com
                </address>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section> */}
    </>
  )
}

