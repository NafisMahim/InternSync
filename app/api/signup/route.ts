import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
// In production, you'd want to use a proper database
const emails: string[] = []

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check if email already exists
    if (emails.includes(email)) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    // Add email to storage
    emails.push(email)

    // Log the email for now (in production, you'd send this to your email service)
    console.log(`[v0] New email signup: ${email}`)
    console.log(`[v0] Total emails collected: ${emails.length}`)
    console.log(`[v0] All emails:`, emails)

    // TODO: Send email to nafismahimofficial@gmail.com with the new signup
    // You can integrate with services like Resend, SendGrid, or Nodemailer

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Email signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  // Endpoint to view all collected emails (for admin purposes)
  return NextResponse.json({
    emails,
    count: emails.length,
  })
}
