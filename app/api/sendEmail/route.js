import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company,
      inquiryType,
      message
    } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields: firstName, lastName, email, phone, and message are required." 
        }), 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid email format" 
        }), 
        { status: 400 }
      );
    }

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Define email subject
    const subject = "💊 New Product Inquiry - Satymarg Healthcare Pvt. Ltd.";

    // Define email options
    const mailOptions = {
      from: `"Satymarg Healthcare" <${process.env.SMTP_USER}>`,
      to: "satymarghealthcare@gmail.com", // Replace with actual recipient email
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Satymarg Healthcare</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e0e0e0; border-top: none;">
            <h2 style="color:#2c3e50; margin-top: 0;">New Product Inquiry</h2>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
              <h3 style="color: #495057; margin-top: 0;">Message</h3>
              <blockquote style="border-left: 4px solid #667eea; padding-left: 15px; margin: 10px 0; font-style: italic; color: #555;">
                ${message.replace(/\n/g, '<br>')}
              </blockquote>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="font-size: 12px; color: #6c757d; margin: 0;">
              This inquiry was sent from the Satymarg Healthcare website<br>
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Inquiry submitted successfully" 
      }), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error("Email send error:", error);
    
    let errorMessage = "Failed to send inquiry";
    let statusCode = 500;

    if (error.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Please check SMTP credentials.";
      statusCode = 500;
    } else if (error.code === 'ESOCKET') {
      errorMessage = "Network error occurred while sending email.";
      statusCode = 503;
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage 
      }), 
      { 
        status: statusCode,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}