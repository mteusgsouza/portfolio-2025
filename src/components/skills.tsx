'use client'
import { motion } from 'framer-motion'
import { Badge } from './ui/badge'

export const skillsData = [
  'HTML',
  'CSS',
  'PHP',
  'Git',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Expo',
  'React Native',
  'Tailwind',
  'Material-UI',
  'Bootstrap',
  'WordPress',
  'Prisma',
  'Redux',
  'Express',
  'Framer Motion',
] as const


function Skills() {
  return (
    <section className='pt-4 pb-12 xl:py-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
        }}
        className="container mx-auto">
        <h2 className='text-3xl font-bold mb-5 text-center'>Skills</h2>
        <div className='border-b border-white/50 w-20 mx-auto mb-8'></div>
        <div className="flex flex-wrap gap-4 mx-auto justify-center">
          {skillsData.map((skill, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1, y: 0,
                transition: { delay: 2.6 + (index + 1) * 0.1, duration: 0.4, ease: 'easeInOut' }
              }}
            >
              <Badge className='text-base lg:text-lg'>{skill}</Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills