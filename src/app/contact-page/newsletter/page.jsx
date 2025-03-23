"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-medium mb-3">Stay Updated</h3>
      <p className="text-gray-300 text-sm mb-4">
        Subscribe to our newsletter for the latest updates, tutorials, and exclusive offers.
      </p>

      {submitted ? (
        <div className="text-green-400 text-sm py-2">Thanks for subscribing! Check your email for confirmation.</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-800/50 border-gray-700 focus:border-[#00aaff] focus:ring-[#00aaff]/20"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-500 hover:bg-teal-400/80 text-white transition-all hover:shadow-[0_0_15px_rgba(0,170,255,0.5)]"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </Button>
        </form>
      )}
      <p className="text-xs text-gray-500 mt-2">We respect your privacy and will never share your information.</p>
    </div>
  )
}

