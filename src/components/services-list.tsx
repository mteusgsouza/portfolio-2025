'use client'
import type { Locale } from '@/i18n/locale'
import { services } from '@/static/services'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

function ServicesList() {
  const locale = useLocale() as Locale

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="grid grid-cols-1 gap-[3.75rem] md:grid-cols-2"
    >
      {services.map((service) => {
        const { title, description } = service.translations[locale]
        return (
          <div
            key={service.num}
            className="group flex flex-1 flex-col justify-center gap-6"
          >
            <div className="flex w-full items-center justify-between">
              <div className="text-outline hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                {service.num}
              </div>
              <Link href={service.link}>
                <BsArrowDownRight />
              </Link>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-white/80">{description}</p>
            <div className="w-full border-b border-white/20"></div>
          </div>
        )
      })}
    </motion.div>
  )
}

export default ServicesList
