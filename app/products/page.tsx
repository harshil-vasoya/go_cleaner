import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import AnimateOnScroll from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore our range of premium kitchen chimneys including GO , GO Smart, GO Curved, GO Black Platinum, GO Galaxy Edge, and GO 3D models.",
}

// Product data
const products = [
  {
    id: "go-smart",
    name: "GO Smart",
    image: "/go_smart.svg",
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
  },
  {
    id: "go-curved",
    name: "GO Curved",
    image: "/go_curved.svg",
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
  },
  {
    id: "go-black-platinum",
    name: "GO Black Platinum",
    image: "/go_black_platinum.svg",
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
  },
  {
    id: "go-galaxy-edge",
    name: "GO Galaxy Edge",
    image: "/go_galaxy_edge.svg",
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
  },
  {
    id: "go-3d",
    name: "GO 3D",
    image: "/go_3d.jpg",
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
  },
]

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-in-left">
            <div className="max-w-3xl">
              <h1 className="mb-6">Our Products</h1>
              <p className="text-lg md:text-xl">
                Discover our range of premium kitchen chimneys designed with cutting-edge technology and elegant
                aesthetics.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12">
            {products.map((product, index) => (
              <AnimateOnScroll
                key={product.id}
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                delay={(index % 3) * 100}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center border-b pb-12 last:border-0">
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h2>
                    <div className="grid gap-3 mb-6">
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Finish:</span>
                        <span>{product.specs.finish}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Suction:</span>
                        <span>{product.specs.suction}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Control:</span>
                        <span>{product.specs.control}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Filter:</span>
                        <span>{product.specs.filter}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Motor Type:</span>
                        <span>{product.specs.motorType}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Lamp:</span>
                        <span>{product.specs.lamp}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Motor Power:</span>
                        <span>{product.specs.motorPower}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-2">
                        <span className="font-semibold">Noise Level:</span>
                        <span>{product.specs.noiseLevel}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Link href={`/products/${product.id}`} className="btn-primary">
                        View Details
                      </Link>
                      <Link href="/contact" className="btn-secondary">
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="mb-4">Features Comparison</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare our different models to find the perfect kitchen chimney for your needs.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Features</th>
                    {products.map((product) => (
                      <th key={product.id} className="p-4 text-center">
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-100 transition-colors duration-300">
                    <td className="p-4 font-medium bg-gray-100">Suction Capacity</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {product.specs.suction.split(".")[0]}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition-colors duration-300">
                    <td className="p-4 font-medium bg-gray-100">Control Type</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {product.id === "go-3d" ? "Touch & Voice" : "Touch"}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition-colors duration-300">
                    <td className="p-4 font-medium bg-gray-100">Auto Clean</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <span className="text-green-600">✓</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition-colors duration-300">
                    <td className="p-4 font-medium bg-gray-100">Filter Less</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <span className="text-green-600">✓</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition-colors duration-300">
                    <td className="p-4 font-medium bg-gray-100">Motor Power</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {product.specs.motorPower}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-100 transition-colors duration-300">
                    <td className="p-4 font-medium bg-gray-100">Three Way Suction</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {product.id === "go-3d" ? (
                          <span className="text-green-600">✓</span>
                        ) : (
                          <span className="text-red-600">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors duration-300">
                    <td className="p-4 font-medium bg-gray-100">Voice Control</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {product.id === "go-3d" ? (
                          <span className="text-green-600">✓</span>
                        ) : (
                          <span className="text-red-600">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <AnimateOnScroll animation="scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Decide Which Model Is Right For You?</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={100}>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our experts are ready to help you choose the perfect kitchen chimney based on your specific needs and
              kitchen layout.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get Expert Advice
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

