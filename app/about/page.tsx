import Image from "next/image"
import type { Metadata } from "next"
import { Award, CheckCircle, Users, Clock, Mail, Phone } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GO Cleaner, our mission, vision, and commitment to providing high-quality kitchen chimneys with innovative features.",
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-in-left">
            <div className="max-w-3xl">
              <h1 className="mb-6">About GO Cleaner</h1>
              <p className="text-lg md:text-xl">
                We are dedicated to creating stylish kitchen chimneys that combine innovative technology with elegant
                design to keep your kitchen smoke-free.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="slide-in-left">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                GO Cleaner was founded with a simple mission: to revolutionize kitchen ventilation systems and make
                cooking a more enjoyable experience for everyone.
              </p>
              <p className="mb-4 text-gray-700">
                Our journey began when our founder, a passionate chef, experienced firsthand the challenges of
                traditional kitchen ventilation systems. Frustrated with the noise, inefficiency, and difficult
                maintenance of conventional chimneys, he set out to create something better.
              </p>
              <p className="text-gray-700">
                Today, GO Cleaner stands as a testament to innovation and quality in the kitchen appliance industry.
                We've grown from a small startup to a trusted brand, serving thousands of households across the country
                with our premium kitchen chimneys.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-in-right">
            <div className="relative h-[400px]">
              <Image
                src="/about-us.svg"
                alt="GO Cleaner Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CEO Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">Leadership</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the visionary behind GO Cleaner who leads our company with passion and innovation.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-[300px] md:h-full">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Milan Limbasiya - CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold mb-2">Milan Limbasiya</h3>
                    <p className="text-primary font-medium mb-4">Founder & Chief Executive Officer</p>

                    <p className="text-gray-700 mb-6">
                      With over 20 years of experience in the kitchen appliance industry, Milan Limbasiya founded GO
                      Cleaner with a vision to transform kitchen ventilation. His passion for innovation and commitment
                      to quality has driven the company to become a leading manufacturer of premium kitchen chimneys in
                      India.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Under his leadership, GO Cleaner has pioneered several innovations including filter-less design,
                      auto-clean technology, and motion sensor controls that have set new standards in the industry.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Mail size={18} className="text-primary" />
                        <span>milan@gocleaner.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone size={18} className="text-primary" />
                        <span>+91 82000 66085</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At GO Cleaner, our values guide everything we do, from product design to customer service.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover-float hover-glow">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality, using only the finest materials and components in our products.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover-float hover-glow">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to bring cutting-edge technology and features to our kitchen chimneys.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover-float hover-glow">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do, and their satisfaction is our top priority.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={400}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover-float hover-glow">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  We stand behind our products with a lifetime warranty, ensuring long-term reliability.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-700 mb-8">
                At GO Cleaner, we are committed to creating products that not only solve practical problems but also
                enhance the aesthetic appeal of your kitchen. Our commitment extends beyond just selling products – we
                aim to transform your cooking experience.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg text-left hover-float hover-glow">
                  <h3 className="text-xl font-bold mb-3">Environmental Responsibility</h3>
                  <p className="text-gray-600">
                    We are committed to reducing our environmental footprint through sustainable manufacturing practices
                    and energy-efficient products.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg text-left hover-float hover-glow">
                  <h3 className="text-xl font-bold mb-3">Customer Support</h3>
                  <p className="text-gray-600">
                    Our dedicated customer support team is always ready to assist you with any queries or concerns about
                    our products.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Facts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">Company Facts</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                GO Cleaner has grown steadily since our founding, reaching significant milestones along the way.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-4 gap-8">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover-float hover-glow">
                <div className="text-4xl font-bold text-primary mb-2">2010</div>
                <p className="text-gray-700">Year Founded</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover-float hover-glow">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-700">Team Members</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover-float hover-glow">
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-gray-700">Happy Customers</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={400}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover-float hover-glow">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-gray-700">Dealer Network</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}

