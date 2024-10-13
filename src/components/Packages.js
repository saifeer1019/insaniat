import React from 'react'
import Image from 'next/image'
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"; // Import Badge component

export default function Packages() {
  return (
    <div className='my-16'>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-800">Our Packages</h2>
      <div className="px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Explorer Pack (5-10 people)",
            description: "Gather your tribe for an unforgettable adventure!",
            details: ["Sundarban Park, Hiron Point, Dublar Char, Sajnekhali", "10 days, 9 nights"],
            price: "9,500",
            discount: "5%",
            img: "/launch3.jpg"
          },
          {
            title: "Adventurer Pack (11-20 people)",
            description: "Experience the wild together with our biggest savings!",
            details: ["Sundarban Park, Hiron Point, Dublar Char, Sajnekhali, Karamjal", "10 days, 9 nights"],
            price: "9,000",
            discount: "10%",
            img: "/launch2.jpg"
          },
          {
            title: "Voyager Pack (21-30 people)",
            description: "Discover the Sundarbans with friends at a great price!",
            details: ["Sundarban Park, Hiron Point, Dublar Char, Sajnekhali, Karamjal, Pakhirala Island", "10 days, 9 nights"],
            price: "8,500",
            discount: "15%",
            img: "/launch1.jpg"
          }
        ].map((packageItem, index) => (
          <div key={index} className="bg-white border border-green-800 rounded-lg overflow-hidden shadow-md relative">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800">{packageItem.title}</h3>
              <p className="text-green-600 mt-2">{packageItem.description}</p>
            </div>
            <div className="relative">
              <Image
                src={packageItem.img}
                width={300}
                height={200}
                alt={`${packageItem.title} image`}
                className="rounded-lg object-cover w-full h-[200px]"
              />
           
              {/* Discount Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-600 text-white text-lg rounded-full px-4 py-2">
                  {packageItem.discount} discount
                </Badge>
              </div>
            </div>
            <div className="p-6">
            <span className="text-xl font-bold">Tk. {packageItem.price} per person </span> 
              <ul className="mt-4 space-y-2 text-green-800">
                {packageItem.details.map((detail, detailIndex) => (
                    
                  <li key={detailIndex} className="flex items-center">
                    {detailIndex === 0 ? (
                      <MapPinIcon className="mr-2 h-4 w-4 text-green-600" />
                    ) : (
                      <CalendarIcon className="mr-2 h-4 w-4 text-green-600" />
                    )}
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6">
              <Link href={`/booking/${packageItem.title.replace(/\s+/g, '-').toLowerCase()}`} passHref>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}