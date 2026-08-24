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
        <WorkProjects />
      </div>
    </section>
  )
}

export default WorkPage
