"use client"

import PulsingCircle from "@/components/pulsing-circle"

export default function HeroSection() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">
            Bridging ambition for the next generation
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-6">
          <span className="font-medium italic">Only 2%</span> of high schoolers
          <br />
          <span className="font-light tracking-tight text-white">complete internships.</span>
          <br />
          <span className="text-3xl md:text-4xl font-light text-white/80 mt-2 block">
            That's 15.2 million who don't.
          </span>
        </h1>

        <p className="text-sm font-light text-white/70 mb-6 leading-relaxed max-w-lg">
          InternSync is the first platform designed by high schoolers, for high schoolers. We connect ambitious students
          with meaningful opportunities while helping businesses find motivated talent.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            View Pitch Deck
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Join InternSync
          </button>
        </div>
      </div>
      <PulsingCircle />
    </main>
  )
}
