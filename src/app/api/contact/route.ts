import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, country, service, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const to = process.env.RESEND_TO_EMAIL || "heyahelly@gmail.com";
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 12px;">New inquiry from ${String(fullName)}</h2>
        <p><strong>Email:</strong> ${String(email)}</p>
        <p><strong>Phone:</strong> ${phone ? String(phone) : "Not provided"}</p>
        <p><strong>Country:</strong> ${country ? String(country) : "Not provided"}</p>
        <p><strong>Service:</strong> ${service ? String(service) : "Not provided"}</p>
        <div style="margin-top: 18px;">
          <strong>Message:</strong>
          <p>${String(message).replace(/\n/g, "<br />")}</p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: String(email),
      subject: `New inquiry from ${String(fullName)}`,
      html,
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message || "Unable to send inquiry right now." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: result.data?.id ?? null });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}
