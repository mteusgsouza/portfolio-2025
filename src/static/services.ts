import type { Locale } from '@/i18n/locale'

type ServiceTranslation = {
  title: string
  description: string
}

export type Service = {
  num: string
  link: string
  translations: Record<Locale, ServiceTranslation>
}

export const services: Service[] = [
  {
    num: '01',
    link: '',
    translations: {
      en: {
        title: 'Web Development',
        description:
          'I specialize in building websites using modern technologies and frameworks like React, Next.js, TailwindCSS and Material-UI.',
      },
      pt: {
        title: 'Desenvolvimento Web',
        description:
          'Sou especializado em construir sites usando tecnologias e frameworks modernos como React, Next.js, TailwindCSS e Material-UI.',
      },
      ja: {
        title: 'Web開発',
        description:
          'React、Next.js、TailwindCSS、Material-UIなどの最新の技術やフレームワークを使ったウェブサイト構築を得意としています。',
      },
    },
  },
  {
    num: '02',
    link: '',
    translations: {
      en: {
        title: 'Mobile Development',
        description:
          'I have experience building mobile apps using React Native and Expo, which allows me to build cross-platform apps for both iOS and Android.',
      },
      pt: {
        title: 'Desenvolvimento Mobile',
        description:
          'Tenho experiência construindo aplicativos mobile usando React Native e Expo, o que me permite criar apps multiplataforma para iOS e Android.',
      },
      ja: {
        title: 'モバイル開発',
        description:
          'React NativeとExpoを使ったモバイルアプリ開発の経験があり、iOSとAndroid両方に対応したクロスプラットフォームアプリを構築できます。',
      },
    },
  },
  {
    num: '03',
    link: '',
    translations: {
      en: {
        title: 'UI/UX Design',
        description:
          'I like to design clean and modern user interfaces that are easy to use and visually appealing.',
      },
      pt: {
        title: 'Design UI/UX',
        description:
          'Gosto de projetar interfaces limpas e modernas, fáceis de usar e visualmente atraentes.',
      },
      ja: {
        title: 'UI/UXデザイン',
        description:
          '使いやすく見た目にも美しい、シンプルでモダンなユーザーインターフェースのデザインを心がけています。',
      },
    },
  },
  {
    num: '04',
    link: '',
    translations: {
      en: {
        title: 'SEO Optimization',
        description:
          'I understand the importance of SEO and can help you optimize your website to rank higher on search engines.',
      },
      pt: {
        title: 'Otimização de SEO',
        description:
          'Entendo a importância do SEO e posso ajudar a otimizar seu site para obter posições melhores nos mecanismos de busca.',
      },
      ja: {
        title: 'SEO対策',
        description:
          'SEOの重要性を理解しており、検索エンジンでの上位表示を目指したウェブサイトの最適化をサポートします。',
      },
    },
  },
]
