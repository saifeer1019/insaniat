import React from 'react'

export default function page() {
  return (
    <div><section className="w-full py-12 md:py-24 lg:py-32 bg-[#EDEDEC]">
    <div className="container px-4 md:px-6 mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-[#58221C]">About Us</h2>
      <p className="mx-auto max-w-[700px] text-[#58221C] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mt-4">
        Sundarbans Explorer is your gateway to the mystical mangrove forests. We specialize in curating
        unforgettable 7-10 day journeys through the Sundarbans, offering a perfect blend of adventure, nature, and
        comfort.
      </p>
      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Expert Guides",
            content: "Our team of experienced local guides ensures your safety and enriches your journey with their deep knowledge of the Sundarbans ecosystem.",
          },
          {
            title: "Eco-Friendly Tours",
            content: "We are committed to sustainable tourism, minimizing our environmental impact and supporting local conservation efforts.",
          },
          {
            title: "Unforgettable Experiences",
            content: "From wildlife spotting to cultural interactions, we craft unique experiences that will stay with you long after your journey ends.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white border border-[#016748] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#016748] mb-2">{item.title}</h3>
            <p className="text-[#58221C]">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </section></div>
  )
}
