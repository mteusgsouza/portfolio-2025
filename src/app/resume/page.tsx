import { Button } from '@/components/ui/button'
import Skills from '@/components/skills'
import { Furigana } from '@/components/furigana'
import { isLocale, defaultLocale } from '@/i18n/locale'
import {
  education,
  experience,
  languages,
  localizeEntry,
  localizeLanguage,
  localizeProfile,
} from '@/static/resume'
import { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { FiDownload } from 'react-icons/fi'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('resume')
  return {
    title: t('metaTitle'),
  }
}

async function ResumePage() {
  const t = await getTranslations('resume')
  const rawLocale = await getLocale()
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale
  const profile = localizeProfile(locale)

  return (
    <section className="py-12 xl:py-0">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-12">
          <div>
            <span className="text-xl">{profile.role}</span>
            <h1 className="h1 mb-4">
              {locale === 'ja' ? (
                <>
                  <Furigana word="Mateus" />{' '}
                  <span className="text-accent">
                    <Furigana word="Souza" />
                  </span>
                </>
              ) : (
                <>
                  Mateus <span className="text-accent">Souza</span>
                </>
              )}
            </h1>
            <p className="max-w-[45rem] text-white/80">{profile.summary}</p>
          </div>
          <a
            href="/files/Curriculo Mateus Gonçalves de Souza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="shrink-0"
          >
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>{t('downloadPdf')}</span>
              <FiDownload className="text-xl" />
            </Button>
          </a>
        </div>

        <div className="grid gap-12 xl:grid-cols-2 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('experience')}</h2>
            <div className="border-b border-white/50 w-16 mb-8"></div>
            <div className="space-y-8">
              {experience.map((entry, index) => {
                const item = localizeEntry(entry, locale)
                return (
                  <div key={index}>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-accent text-sm mb-2">
                      {item.place} • {item.period}
                    </p>
                    <ul className="space-y-1 text-sm text-white/80 list-disc list-inside">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{t('education')}</h2>
            <div className="border-b border-white/50 w-16 mb-8"></div>
            <div className="space-y-8">
              {education.map((entry, index) => {
                const item = localizeEntry(entry, locale)
                return (
                  <div key={index}>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-accent text-sm mb-2">
                      {item.place} • {item.period}
                    </p>
                    <ul className="space-y-1 text-sm text-white/80 list-disc list-inside">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">{t('languages')}</h2>
          <div className="border-b border-white/50 w-16 mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-8">
            {languages.map((language, index) => {
              const item = localizeLanguage(language, locale)
              return (
                <div key={index} className="text-center">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/80">{item.level}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Skills />
    </section>
  )
}

export default ResumePage
