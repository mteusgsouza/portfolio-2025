'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'


const services = [
  {
    num: '01',
    title: 'Web Development',
    link: '',
    description: 'I can help you build a website from scratch or improve your existing one.'
  },
  {
    num: '02',
    title: 'Mobile Development',
    link: '',
    description: 'I can help you build a mobile app from scratch or improve your existing one.'
  },
  {
    num: '03',
    title: 'UI/UX Design',
    link: '',
    description: 'I can help you design a beautiful and user-friendly interface for your website or app.'
  },
  {
    num: '04',
    title: 'SEO Optimization',
    link: '',
    description: 'I can help you improve your website\'s search engine ranking and visibility.'
  }
]

function ServicesPage() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[3.75rem]'>
          {services.map((service, index) => (
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold  text-outline hover:text-outline-hover text-transparent transition-all duration-500'>
                  {service.num}
                </div>
                <Link href={service.link}>
                  <BsArrowDownRight />
                </Link>
              </div>
              <h2 className='text-xl font-bold'>{service.title}</h2>
              <p className='text-white/80'>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPage