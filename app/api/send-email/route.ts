import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json()

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Send email
    let info = await transporter.sendMail({
      from: '"Your Website" <admin@diagnosticosrl.com.uy>',
      to: 'admin@diagnosticosrl.com.uy',
      subject: `New contact form submission: ${asunto}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`,
      html: `<p><strong>Nombre:</strong> ${nombre}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Asunto:</strong> ${asunto}</p>
             <p><strong>Mensaje:</strong> ${mensaje}</p>`
    })

    console.log('Message sent: %s', info.messageId)
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in send-email route:', error)
    return NextResponse.json(
      { message: 'Error sending email', error: error.message },
      { status: 500 }
    )
  }
}
