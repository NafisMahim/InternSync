import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import ClientLayout from "./client-layout"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "InternSync - The Future of Internship Matching",
  description: "Connect students with their dream internships through AI-powered matching",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientLayout
      figtreeVariable={figtree.variable}
      instrumentSerifVariable={instrumentSerif.variable}
      geistMonoVariable={GeistMono.variable}
      figtreeFontFamily={figtree.style.fontFamily}
    >
      {children}
    </ClientLayout>
  )
}
