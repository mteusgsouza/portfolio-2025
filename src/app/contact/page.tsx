import FormContact from '@/components/form-contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
}

function ContatPage() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <h1 className="mb-5 text-center text-3xl font-bold">Contato</h1>
        <div className="mx-auto mb-8 w-20 border-b border-white/50"></div>
        <div className="mx-auto mb-8 max-w-2xl">
          <FormContact />
        </div>
        <div className="mt-10 space-y-2 text-sm">
          <p className="text-center text-white/80">
            Você pode entrar em contato comigo através do email:{' '}
            <a
              href="mailto:mteus.g.souza@gmail.com"
              className="text-accent hover:underline"
            >
              mteus.g.souza@gmail.com
            </a>
          </p>
          <p className="text-center text-white/80">
            Ou através do meu telefone:{' '}
            <a
              href="https://wa.me/55319971278536?text=Hi%20let%27s%20call%21"
              className="text-accent whitespace-nowrap hover:underline"
            >
              +55 (31) 9 97127-8536
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContatPage
