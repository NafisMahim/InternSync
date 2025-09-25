"use client"

import type React from "react"

interface ClientLayoutProps {
  children: React.ReactNode
  figtreeVariable: string
  instrumentSerifVariable: string
  geistMonoVariable: string
  figtreeFontFamily: string
}

export default function ClientLayout({
  children,
  figtreeVariable,
  instrumentSerifVariable,
  geistMonoVariable,
  figtreeFontFamily,
}: ClientLayoutProps) {
  return (
    <html lang="en" className={`${figtreeVariable} ${instrumentSerifVariable} ${geistMonoVariable}`}>
      <body className={`${figtreeVariable} ${instrumentSerifVariable}`}>
        <style jsx global>{`
          html {
            font-family: ${figtreeFontFamily};
            --font-sans: ${figtreeVariable};
            --font-mono: ${geistMonoVariable};
            --font-instrument-serif: ${instrumentSerifVariable};
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}
