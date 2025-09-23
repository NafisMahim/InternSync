"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import AppPreviewSection from "@/components/app-preview-section"
import FeaturesSection from "@/components/features-section"
import PlatformSection from "@/components/platform-section"
import ContactSection from "@/components/contact-section"
import ShaderBackground from "@/components/shader-background"
import FloatingParticles from "@/components/floating-particles"

export default function InternSyncLanding() {
  return (
    <div className="bg-black min-h-screen">
      <FloatingParticles />

      <ShaderBackground>
        <Header />
        <HeroSection />
      </ShaderBackground>

      <div className="bg-gradient-to-b from-black via-gray-900 to-black">
        <ProblemSection />
        <SolutionSection />
        <AppPreviewSection />
        <FeaturesSection />
        <PlatformSection />
        <ContactSection />
      </div>
    </div>
  )
}
