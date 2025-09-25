"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EmailSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("Thanks for signing up! We'll keep you updated.")
        setEmail("")
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-black hover:bg-gray-200 font-semibold px-8"
        >
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
      {message && (
        <p className={`mt-3 text-center text-sm ${message.includes("Thanks") ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  )
}
