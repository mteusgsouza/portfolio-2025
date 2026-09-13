import type { Locale } from '@/i18n/locale'

type ClientProjectTranslation = {
  /** What the organisation is, in one line. Shown under the name. */
  description: string
}

export type ClientProject = {
  /** Short name shown as the card title. Proper noun, identical in every locale. */
  name: string
  url: string
  /** Framework detected on the live site, shown as a badge. */
  stack: string
  /** Rewritten from scratch off the legacy PHP site, rather than built new. */
  rewrite?: boolean
  /** Takes a full-width row of its own at xl, below the grid of institutional sites. */
  featured?: boolean
  translations: Record<Locale, ClientProjectTranslation>
}

export type LocalizedClientProject = ClientProject & ClientProjectTranslation

export function localizeClientProject(
  project: ClientProject,
  locale: Locale
): LocalizedClientProject {
  return { ...project, ...project.translations[locale] }
}

export const clientProjects: ClientProject[] = [
  {
    name: 'CBDA',
    url: 'https://www.cbda.org.br/',
    stack: 'Next.js',
    rewrite: true,
    translations: {
      en: { description: 'Brazilian Aquatic Sports Confederation' },
      pt: { description: 'Confederação Brasileira de Desportos Aquáticos' },
      ja: { description: 'ブラジル水泳連盟' },
    },
  },
  {
    name: 'CBCa',
    url: 'https://canoagem.org.br/',
    stack: 'Next.js',
    translations: {
      en: { description: 'Brazilian Canoeing Confederation' },
      pt: { description: 'Confederação Brasileira de Canoagem' },
      ja: { description: 'ブラジルカヌー連盟' },
    },
  },
  {
    name: 'CBG',
    url: 'https://cbginastica.com.br/',
    stack: 'Next.js',
    translations: {
      en: { description: 'Brazilian Gymnastics Confederation' },
      pt: { description: 'Confederação Brasileira de Ginástica' },
      ja: { description: 'ブラジル体操連盟' },
    },
  },
  {
    name: 'CBHb',
    url: 'https://cbhb.org.br/',
    stack: 'React SPA',
    translations: {
      en: { description: 'Brazilian Handball Confederation' },
      pt: { description: 'Confederação Brasileira de Handebol' },
      ja: { description: 'ブラジルハンドボール連盟' },
    },
  },
  {
    name: 'CBW',
    url: 'https://www.cbw.org.br/',
    stack: 'Next.js',
    translations: {
      en: { description: 'Brazilian Wrestling Confederation' },
      pt: { description: 'Confederação Brasileira de Wrestling' },
      ja: { description: 'ブラジルレスリング連盟' },
    },
  },
  {
    name: 'Surf Brasil',
    url: 'https://www.surfbrasil.org.br/',
    stack: 'Next.js',
    translations: {
      en: { description: 'Brazilian Surfing Confederation' },
      pt: { description: 'Confederação Brasileira de Surf' },
      ja: { description: 'ブラジルサーフィン連盟' },
    },
  },
  {
    name: 'Saltos Brasil',
    url: 'https://saltosbrasil.com/',
    stack: 'React SPA',
    translations: {
      en: { description: 'Brazilian Diving Confederation' },
      pt: { description: 'Confederação Brasileira de Saltos Ornamentais' },
      ja: { description: 'ブラジル飛込連盟' },
    },
  },
  {
    name: 'FEEMG',
    url: 'https://feemg.com.br/',
    stack: 'Next.js',
    translations: {
      en: { description: 'Minas Gerais School Sports Federation' },
      pt: { description: 'Federação de Esportes Estudantis de Minas Gerais' },
      ja: { description: 'ミナスジェライス州学生スポーツ連盟' },
    },
  },
  {
    name: 'LPF',
    url: 'https://ligapaulistafutsal.com.br/',
    stack: 'Next.js',
    translations: {
      en: { description: 'São Paulo State Futsal League' },
      pt: { description: 'Liga Paulista de Futsal' },
      ja: { description: 'サンパウロ州フットサルリーグ' },
    },
  },
  {
    name: 'Súmula Eletrônica',
    url: 'https://sumula-next-app.vercel.app/',
    stack: 'Next.js',
    featured: true,
    translations: {
      en: {
        description:
          'Electronic match report with live scoring and offline operation.',
      },
      pt: {
        description:
          'Súmula eletrônica com registro ao vivo e operação offline.',
      },
      ja: {
        description:
          '連盟・リーグ向けの電子スコアシート。ライブ入力とオフライン動作に対応。',
      },
    },
  },
  // Flip `rewrite: true` on the other sites that were migrated off the legacy PHP.
]
