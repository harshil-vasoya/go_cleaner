import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

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

    // Format the current date
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Create HTML email template
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
          .info-item {
            margin-bottom: 10px;
          }
          .info-label {
            font-weight: bold;
          }
          .message-box {
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #009688;
            margin: 15px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>GO Cleaner - New Inquiry</h2>
          <p>${currentDate}</p>
        </div>
        <div class="content">
          <p>A new inquiry has been submitted through the GO Cleaner website contact form:</p>
          
          <div class="info-item">
            <span class="info-label">Name:</span> ${name}
          </div>
          <div class="info-item">
            <span class="info-label">Email:</span> ${email}
          </div>
          <div class="info-item">
            <span class="info-label">Phone:</span> ${phone || "Not provided"}
          </div>
          <div class="info-item">
            <span class="info-label">Subject:</span> ${subject}
          </div>
          
          <div class="info-item">
            <span class="info-label">Message:</span>
            <div class="message-box">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p>Please respond to this inquiry at your earliest convenience.</p>
        </div>
        <div class="footer">
          <p>This is an automated message from the GO Cleaner website. Please do not reply to this email.</p>
          <p>&copy; ${new Date().getFullYear()} GO Cleaner. All rights reserved.</p>
        </div>
      </body>
      </html>
    `

    // Email options
    const mailOptions = {
      from: "GO Cleaner <harshil9915vasoya@gmail.com>",
      to:  "harshilvasoya2812@gmail.com",
      subject: `GO Cleaner Inquiry: ${subject}`,
      html: htmlContent,
      replyTo: email,
    }

    // Send email
    console.log("Attempting to send email to harshilvasoya2812@gmail.com")
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.messageId)

    return NextResponse.json({ success: true, message: "Email sent successfully", messageId: info.messageId })
  } catch (error) {
    console.log("Detailed error sending send-email email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
        error: (error as Error).message,
        stack: (error as Error).stack,
      },
      { status: 500 },
    )
  }
}

