import Link from 'next/link'
import Social from './social'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'

async function Footer() {
  const t = await getTranslations('footer')
  return (
    <footer className="py-8 text-white">
      <div className="container">
        <div className="border-t border-white/50 pt-8 flex flex-col gap-8 xl:flex-row xl:justify-between xl:items-start">
          <div>
            <Link href="/">
              <h2 className="text-2xl font-semibold mb-3">
                Mateus<span className="text-accent">.</span>
              </h2>
            </Link>
            <p className="text-sm text-white/80 space-y-1">
              <a href="mailto:mteus.g.souza@gmail.com" className="block hover:text-accent transition-colors">
                mteus.g.souza@gmail.com
              </a>
              <a href="https://wa.me/55319971278536" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">
                +55 (31) 9 97127-8536
              </a>
            </p>
          </div>

          <div className={cn('flex gap-6',
            '[&_a]:w-9 [&_a]:h-9 [&_a]:border [&_a]:border-accent [&_a]:rounded-full [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:text-accent [&_a]:text-base [&_a]:hover:bg-accent [&_a]:hover:text-primary [&_a]:hover:transiion-all [&_a]:duration-500'
          )}>
            <Social />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Mateus Souza. {t('rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
