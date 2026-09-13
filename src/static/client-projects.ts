import type { Locale } from '@/i18n/locale'

/** Keys under the `work.clientTags` namespace in the message files. */
export type ClientTag =
  | 'rewrite'
  | 'live'
  | 'customTemplate'
  | 'thirdPartyDesign'
  | 'inherited'
  | 'multitenant'
  | 'liveScoreboard'

type ClientProjectTranslation = {
  /** What the organisation is, in one line. Shown under the name. */
  description: string
}

export type ClientProject = {
  /** Short name shown as the card title. Proper noun, identical in every locale. */
  name: string
  url: string
  /** Tech badges, in the order they should read. Proper nouns, never translated. */
  stack: string[]
  /** Translated badges in the accent colour, after the stack ones. */
  tags?: ClientTag[]
  /** Takes a full-width row of its own at xl, above the grid of the other sites. */
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
    stack: ['Next.js', 'Material UI', 'Firebase Auth', 'Firestore'],
    tags: ['rewrite', 'live'],
    featured: true,
    translations: {
      en: { description: 'Brazilian Aquatic Sports Confederation' },
      pt: { description: 'Confederação Brasileira de Desportos Aquáticos' },
      ja: { description: 'ブラジル水泳連盟' },
    },
  },
  {
    name: 'Eu Consultor',
    url: 'https://play.google.com/store/apps/details?id=com.euconsultor.mobile',
    stack: ['React Native', 'Vite', 'Next.js', 'NestJS', 'Pagar.me'],
    tags: ['inherited'],
    featured: true,
    translations: {
      en: {
        description:
          'Platform for painters and renovation professionals: quotes, materials and purchasing from partner stores. App, dashboard and checkout over a single API.',
      },
      pt: {
        description:
          'Plataforma para pintores e profissionais de reforma: orçamentos, materiais e compra em lojas parceiras. App, dashboard e checkout sobre uma API única.',
      },
      ja: {
        description:
          '塗装業者・リフォーム事業者向けプラットフォーム。見積、資材、提携店舗からの購入に対応し、アプリ・ダッシュボード・チェックアウトが単一のAPIを共有。',
      },
    },
  },
  {
    name: 'Súmula Eletrônica',
    url: 'https://sumula-next-app.vercel.app/',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Redis'],
    tags: ['multitenant', 'liveScoreboard'],
    featured: true,
    translations: {
      en: {
        description:
          'Multitenant electronic match report for futsal, handball, volleyball, basketball and water polo. Live scoring, offline operation and a scoreboard synced with the external display.',
      },
      pt: {
        description:
          'Súmula eletrônica multitenant para futsal, handebol, vôlei, basquete e polo aquático. Registro ao vivo, operação offline e placar sincronizado com a exibição externa.',
      },
      ja: {
        description:
          'フットサル・ハンドボール・バレーボール・バスケットボール・水球に対応したマルチテナントの電子スコアシート。ライブ入力、オフライン動作、外部ディスプレイと同期するスコアボードを備えています。',
      },
    },
  },
  {
    name: 'CBCa',
    url: 'https://canoagem.org.br/',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    translations: {
      en: { description: 'Brazilian Canoeing Confederation' },
      pt: { description: 'Confederação Brasileira de Canoagem' },
      ja: { description: 'ブラジルカヌー連盟' },
    },
  },
  {
    name: 'CBG',
    url: 'https://cbginastica.com.br/',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    translations: {
      en: { description: 'Brazilian Gymnastics Confederation' },
      pt: { description: 'Confederação Brasileira de Ginástica' },
      ja: { description: 'ブラジル体操連盟' },
    },
  },
  {
    name: 'CBHb',
    url: 'https://cbhb.org.br/',
    stack: ['React SPA', 'Sass'],
    tags: ['customTemplate'],
    translations: {
      en: { description: 'Brazilian Handball Confederation' },
      pt: { description: 'Confederação Brasileira de Handebol' },
      ja: { description: 'ブラジルハンドボール連盟' },
    },
  },
  {
    name: 'CBW',
    url: 'https://www.cbw.org.br/',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    translations: {
      en: { description: 'Brazilian Wrestling Confederation' },
      pt: { description: 'Confederação Brasileira de Wrestling' },
      ja: { description: 'ブラジルレスリング連盟' },
    },
  },
  {
    name: 'Surf Brasil',
    url: 'https://www.surfbrasil.org.br/',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    translations: {
      en: { description: 'Brazilian Surfing Confederation' },
      pt: { description: 'Confederação Brasileira de Surf' },
      ja: { description: 'ブラジルサーフィン連盟' },
    },
  },
  {
    name: 'Saltos Brasil',
    url: 'https://saltosbrasil.com/',
    stack: ['React SPA', 'Sass'],
    tags: ['thirdPartyDesign'],
    translations: {
      en: { description: 'Brazilian Diving Confederation' },
      pt: { description: 'Confederação Brasileira de Saltos Ornamentais' },
      ja: { description: 'ブラジル飛込連盟' },
    },
  },
  {
    name: 'FEEMG',
    url: 'https://feemg.com.br/',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    translations: {
      en: { description: 'Minas Gerais School Sports Federation' },
      pt: { description: 'Federação de Esportes Estudantis de Minas Gerais' },
      ja: { description: 'ミナスジェライス州学生スポーツ連盟' },
    },
  },
  {
    name: 'LPF',
    url: 'https://ligapaulistafutsal.com.br/',
    stack: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    translations: {
      en: { description: 'São Paulo State Futsal League' },
      pt: { description: 'Liga Paulista de Futsal' },
      ja: { description: 'サンパウロ州フットサルリーグ' },
    },
  },
  // Add 'rewrite' to `tags` on the other sites that were migrated off the legacy PHP.
]
