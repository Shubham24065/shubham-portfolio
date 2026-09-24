import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    // Honeypot spam protection
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }

    if (subject.length > 150) {
      return NextResponse.json(
        { error: "Subject is too long." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must contain at least 10 characters." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Message must be 2000 characters or less." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: "Shubham Portfolio <onboarding@resend.dev>",
      to: ["shubham24065@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact — ${subject}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            padding: 32px;
            color: #111827;
          "
        >
          <h1
            style="
              margin-bottom: 24px;
              font-size: 24px;
            "
          >
            New Portfolio Message
          </h1>

          <p>
            Someone submitted the contact form on your portfolio.
          </p>

          <div
            style="
              margin-top: 28px;
              padding: 24px;
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 10px;
            "
          >
            <p>
              <strong>Name</strong><br />
              ${safeName}
            </p>

            <p>
              <strong>Email</strong><br />
              ${safeEmail}
            </p>

            <p>
              <strong>Subject</strong><br />
              ${safeSubject}
            </p>

            <p>
              <strong>Message</strong><br /><br />
              ${safeMessage}
            </p>
          </div>

          <p
            style="
              margin-top: 24px;
              font-size: 12px;
              color: #64748b;
            "
          >
            Sent from shubhamkaushikportfolio.vercel.app
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}