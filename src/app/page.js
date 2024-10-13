import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, MapPinIcon, Users, Compass, Camera, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Packages from "@/components/Packages"
export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
 
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <Image
            src="https://images.pexels.com/photos/1031798/pexels-photo-1031798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Scenic view of Sundarbans from a boat"
            layout="fill"
            objectFit="cover"
            className="z-0"
            style={{ objectPosition: 'left' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Insaniat Tourism</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Embark on an unforgettable journey through the world's largest mangrove forest
            </p>
            <Link href="/booking/explorer">
            <Button  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
              Book Your Adventure
            </Button>
            </Link>
          </div>
        </section>

        <Packages/>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Expert Guides", icon: <Compass className="h-12 w-12 text-green-600" /> },
                { title: "Small Groups", icon: <Users className="h-12 w-12 text-green-600" /> },
                { title: "Eco-Friendly", icon: <Leaf className="h-12 w-12 text-green-600" /> },
                { title: "Authentic Experience", icon: <MapPinIcon className="h-12 w-12 text-green-600" /> },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Sundarbans?</h2>
            <p className="text-xl mb-8">Book your tour today and embark on the adventure of a lifetime!</p>
            <Button className="bg-white text-green-800 hover:bg-green-100 text-lg px-8 py-3">
              Book Now
            </Button>
          </div>
        </section>
      </main>

    </div>
  )
}