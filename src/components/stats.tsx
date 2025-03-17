'use client'
import { cn } from '@/lib/utils'
import CountUp from 'react-countup'

function Stats() {
  const _status = [
    { num: 5, text: 'Years of experience' },
    { num: 25, text: 'Projects completed' },
    { num: 8, text: 'Tecnologies mastered' },
    { num: 500, text: 'Code commits' },
  ]
  return (
    <section className='pt-4 pb-12 xl:py-0'>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {_status.map((item, index) => ((
            <div key={index}
              className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
              <CountUp end={item.num} duration={5} className='text-4xl xl:text-6xl font-extrabold' />
              <p className={cn(item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]',
                'leading-snug text-white/80'
              )}>{item.text}</p>
            </div>
          )))}
        </div>
      </div>
    </section>
  )
}

export default Stats