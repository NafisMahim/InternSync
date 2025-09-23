"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AppPreviewSection() {
  return (
    <section className="relative py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                Meet
                <br />
                <span className="font-medium">InternSync</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                The revolutionary platform that connects high school students with meaningful internships, scholarships,
                and career opportunities. Built by students, for students.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80">6,000+ opportunities available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80">AI-powered matching system</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80">Swipe-based interface</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/60 leading-relaxed">
                Coming soon to the App Store and Google Play Store
                <br />
                <span className="text-white/40">In collaboration with Aether Enterprises (AutoNova)</span>
              </p>
            </div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl scale-110 rounded-full"></div>

              <div className="relative z-10">
                <Image
                  src="/phone-mockup.png"
                  alt="InternSync mobile app preview"
                  width={600}
                  height={900}
                  className="w-full max-w-lg mx-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
