'use client';

import { cn } from '@/lib/utils';
import { links } from '@/static/menu-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function Nav(){
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.path} 
          className={cn( 'capitalize font-medium hover:text-accent transition-all border-b-2 border-transparent',
            pathname === link.path && 'text-accent border-accent',
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
} 

export default Nav;