import { NextRequest, NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, captchaToken } =
      await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!captchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification is required" },
        { status: 400 }
      );
    }

    // Verify the reCAPTCHA token with Google
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Create transporter using SMTP configuration from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to you (notification)
    const notificationMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER, // Your email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #8B5CF6; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const autoReplyMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
            Thank you for your message!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Hi ${name},
          </p>
          
          <p style="line-height: 1.6; color: #555;">
            Thank you for reaching out through my portfolio! I've received your message about 
            "<strong>${subject}</strong>" and I appreciate you taking the time to contact me.
          </p>
          
          <p style="line-height: 1.6; color: #555;">
            I'll review your message and get back to you as soon as possible, typically within 24-48 hours.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="font-style: italic; color: #666;">"${message}"</p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            If you have any urgent questions or need to add additional information, 
            feel free to reply to this email.
          </p>
          
          <p style="line-height: 1.6; color: #555;">
            Best regards,<br>
            <strong>Rachid Oudouch</strong>
          </p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This is an automated response. Please do not reply to this email if you have additional questions - 
              instead, send a new message through the contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(notificationMailOptions);
    await transporter.sendMail(autoReplyMailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Message sent successfully! You should receive a confirmation email shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
