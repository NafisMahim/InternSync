"use client"

export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Meet the <span className="font-medium italic">Founders</span>
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          Built by high schoolers who understand the struggle firsthand.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/30">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white/20">
              <img src="/nafis-mahim-profile.jpg" alt="Nafis Mahim" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Nafis Mahim</h3>
              <p className="text-white/70">Founder & Product Lead, AutoNova</p>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed mb-4">
            First-generation Bangladeshi-American student at Stuyvesant High School. Experienced in fintech, EdTech,
            startup strategy, and AI product development.
          </p>
          <blockquote className="text-white/80 italic border-l-2 border-white/30 pl-4">
            "As a first-generation student, I experienced the difficulties in trying to find a path to college without
            insider knowledge. I built AutoNova because I didn't want other students like me to be locked out."
          </blockquote>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-white/30">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white/20">
              <img src="/shourya-profile.png" alt="Shourya Kancharla" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white">Shourya Kancharla</h3>
              <p className="text-white/70">Founder of InternSync</p>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed mb-4">
            South Asian student and entrepreneur. Experienced in entrepreneurship, innovation, and community impact.
          </p>
          <blockquote className="text-white/80 italic border-l-2 border-white/30 pl-4">
            "I saw how challenging it was for high schoolers like me to find meaningful internships without the right
            connections. My goal is to level the playing field and make it fair."
          </blockquote>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:border-white/30">
          <h3 className="text-2xl font-medium text-white mb-4">Our Team</h3>
          <p className="text-white/70 text-lg">
            30+ developers experienced in backend and frontend design, marketing, and business tactics.
          </p>
        </div>
      </div>
    </section>
  )
}
