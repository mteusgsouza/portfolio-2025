import Link from 'next/link';
import Nav from './nav';
import { Button } from './ui/button';
import MobileNav from './ui/mobile-nav';

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white relative">
      <div className="container max-auto justify-between items-center flex">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>Mateus<span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className='hidden items-center gap-8 xl:flex'>
          <Nav />
          <Link href='/contact' passHref>
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header;