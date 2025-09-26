interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <div>
        Message:
        <blockquote>{message}</blockquote>
      </div>
      email: <a href={`mailto:${email}`}>{email} </a>
    </div>
  )
}
