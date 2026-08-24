import Photo from '@/components/photo';
import Skills from '@/components/skills';
import Social from '@/components/social';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import moment from 'moment';
import { getTranslations } from 'next-intl/server';
import { FiDownload } from 'react-icons/fi';

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <div className="h-full">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className='text-xl'>{t('role')}</span>
            <h1 className="h1 mb-6">
              {t('greeting')} <br /> <span className="text-accent">Mateus Souza</span>
            </h1>
            <p className="max-w-[31.25rem] mb-9 text-white/80">
              {t('intro', { years: moment().diff(moment('2019-11-19'), 'years') })}
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/files/Curriculo Mateus Gonçalves de Souza.pdf" target='_blank' rel='noopener noreferrer' download>
                <Button variant="outline" size="lg" className='uppercase flex items-center gap-2'>
                  <span>{t('downloadCv')}</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <div className={cn('flex gap-6',
                  '[&_a]:w-9 [&_a]:h-9 [&_a]:border [&_a]:border-accent [&_a]:rounded-full [&_a]:flex [&_a]:justify-center [&_a]:items-center [&_a]:text-accent [&_a]:text-base [&_a]:hover:bg-accent [&_a]:hover:text-primary [&_a]:hover:transiion-all [&_a]:duration-500'
                )}>
                  <Social />
                </div>
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <div className="xl:pb-20">
        <Skills />
      </div>
      {/* <Stats /> */}
      {/* <ModeToggle/> */}
    </div>
  );
}
