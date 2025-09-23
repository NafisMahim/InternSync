"use client"

export default function TractionSection() {
  return (
    <section id="traction" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Our <span className="font-medium italic">Traction</span>
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Proven results and strong early indicators of product-market fit.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 text-center transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 cursor-pointer rounded-lg">
          <div className="p-8">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-500">
              $3,300
            </div>
            <div className="text-white/70 mb-2">Revenue in 2.5 months</div>
            <div className="text-sm text-white/50">Pre-launch validation</div>
          </div>
        </div>

        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 text-center transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 cursor-pointer rounded-lg">
          <div className="p-8">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-500">
              15-20%
            </div>
            <div className="text-white/70 mb-2">Conversion rate</div>
            <div className="text-sm text-white/50">From early outreach</div>
          </div>
        </div>

        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 text-center transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 cursor-pointer rounded-lg">
          <div className="p-8">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-500">
              9,000
            </div>
            <div className="text-white/70 mb-2">Students reached</div>
            <div className="text-sm text-white/50">Through partnerships</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 cursor-pointer rounded-lg">
          <div className="p-8">
            <h3 className="text-2xl font-medium text-white mb-6">Revenue Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Business subscriptions</span>
                <span className="text-white font-medium">$2,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Student placement fees</span>
                <span className="text-white font-medium">$1,300</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Total Revenue</span>
                  <span className="text-white font-bold text-xl group-hover:text-green-300 transition-colors duration-500">
                    $3,300
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 cursor-pointer rounded-lg">
          <div className="p-8">
            <h3 className="text-2xl font-medium text-white mb-6">2025 Projections</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Projected revenue</span>
                <span className="text-white font-medium">$110,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Gross margin</span>
                <span className="text-white font-medium">~80%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Net profit</span>
                <span className="text-white font-medium">$64,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
