'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'Web Development',
    link: '',
    description:
      'I specialize in building websites using modern technologies and frameworks like React, Next.js, TailwindCSS and Material-UI.',
  },
  {
    num: '02',
    title: 'Mobile Development',
    link: '',
    description:
      'I have experience building mobile apps using React Native and Expo, which allows me to build cross-platform apps for both iOS and Android.',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    link: '',
    description:
      'I like to design clean and modern user interfaces that are easy to use and visually appealing.',
  },
  {
    num: '04',
    title: 'SEO Optimization',
    link: '',
    description:
      'I understand the importance of SEO and can help you optimize your website to rank higher on search engines.',
  },
]

function ServicesPage() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 gap-[3.75rem] md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
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
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-white/80">{service.description}</p>
              <div className="w-full border-b border-white/20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPage
