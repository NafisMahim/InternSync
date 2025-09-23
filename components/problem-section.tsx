"use client"

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          The <span className="font-medium italic">Problem</span> We're Solving
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          High schoolers face an overwhelming landscape when preparing for college, with opportunities scattered across
          dozens of platforms and no unified way to find what actually matters.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 cursor-pointer rounded-lg">
            <div className="p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Students Are Locked Out</h3>
              <p className="text-white/70 leading-relaxed">
                Platforms like LinkedIn, Indeed, and ZipRecruiter exclude under-18s. Students without family connections
                are locked out of meaningful opportunities.
              </p>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 cursor-pointer rounded-lg">
            <div className="p-8">
              <h3 className="text-2xl font-medium text-white mb-4">Businesses Struggle Too</h3>
              <p className="text-white/70 leading-relaxed">
                Small businesses need affordable, motivated talent but have no centralized way to find or manage
                interns.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:border-white/40 cursor-pointer rounded-lg">
            <div className="p-12">
              <div className="text-6xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-500">
                15.2M
              </div>
              <div className="text-xl text-white/80 mb-2">High schoolers</div>
              <div className="text-white/60">miss out on internships every year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
