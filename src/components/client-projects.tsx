'use client'
import { Badge } from '@/components/ui/badge'
import type { Locale } from '@/i18n/locale'
import { cn } from '@/lib/utils'
import {
  clientProjects,
  localizeClientProject,
  type LocalizedClientProject,
} from '@/static/client-projects'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

function ClientCard({
  project,
  index,
}: {
  project: LocalizedClientProject
  index: number
}) {
  const t = useTranslations('work')
  const { name, url, stack, rewrite, featured, description } = project

  return (
    <motion.div
      className={cn(featured && 'xl:col-span-3')}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 2.9 + index * 0.05,
          duration: 0.4,
          ease: 'easeInOut',
        },
      }}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group hover:border-accent/60 relative flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:bg-white/[0.06]',
          featured && 'xl:flex-row xl:items-center xl:justify-between xl:gap-10'
        )}
      >
        <BsArrowUpRight className="group-hover:text-accent absolute top-5 right-5 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

        <div className="flex flex-col">
          <span className="group-hover:text-accent pr-8 font-semibold transition-colors duration-300">
            {name}
          </span>
          {/* Two lines are always reserved so every card keeps the same height. */}
          <p className="mt-2 min-h-[3.25em] pr-8 text-sm leading-relaxed text-white/70">
            {description}
          </p>
        </div>

        <div
          className={cn(
            'mt-auto flex flex-wrap items-center gap-2 pt-4',
            featured && 'xl:shrink-0 xl:pt-0 xl:pr-8'
          )}
        >
          <Badge className="bg-white/10 text-white/80">{stack}</Badge>
          {rewrite && (
            <Badge className="border-accent/30 bg-accent/15 text-accent">
              {t('rewriteTag')}
            </Badge>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

function ClientProjects() {
  const locale = useLocale() as Locale

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {clientProjects.map((project, index) => (
        <ClientCard
          key={project.name}
          project={localizeClientProject(project, locale)}
          index={index}
        />
      ))}
    </div>
  )
}

export default ClientProjects
