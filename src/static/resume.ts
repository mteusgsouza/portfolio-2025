import type { Locale } from '@/i18n/locale'
import { getYearsOfExperience } from '@/lib/experience'

type EntryTranslation = {
  title: string
  period: string
  bullets: string[]
}

export type ResumeEntry = {
  place: string
  translations: Record<Locale, EntryTranslation>
}

export function localizeEntry(entry: ResumeEntry, locale: Locale) {
  return { place: entry.place, ...entry.translations[locale] }
}

type LanguageTranslation = {
  name: string
  level: string
}

export type LanguageItem = {
  translations: Record<Locale, LanguageTranslation>
}

export function localizeLanguage(language: LanguageItem, locale: Locale) {
  return language.translations[locale]
}

export const profileTranslations: Record<Locale, { role: string; summary: string }> = {
  en: {
    role: 'Senior Web Developer',
    summary:
      'Front-end developer with over {years} years of experience building modern, responsive interfaces. Specialized in React.js, Next.js and TypeScript, with extensive experience in styling tools like Tailwind CSS and MUI. Passionate about creating intuitive, high-performance solutions that improve the user experience.',
  },
  pt: {
    role: 'Desenvolvedor Web Sênior',
    summary:
      'Desenvolvedor front-end com mais de {years} anos de experiência na construção de interfaces modernas e responsivas. Especializado em React.js, Next.js e TypeScript, com ampla experiência em ferramentas de estilização como Tailwind CSS e MUI. Apaixonado por criar soluções intuitivas e de alta performance que melhoram a experiência do usuário.',
  },
  ja: {
    role: 'シニアWebデベロッパー',
    summary:
      'モダンでレスポンシブなインターフェース構築に{years}年以上携わってきたフロントエンドエンジニアです。React.js、Next.js、TypeScriptを専門とし、Tailwind CSSやMUIといったスタイリングツールにも豊富な経験があります。ユーザー体験を向上させる直感的で高性能なソリューションの構築に情熱を持っています。',
  },
}

export function localizeProfile(locale: Locale) {
  const profile = profileTranslations[locale]
  return {
    role: profile.role,
    summary: profile.summary.replace('{years}', String(getYearsOfExperience())),
  }
}

export const experience: ResumeEntry[] = [
  {
    place: 'Bigmidia LTDA',
    translations: {
      en: {
        title: 'Senior Web Developer',
        period: 'Nov 2019 – present',
        bullets: [
          'My first job as a developer, where I had my first contact with PHP and Xamarin.',
          'After specializing in React, I led the adoption of the technology across several projects, including React Native apps and Next.js websites, always focused on improving the user experience.',
        ],
      },
      pt: {
        title: 'Desenvolvedor Web Sênior',
        period: 'Nov 2019 – atual',
        bullets: [
          'Meu primeiro emprego como desenvolvedor, onde tive meu primeiro contato com PHP e Xamarin.',
          'Após me especializar em React, liderei a adoção da tecnologia em diversos projetos, incluindo apps em React Native e sites em Next.js, sempre com foco em melhorar a experiência do usuário.',
        ],
      },
      ja: {
        title: 'シニアWebデベロッパー',
        period: '2019年11月 – 現在',
        bullets: [
          '開発者としての最初の仕事で、PHPとXamarinに初めて触れました。',
          'Reactを専門とするようになってからは、React NativeアプリやNext.jsサイトを含む複数のプロジェクトで技術導入を主導し、常にユーザー体験の向上を意識してきました。',
        ],
      },
    },
  },
  {
    place: 'Sr. Organize Serviços Auxiliares',
    translations: {
      en: {
        title: 'Legalization Assistant',
        period: 'Jun 2016 – Jul 2018',
        bullets: [
          'Worked alongside the accounting department, helping companies obtain certificates and permits and negative clearance certificates, and drafting company formation and closure contracts.',
        ],
      },
      pt: {
        title: 'Assistente de Legalização',
        period: 'Jun 2016 – Jul 2018',
        bullets: [
          'Atuei junto ao departamento de contabilidade, auxiliando empresas na obtenção de certidões, alvarás e certidões negativas de débito, além de redigir contratos de abertura e encerramento de empresas.',
        ],
      },
      ja: {
        title: '法務手続きアシスタント',
        period: '2016年6月 – 2018年7月',
        bullets: [
          '経理部門と連携し、企業の証明書・許可証・無債務証明書の取得を支援するとともに、会社設立・解散の契約書作成を担当しました。',
        ],
      },
    },
  },
]

export const education: ResumeEntry[] = [
  {
    place: 'Faculdade Pitágoras',
    translations: {
      en: {
        title: "Bachelor's Degree in Information Systems",
        period: '2015 – 2019',
        bullets: [
          'Project analysis and management',
          'Software engineering and programming logic',
          'Algorithms, data structures and databases',
          'Web development with a focus on UX/UI and interface design',
        ],
      },
      pt: {
        title: 'Bacharelado em Sistemas de Informação',
        period: '2015 – 2019',
        bullets: [
          'Análise e gestão de projetos',
          'Engenharia de software e lógica de programação',
          'Algoritmos, estruturas de dados e bancos de dados',
          'Desenvolvimento web com foco em UX/UI e design de interfaces',
        ],
      },
      ja: {
        title: '情報システム学士',
        period: '2015年 – 2019年',
        bullets: [
          'プロジェクト分析・管理',
          'ソフトウェア工学とプログラミングロジック',
          'アルゴリズム、データ構造、データベース',
          'UX/UIとインターフェースデザインに重点を置いたWeb開発',
        ],
      },
    },
  },
  {
    place: 'Faculdade Pitágoras',
    translations: {
      en: {
        title: 'Technical Degree in Graphic Computing',
        period: '2014 – 2015',
        bullets: [
          'Web programming, marketing and audiovisual production',
          '3D modeling, illustration, model making and graphic design',
        ],
      },
      pt: {
        title: 'Técnico em Computação Gráfica',
        period: '2014 – 2015',
        bullets: [
          'Programação web, marketing e produção audiovisual',
          'Modelagem 3D, ilustração, maquete e design gráfico',
        ],
      },
      ja: {
        title: 'グラフィックコンピューティング技術課程',
        period: '2014年 – 2015年',
        bullets: [
          'Webプログラミング、マーケティング、映像制作',
          '3Dモデリング、イラストレーション、模型制作、グラフィックデザイン',
        ],
      },
    },
  },
]

export const languages: LanguageItem[] = [
  {
    translations: {
      en: { name: 'Portuguese', level: 'Native' },
      pt: { name: 'Português', level: 'Nativo' },
      ja: { name: 'ポルトガル語', level: 'ネイティブ' },
    },
  },
  {
    translations: {
      en: { name: 'English', level: 'Advanced' },
      pt: { name: 'Inglês', level: 'Avançado' },
      ja: { name: '英語', level: '上級' },
    },
  },
  {
    translations: {
      en: { name: 'Japanese', level: 'N4 (JLPT) — Dec/2025' },
      pt: { name: 'Japonês', level: 'N4 (JLPT) — Dez/2025' },
      ja: { name: '日本語', level: 'N4(JLPT) — 2025年12月' },
    },
  },
]
