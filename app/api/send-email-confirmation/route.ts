import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject } = body

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "harshil9915vasoya@gmail.com",
        pass: "fiummkhswgxudiso", // This should be an App Password, not your regular password
      },
      secure: true, // Use SSL
      tls: {
        rejectUnauthorized: false, // Accept self-signed certificates
      },
    })

    // Create HTML email template for confirmation
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
          }
          .header {
            background-color: #009688;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
          }
          .footer {
            background-color: #f5f5f5;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border: 1px solid #ddd;
            border-top: none;
          }
          .button {
            display: inline-block;
            background-color: #009688;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>Thank You for Contacting GO Cleaner</h2>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to GO Cleaner. We have received your inquiry regarding "${subject}".</p>
          
          <p>Our team will review your message and get back to you as soon as possible, usually within 24-48 business hours.</p>
          
          <p>If your matter is urgent, please feel free to call us directly at +91 82000 66085.</p>
          
          <p>
            <a href="https://gocleaner.com/products" class="button">Explore Our Products</a>
          </p>
          
          <p>We appreciate your interest in GO Cleaner kitchen chimneys.</p>
          
          <p>Best regards,<br>The GO Cleaner Team</p>
        </div>
        <div class="footer">
          <p>This is an automated message. Please do not reply to this email.</p>
          <p>&copy; ${new Date().getFullYear()} GO Cleaner. All rights reserved.</p>
        </div>
      </body>
      </html>
    `

    // Email options
    const mailOptions = {
      from: "GO Cleaner <harshil9915vasoya@gmail.com>",
      to: email,
      subject: "Thank You for Contacting GO Cleaner",
      html: htmlContent,
    }

    // Send email
    console.log("Attempting to send confirmation email to", email)
    const info = await transporter.sendMail(mailOptions)
    console.log("Confirmation email sent successfully:", info.messageId)

    return NextResponse.json({
      success: true,
      message: "Confirmation email sent successfully",
      messageId: info.messageId,
    })
  } catch (error) {
    console.error("Detailed error sending confirmation email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send confirmation email",
        error: (error as Error).message,
        stack: (error as Error).stack,
      },
      { status: 500 },
    )
  }
}

