import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Check, Award, Wind, Zap } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Stylish Kitchen Chimneys | GO Cleaner",
  description:
    "Premium kitchen chimneys with touch-free cleaning, filter-less design for great suction, and 100% copper winding motors. Lifetime warranty included.",
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center section-padding">
          <div className="space-y-6 z-10">
            <AnimateOnScroll animation="slide-in-left" delay={100}>
              <h1>Stylish Kitchen Chimneys</h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-left" delay={200}>
              <p className="text-lg md:text-xl">Created with perfection to keep your kitchen smoke free.</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-left" delay={300}>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="text-primary-foreground" />
                  <span>Touch Free Cleaning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary-foreground" />
                  <span>Filter Less for Great Suction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary-foreground" />
                  <span>100% Copper Winding Motors</span>
                </li>
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-left" delay={400}>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-primary">
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-secondary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-left" delay={500}>
              <div className="flex items-center gap-2 bg-primary bg-opacity-20 p-3 rounded-lg inline-block">
                <Award className="text-primary-foreground" size={24} />
                <span className="font-bold">LIFETIME WARRANTY</span>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="slide-in-right">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="GO Cleaner Kitchen Chimney"
                fill
                className="object-contain"
                priority
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose GO Cleaner?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our kitchen chimneys are designed with cutting-edge technology to provide the best experience for your
                kitchen.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover-float hover-glow">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Wind className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Powerful Suction</h3>
                <p className="text-gray-600">
                  Up to 2200 m³/h suction capacity ensures your kitchen remains smoke and odor free even during heavy
                  cooking.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover-float hover-glow">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Touch & Motion Control</h3>
                <p className="text-gray-600">
                  Advanced touch and motion sensor controls for a seamless and hygienic cooking experience.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover-float hover-glow">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lifetime Warranty</h3>
                <p className="text-gray-600">
                  We stand behind our products with a lifetime warranty, ensuring your investment is protected for years
                  to come.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our range of premium kitchen chimneys designed to enhance your kitchen experience.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-grow hover-glow">
                <div className="relative h-64">
                  <Image
                    src="/product_1.svg"
                    alt="GO Prime Kitchen Chimney"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">GO Prime</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mb-4">
                    <li>• Black Finish</li>
                    <li>• 1500 m³/h Suction Capacity</li>
                    <li>• Motion Sensor with Touch Control</li>
                    <li>• Filter Less with Auto Clean</li>
                  </ul>
                  <Link href="/products/go-prime" className="text-primary font-medium hover:underline">
                    View Details →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Product 2 */}
            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-grow hover-glow">
                <div className="relative h-64">
                  <Image
                    src="/product_3.svg"
                    alt="GO Smart Kitchen Chimney"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">GO Smart</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mb-4">
                    <li>• Black Finish</li>
                    <li>• 1500 m³/h Suction Capacity</li>
                    <li>• Motion Sensor with Touch Control</li>
                    <li>• 20" Powerful LED Light</li>
                  </ul>
                  <Link href="/products/go-smart" className="text-primary font-medium hover:underline">
                    View Details →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Product 3 */}
            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-grow hover-glow">
                <div className="relative h-64">
                  <Image
                    src="/product_2.svg"
                    alt="GO 3D Kitchen Chimney"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">GO 3D</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mb-4">
                    <li>• Black Finish</li>
                    <li>• 2200 m³/h Suction Capacity</li>
                    <li>• Motion Sensor & Voice Control</li>
                    <li>• Three Way Suction</li>
                  </ul>
                  <Link href="/products/go-3d" className="text-primary font-medium hover:underline">
                    View Details →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="slide-up" delay={400}>
            <div className="text-center mt-10">
              <Link href="/products" className="btn-primary">
                View All Products
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our satisfied customers about their experience with GO Cleaner kitchen chimneys.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover-float hover-glow">
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The GO Prime chimney has transformed my kitchen experience. No more smoke and the auto-clean feature
                  is a game changer!"
                </p>
                <div className="font-medium">- Priya Sharma</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover-float hover-glow">
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The motion sensor control is so convenient, especially when my hands are messy while cooking.
                  Excellent product!"
                </p>
                <div className="font-medium">- Rajesh Patel</div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover-float hover-glow">
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The GO 3D with voice control is the future of kitchen appliances. The suction power is incredible and
                  it looks stunning!"
                </p>
                <div className="font-medium">- Amit Verma</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <AnimateOnScroll animation="scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={100}>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference with GO Cleaner kitchen chimneys. Powerful suction, innovative features, and
              lifetime warranty.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="bg-secondary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

