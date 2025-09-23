"use client"

import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Join Us?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          We're currently in talks with 10+ investors and applying to Y Combinator. Join us in bridging ambition for the
          next generation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/nafismahim/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full font-medium transition-all duration-200 text-base">
              Contact Nafis Mahim
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/kancharlashourya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-all duration-200 text-base bg-transparent"
            >
              Contact Shourya Kancharla
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
