"use client"

export default function FundingSection() {
  return (
    <section id="funding" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          <span className="font-medium italic">Funding</span> Ask
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          We're raising $400,000 pre-seed to accelerate growth and scale our platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 border border-white/20 text-center">
          <div className="text-5xl font-bold text-white mb-4">$400K</div>
          <div className="text-xl text-white/80 mb-2">Pre-seed funding</div>
          <div className="text-white/60">$2M safe cap</div>
          <div className="text-white/60 mt-2">10-12 month runway</div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-white mb-6">Fund Allocation</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/70">Product engineering</span>
              <span className="text-white font-medium">40%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Growth and marketing</span>
              <span className="text-white font-medium">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Partnership/sales</span>
              <span className="text-white font-medium">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Operations/legal</span>
              <span className="text-white font-medium">10%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center">
        <h3 className="text-2xl font-medium text-white mb-6">Ready to Join Us?</h3>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          We're currently in talks with 10+ investors and applying to Y Combinator. Join us in bridging ambition for the
          next generation.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/nafismahim"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer"
          >
            Contact Nafis Mahim
          </a>
          <a
            href="https://www.linkedin.com/in/kancharlashourya/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
          >
            Contact Shourya Kancharla
          </a>
        </div>
      </div>
    </section>
  )
}
