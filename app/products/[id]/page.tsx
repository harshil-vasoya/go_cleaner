import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Check, Award, ArrowLeft } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

// Product data
const products = {
  "go-prime": {
    name: "GO Prime",
    image: "/product_1.svg",
    description:
      "The GO Prime is our flagship model, combining elegant design with powerful performance. Its sleek black finish complements any modern kitchen while providing exceptional ventilation.",
    specs: {
      finish: "BLACK FINISH",
      suction: "1500 m³/h. Size: 900 mm / 600 mm",
      control: "Motion Sensor with Touch Control",
      filter: "Filter Less with Auto Clean",
      motorType: "Copper wire Motor (Sealed Pack)",
      lamp: "2 x 1.5 W LED LIGHT",
      motorPower: "180 W",
      noiseLevel: "L58 db(a)",
    },
    features: [
      "Touch-free operation with motion sensors",
      "Filter-less design for maximum suction efficiency",
      "Auto-clean technology for easy maintenance",
      "Energy-efficient LED lighting",
      "100% copper winding motors for durability",
      "Sleek black finish that complements any kitchen design",
    ],
  },
  "go-smart": {
    name: "GO Smart",
    image: "/product_3.svg",
    description:
      "The GO Smart combines intelligent features with powerful performance. With its enhanced LED lighting and robust motor, it provides superior ventilation while adding a touch of sophistication to your kitchen.",
    specs: {
      finish: "BLACK FINISH",
      suction: "1500 m³/h. Size: 900 mm / 600 mm",
      control: "Motion Sensor with Touch Control",
      filter: "Filter Less with Auto Clean",
      motorType: "Copper wire Motor (Sealed Pack)",
      lamp: '20" POWER FULL LED LIGHT',
      motorPower: "220 W",
      noiseLevel: "L58 db(a)",
    },
    features: [
      'Enhanced 20" powerful LED lighting',
      "Higher motor power for consistent performance",
      "Touch-free operation with motion sensors",
      "Filter-less design for maximum suction efficiency",
      "Auto-clean technology for easy maintenance",
      "100% copper winding motors for durability",
    ],
  },
  "go-curved": {
    name: "GO Curved",
    image: "/product_3.svg",
    description:
      "The GO Curved features a distinctive curved glass design that adds a modern aesthetic to your kitchen. Its combination of black coating and toughened glass creates a stunning visual appeal while delivering powerful ventilation.",
    specs: {
      finish: "Black Coating + Toughened Glass",
      suction: "1500 m³/h. Size: 900 mm",
      control: "Motion Sensor with Touch Control",
      filter: "Filter Less with Auto Clean",
      motorType: "Copper wire Motor (Sealed Pack)",
      lamp: "1 x 3 W LED",
      motorPower: "220 W",
      noiseLevel: "L65 db(a)",
    },
    features: [
      "Elegant curved glass design",
      "Toughened glass for durability and easy cleaning",
      "Touch-free operation with motion sensors",
      "Filter-less design for maximum suction efficiency",
      "Auto-clean technology for easy maintenance",
      "100% copper winding motors for durability",
    ],
  },
  "go-black-platinum": {
    name: "GO Black Platinum",
    image: "/product_2.svg",
    description:
      "The GO Black Platinum offers a premium look with its black coating and toughened glass construction. It combines sophisticated aesthetics with powerful performance to enhance your kitchen experience.",
    specs: {
      finish: "BLACK Coating + Toughened Glass",
      suction: "1500 m³/h. Size: 900 mm",
      control: "Motion Sensor with Touch Control",
      filter: "Filter Less with Auto Clean",
      motorType: "Copper wire Motor (Sealed Pack)",
      lamp: "1 x 3 W LED",
      motorPower: "220 W",
      noiseLevel: "L65 db(a)",
    },
    features: [
      "Premium black platinum finish",
      "Toughened glass for durability and easy cleaning",
      "Touch-free operation with motion sensors",
      "Filter-less design for maximum suction efficiency",
      "Auto-clean technology for easy maintenance",
      "100% copper winding motors for durability",
    ],
  },
  "go-galaxy-edge": {
    name: "GO Galaxy Edge",
    image: "/product_3.svg",
    description:
      "The GO Galaxy Edge features a cutting-edge design with enhanced LED lighting that creates a stunning visual effect in your kitchen. Its powerful motor ensures efficient ventilation for a smoke-free cooking experience.",
    specs: {
      finish: "BLACK FINISH",
      suction: "1500 m³/h. Size: 900 mm",
      control: "Motion Sensor with Touch Control",
      filter: "Filter Less with Auto Clean",
      motorType: "Copper wire Motor (Sealed Pack)",
      lamp: '20" POWER FULL LED LIGHT',
      motorPower: "220 W",
      noiseLevel: "L58 db(a)",
    },
    features: [
      "Distinctive edge design for modern kitchens",
      'Enhanced 20" powerful LED lighting',
      "Touch-free operation with motion sensors",
      "Filter-less design for maximum suction efficiency",
      "Auto-clean technology for easy maintenance",
      "100% copper winding motors for durability",
    ],
  },
  "go-3d": {
    name: "GO 3D",
    image: "/product_2.svg",
    description:
      "The GO 3D is our most advanced model, featuring voice control and three-way suction for unparalleled performance. With its superior suction capacity and innovative features, it represents the future of kitchen ventilation.",
    specs: {
      finish: "BLACK FINISH",
      suction: "2200 m³/h. Size: 900 mm",
      control: "Motion Sensor with Touch Control & Voice Control",
      filter: "Filter Less with Auto Clean & Three Way Suction",
      motorType: "Copper wire Motor (Sealed Pack)",
      lamp: '9" POWER FULL LED LIGHT',
      motorPower: "220 W",
      noiseLevel: "L58 db(a)",
    },
    features: [
      "Voice control for hands-free operation",
      "Three-way suction for maximum efficiency",
      "Superior 2200 m³/h suction capacity",
      "Touch-free operation with motion sensors",
      "Filter-less design for maximum suction efficiency",
      "Auto-clean technology for easy maintenance",
      "100% copper winding motors for durability",
    ],
  },
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <>
      {/* Product Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-in">
            <Link
              href="/products"
              className="flex items-center gap-2 text-primary mb-8 hover:underline transition-all duration-300"
            >
              <ArrowLeft size={16} />
              <span>Back to All Products</span>
            </Link>
          </AnimateOnScroll>

          <div className="relative flex flex-col md:flex-row gap-12">
            {/* Left column - Image (sticky) */}
            <div className="md:w-1/2 md:sticky md:top-24 md:self-start md:h-[calc(100vh-150px)]">
              <AnimateOnScroll animation="slide-in-left">
                <div className="relative h-[400px] md:h-[500px] w-full">
                  <Image
                    src={product.image || "/placeholder.svg?height=500&width=500"}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right column - Content (scrollable) */}
            <div className="md:w-1/2">
              <AnimateOnScroll animation="slide-in-right">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                  <p className="text-lg text-gray-700 mb-6">{product.description}</p>

                  <div className="flex items-center gap-2 bg-primary bg-opacity-10 p-3 rounded-lg inline-block mb-6 hover-float">
                    <Award className="text-primary" size={24} />
                    <span className="font-bold text-primary">LIFETIME WARRANTY</span>
                  </div>

                  <div className="grid gap-6 mb-8">
                    <h2 className="text-xl font-bold">Specifications</h2>
                    <div className="grid gap-3">
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Finish:</span>
                        <span>{product.specs.finish}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Suction:</span>
                        <span>{product.specs.suction}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Control:</span>
                        <span>{product.specs.control}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Filter:</span>
                        <span>{product.specs.filter}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Motor Type:</span>
                        <span>{product.specs.motorType}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Lamp:</span>
                        <span>{product.specs.lamp}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Motor Power:</span>
                        <span>{product.specs.motorPower}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2">
                        <span className="font-semibold">Noise Level:</span>
                        <span>{product.specs.noiseLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 mb-8">
                    <h2 className="text-xl font-bold">Key Features</h2>
                    <ul className="grid gap-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link href="/contact" className="btn-primary">
                      Inquire Now
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Request Demo
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Maintenance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll animation="slide-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Installation & Maintenance</h2>
            </AnimateOnScroll>

            <div className="grid gap-8">
              <AnimateOnScroll animation="slide-up" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-float hover-glow">
                  <h3 className="text-xl font-bold mb-3">Easy Installation</h3>
                  <p className="text-gray-700 mb-4">
                    The {product.name} is designed for easy installation. Our professional installation team ensures
                    proper setup for optimal performance. Standard installation is included with your purchase.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-start gap-2">
                      <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Professional installation by certified technicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Proper ducting setup for maximum efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Testing and demonstration after installation</span>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm hover-float hover-glow">
                  <h3 className="text-xl font-bold mb-3">Minimal Maintenance</h3>
                  <p className="text-gray-700 mb-4">
                    Thanks to its filter-less design and auto-clean technology, the {product.name} requires minimal
                    maintenance compared to traditional chimneys.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-start gap-2">
                      <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Auto-clean function removes grease and residue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>No filters to clean or replace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Simple wipe-down of exterior surfaces</span>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">You May Also Like</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(products)
              .filter(([id]) => id !== params.id)
              .slice(0, 3)
              .map(([id, relatedProduct], index) => (
                <AnimateOnScroll key={id} animation="slide-up" delay={(index + 1) * 100}>
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover-grow hover-glow">
                    <div className="relative h-64">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg?height=300&width=300"}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                      <Link href={`/products/${id}`} className="text-primary font-medium hover:underline">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
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
              Contact us today to learn more about the {product.name} and how it can enhance your cooking experience.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us Now
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

