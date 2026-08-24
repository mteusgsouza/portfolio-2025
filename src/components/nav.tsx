'use client';

import { cn } from '@/lib/utils';
import { links } from '@/static/menu-links';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function Nav(){
  const pathname = usePathname();
  const t = useTranslations('nav');
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.key}
          href={link.path}
          className={cn( 'capitalize font-medium hover:text-accent transition-all border-b-2 border-transparent',
            pathname === link.path && 'text-accent border-accent',
          )}
        >
          {t(link.key)}
        </Link>
      ))}
    </nav>
  )
}

export default Nav;