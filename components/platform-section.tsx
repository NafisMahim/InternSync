"use client"

export default function PlatformSection() {
  return (
    <section id="platform" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src="/one-platform.png"
              alt="InternSync application success screen showing seamless application process"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              One platform. <span className="font-medium italic">All industries.</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-white/90 mb-8">
              No connections? <span className="font-medium italic">No problem.</span>
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-white/70 leading-relaxed">
              Whether you're interested in tech, healthcare, finance, or creative industries, InternSync connects you
              with opportunities across every sector - no networking required.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Our streamlined application process makes it easy to apply to multiple opportunities with just a few taps,
              tracking your progress every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
              <h4 className="text-lg font-medium text-white mb-3">Universal Access</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Access opportunities across all industries without needing existing connections or networks
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
              <h4 className="text-lg font-medium text-white mb-3">Seamless Applications</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Apply to multiple opportunities with our streamlined process and track all your applications in one
                place
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
