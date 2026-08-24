import ServicesList from '@/components/services-list'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('services')
  return {
    title: t('metaTitle'),
  }
}

function ServicesPage() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <ServicesList />
      </div>
    </section>
  )
}

export default ServicesPage
