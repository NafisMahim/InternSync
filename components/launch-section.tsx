"use client"

import CountdownTimer from "./countdown-timer"
import EmailSignup from "./email-signup"

export default function LaunchSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Launching Soon</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Be the first to experience the future of internship matching. Get notified when we launch.
        </p>

        <div className="mb-16">
          <CountdownTimer />
        </div>

        <div className="mb-8">
          <EmailSignup />
        </div>

        <p className="text-sm text-gray-400">Join thousands of students and companies already waiting for launch</p>
      </div>
    </section>
  )
}
