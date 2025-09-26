import { EmailTemplate } from '@/components/email-template'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()
    console.log(items)
    const { data, error } = await resend.emails.send({
      from: `${items.name} <${items.email}>`,
      to: ['mteus.g.souza@gmail.com'],
      subject: 'Contato - Portfolio',
      react: EmailTemplate({
        name: items.name,
        email: items.email,
        message: items.message,
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
