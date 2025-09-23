"use client"

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Our <span className="font-medium italic">Solution</span>
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          InternSync is LinkedIn + Indeed + Tinder-style matching... for HIGH SCHOOL STUDENTS.
        </p>
      </div>

      <div className="space-y-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-medium text-white mb-6">The Complete Platform</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white/90">Comprehensive Database</h4>
              <p className="text-white/70 leading-relaxed">
                Access to 6,000+ opportunities including scholarships, internships, competitions, and volunteering
                positions. Unlike competitors like Snow.day, Ultra, and Capplica, we offer significantly more listings
                with real-time updates.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white/90">AI-Powered Features</h4>
              <p className="text-white/70 leading-relaxed">
                Our platform offers personalized roadmaps, career analysis, college stats comparison, and essay feedback
                by cross-analyzing your work with hundreds of successful Ivy League and T20 student essays.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 transition-all duration-300 hover:border-white/20">
          <h3 className="text-2xl font-medium text-white mb-6">Built by Students, for Students</h3>
          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              We understand the stress and pressure many teens face because we've experienced it ourselves. Our platform
              provides authentic relatability versus corporate-driven apps, offering guidance and resources without
              paying for $10k college counselors or outside assistance.
            </p>
            <p className="text-white/70 leading-relaxed">
              With 30+ developers experienced in backend and frontend design, marketing, and business tactics, we cover
              a wide range of operations. We've already partnered with 5 organizations and are in talks for 2 additional
              partnerships.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-lg p-8 transition-all duration-300 hover:border-white/30">
          <h3 className="text-2xl font-medium text-white mb-6 text-center">Why InternSync Works</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15-20%</div>
              <p className="text-white/70">Conversion rate from early outreach, projected to hold with scale</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8,000+</div>
              <p className="text-white/70">Students reached directly through our partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
