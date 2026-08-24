import { cn } from '@/lib/utils'
import { links } from '@/static/menu-links'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './sheet'

function MobileNav() {
  const t = useTranslations('nav')
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-3xl text-accent' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='mt-32 mb-40 text-center text-2xl'>
            <Link href="/">
              <h1 className='font-semibold'>Mateus
                <span className='text-accent'>.</span>
              </h1>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.path}
              className={cn('capitalize font-medium hover:text-accent transition-all border-b-2 border-transparent',
                // pathname === link.path && 'text-accent border-accent',
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav