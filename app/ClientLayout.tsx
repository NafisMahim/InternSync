"use client"

import type React from "react"
import type { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"

interface ClientLayoutProps {
  children: React.ReactNode
  figtree: ReturnType<typeof Figtree>
  instrumentSerif: ReturnType<typeof Instrument_Serif>
}

export default function ClientLayout({ children, figtree, instrumentSerif }: ClientLayoutProps) {
  return (
    <html lang="en" className={`${figtree.variable} ${instrumentSerif.variable} ${GeistMono.variable}`}>
      <body className={`${figtree.variable} ${instrumentSerif.variable}`}>
        <style jsx global>{`
          html {
            font-family: ${figtree.style.fontFamily};
            --font-sans: ${figtree.variable};
            --font-mono: ${GeistMono.variable};
            --font-instrument-serif: ${instrumentSerif.variable};
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}
