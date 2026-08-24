'use client'

import { cn } from '@/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

type ProjectLightboxProps = {
  images: string[]
  alt: string
  index: number
  onIndexChange: (index: number) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectLightbox({
  images,
  alt,
  index,
  onIndexChange,
  open,
  onOpenChange,
}: ProjectLightboxProps) {
  const t = useTranslations('work')
  const goTo = useCallback(
    (next: number) => onIndexChange((next + images.length) % images.length),
    [images.length, onIndexChange]
  )

  useEffect(() => {
    if (!open) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') goTo(index + 1)
      if (e.key === 'ArrowLeft') goTo(index - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, index, goTo])

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in" />
        <DialogPrimitive.Content
          className="data-[state=open]:fade-in-0 fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 outline-none data-[state=open]:animate-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) onOpenChange(false)
          }}
        >
          <DialogPrimitive.Title className="sr-only">
            {alt}
          </DialogPrimitive.Title>
          <DialogPrimitive.Close className="text-accent absolute top-4 right-4 outline-none sm:top-8 sm:right-8">
            <IoMdClose className="text-3xl" />
            <span className="sr-only">{t('close')}</span>
          </DialogPrimitive.Close>

          <div className="relative flex w-full max-w-5xl flex-1 items-center justify-center">
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="absolute left-0 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:-left-12"
                aria-label={t('previousImage')}
              >
                <BsChevronLeft className="text-xl" />
              </button>
            )}
            <div className="relative h-full max-h-[75vh] w-full">
              <Image
                src={images[index]}
                alt={`${alt} screenshot ${index + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="absolute right-0 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:-right-12"
                aria-label={t('nextImage')}
              >
                <BsChevronRight className="text-xl" />
              </button>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs text-white/60">
                {index + 1} / {images.length}
              </span>
              <div className="flex max-w-full gap-2 overflow-x-auto px-2">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => onIndexChange(i)}
                    className={cn(
                      'relative h-10 w-16 shrink-0 overflow-hidden rounded border transition-colors',
                      i === index
                        ? 'border-accent'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    )}
                  >
                    <Image src={src} alt="" fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
