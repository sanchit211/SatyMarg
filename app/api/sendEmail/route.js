import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      propertyType, 
      propertySize,
      propertyAddress, 
      price, 
      message, 
      formType,
      captchaToken 
    } = await req.json();

    // ✅ Validate reCAPTCHA token
    if (!captchaToken) {
      return new Response(
        JSON.stringify({ success: false, error: "reCAPTCHA token is required" }),
        { status: 400 }
      );
    }

    // ✅ Verify reCAPTCHA with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${captchaToken}`,
      {
        method: "POST",
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return new Response(
        JSON.stringify({ success: false, error: "reCAPTCHA verification failed" }),
        { status: 400 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Define email subject based on form type
    const subject = formType === "rent" 
      ? "📥 New Property Rental Inquiry - Saudi Office Rent" 
      : "🏠 New Property Listing Request - Saudi Office Rent";

    // ✅ Define email options
    const mailOptions = {
      from: `"Saudi Office Rent" <${process.env.SMTP_USER}>`,
      // to:"rastogi.sanchit2119@gmail.com",
      to: "khulood@hkb.sa", // fixed recipient
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color:#2c3e50;">${formType === "rent" ? "New Rental Inquiry" : "New Listing Request"}</h2>
          <p><strong>Service Type:</strong> ${formType === "rent" ? "Rent a Property" : "List my Property"}</p>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          ${formType === "list" ? `
            <p><strong>Property Size:</strong> ${propertySize} (m²)</p>
            <p><strong>Property Address:</strong> ${propertyAddress}</p>
            <p><strong>Price:</strong> ${price}</p>
          ` : ""}
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #3498db; padding-left: 10px; margin: 10px 0;">
            ${message}
          </blockquote>
          <hr />
          <p style="font-size: 12px; color: #888;">
            Sent from <strong>saudiofficerent.com</strong>
          </p>
        </div>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}