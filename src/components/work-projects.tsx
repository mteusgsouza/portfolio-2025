'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { projects, type Project } from '@/static/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsArrowUpRight, BsCheck2, BsGithub } from 'react-icons/bs'

function ProjectPreview({ project }: { project: Project }) {
  const [showImage, setShowImage] = useState(Boolean(project.image))

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
      {showImage && project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1280px) 40vw, 100vw"
          onError={() => setShowImage(false)}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-transparent">
          <span className="text-outline group-hover:text-outline-hover text-6xl font-extrabold text-transparent transition-all duration-500 xl:text-8xl">
            {project.num}
          </span>
        </div>
      )}
      <span className="bg-primary/80 text-accent absolute top-4 left-4 rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.125rem] uppercase backdrop-blur-sm">
        {project.category}
      </span>
    </div>
  )
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const techCount = project.stack.reduce(
    (total, group) => total + group.items.length,
    0
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 2.4 + index * 0.15,
          duration: 0.4,
          ease: 'easeInOut',
        },
      }}
      className="group hover:border-accent/60 grid grid-cols-1 gap-8 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-500 xl:grid-cols-5 xl:gap-10 xl:p-8"
    >
      <div className="xl:col-span-2">
        <ProjectPreview project={project} />
      </div>

      <div className="flex flex-col gap-5 xl:col-span-3">
        <div className="flex items-start justify-between gap-4">
          <h2 className="h3 group-hover:text-accent transition-colors duration-500">
            {project.title}
          </h2>
          <span className="text-outline shrink-0 text-4xl font-extrabold text-transparent">
            {project.num}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-white/80">
          {project.description}
        </p>

        <Accordion type="multiple" className="w-full border-t border-white/20">
          <AccordionItem value={`${project.num}-highlights`}>
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                Technical highlights
                <span className="text-xs text-white/50">
                  ({project.highlights.length})
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <BsCheck2 className="text-accent mt-1 shrink-0 text-base" />
                    <span className="leading-relaxed text-white/70">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={`${project.num}-stack`}>
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                Tech stack
                <span className="text-xs text-white/50">({techCount})</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3">
                {project.stack.map((group) => (
                  <div
                    key={group.label}
                    className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
                  >
                    <span className="text-accent/80 shrink-0 pt-1 text-xs tracking-[0.1em] uppercase sm:w-24">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex flex-wrap items-center gap-6">
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover group/link inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              Live site
              <BsArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors"
            >
              <BsGithub className="text-base" />
              Source code
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function WorkProjects() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project, index) => (
        <ProjectItem key={project.num} project={project} index={index} />
      ))}
    </div>
  )
}

export default WorkProjects
