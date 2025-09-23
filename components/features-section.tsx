"use client"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Tailored to your <span className="font-medium italic">interests</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-white/90 mb-8">
              Built around your <span className="font-medium italic">goals</span>
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-white/70 leading-relaxed">
              InternSync's intelligent matching system learns your interests, career aspirations, and academic goals to
              deliver personalized opportunities that align with your unique path.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              From UX Design to Data Science, Cybersecurity to Healthcare - explore opportunities across every industry
              and field that matches your passion and ambitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
              <h4 className="text-lg font-medium text-white mb-3">Smart Matching</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                AI-powered algorithm that understands your preferences and suggests the most relevant opportunities
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
              <h4 className="text-lg font-medium text-white mb-3">Goal Tracking</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Set and track your career milestones with personalized roadmaps and progress insights
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="/tailored-interests.png"
              alt="InternSync app showing personalized interests and goals matching"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
