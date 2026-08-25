'use client'

import { cn } from '@/lib/utils'
import { links } from '@/static/menu-links'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

function MobileNav() {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-accent text-3xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mt-32 mb-40 text-center text-2xl">
            <Link href="/" onClick={() => setOpen(false)}>
              <h1 className="font-semibold">
                Mateus
                <span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.path}
              onClick={() => setOpen(false)}
              className={cn(
                'hover:text-accent border-b-2 border-transparent font-medium capitalize transition-all'
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
