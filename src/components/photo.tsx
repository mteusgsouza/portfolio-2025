'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Photo() {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' }
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
          }}
          className='absolute w-[18.625rem] h-[18.625rem] xl:w-[31.125rem] xl:h-[31.125rem] mix-blend-lighten'>
          <Image
            src="/assets/profile-square.jpg"
            layout='fill'
            priority
            quality={100}
            alt=""
            className='object-contain rounded-full' />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[18.75rem] h-[18.75rem] xl:w-[31.625rem] xl:h-[31.625rem]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo