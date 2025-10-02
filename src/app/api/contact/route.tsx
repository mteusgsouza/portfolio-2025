import { EmailTemplate } from '@/components/email-template'
import { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name: string
      email: string
      message: string
    }
    const { data, error } = await resend.emails.send({
      from: 'no-reply@mateusgsouza.com.br',
      to: ['mteus.g.souza@gmail.com'],
      subject: 'Contato - Portfolio',
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    })

    if (error) {
      console.log(error)
      return Response.json(
        { error },
        {
          status: 500,
          statusText: error.message,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.json(
      { error },
      {
        status: 500,
        statusText: 'Internal Server Error',
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
