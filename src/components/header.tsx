import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Nav from './nav';
import { Button } from './ui/button';
import MobileNav from './ui/mobile-nav';

async function Header() {
  const t = await getTranslations('header');
  return (
    <header className="py-8 xl:py-12 text-white relative">
      <div className="container max-auto justify-between items-center flex">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>Mateus<span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className='hidden items-center gap-8 xl:flex'>
          <Nav />
          <a
            href="https://wa.me/55319971278536?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button>{t('hireMe')}</Button>
          </a>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header;