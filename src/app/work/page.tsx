import ClientProjects from '@/components/client-projects'
import WorkProjects from '@/components/work-projects'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('work')
  return {
    title: t('metaTitle'),
  }
}

async function WorkPage() {
  const t = await getTranslations('work')
  return (
    <section className="flex min-h-[80vh] flex-col justify-center pt-12 pb-20 xl:pt-0 xl:pb-32">
      <div className="container">
        <h1 className="mb-5 text-center text-3xl font-bold">{t('title')}</h1>
        <div className="mx-auto mb-8 w-20 border-b border-white/50"></div>
        <p className="mx-auto mb-12 max-w-2xl text-center text-white/80">
          {t('subtitle')}
        </p>

        <h2 className="mb-2 text-xl font-semibold">{t('personalTitle')}</h2>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-white/60">
          {t('personalIntro')}
        </p>
        <WorkProjects />

        <div className="mt-20 mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-xl font-semibold">{t('clientTitle')}</h2>
          <span className="text-sm text-white/50">{t('clientPeriod')}</span>
        </div>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-white/60">
          {t('clientIntro')}
        </p>
        <ClientProjects />
      </div>
    </section>
  )
}

export default WorkPage
