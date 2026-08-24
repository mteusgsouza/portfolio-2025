import type { Locale } from '@/i18n/locale'

export type StackGroup = {
  label: string
  items: string[]
}

type ProjectTranslation = {
  category: string
  description: string
  /** Architecture and engineering decisions, listed inside the card accordion. */
  highlights: string[]
}

export type Project = {
  num: string
  title: string
  stack: StackGroup[]
  /** Cover screenshot under `public/assets/work/`. Without it the card shows a placeholder. */
  image?: string
  /** Extra screenshots for the gallery viewer. Defaults to just `image` when omitted. */
  images?: string[]
  live?: string
  github?: string
  translations: Record<Locale, ProjectTranslation>
}

export type LocalizedProject = Project & ProjectTranslation

export function localizeProject(project: Project, locale: Locale): LocalizedProject {
  return { ...project, ...project.translations[locale] }
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'UAI Economizei',
    stack: [
      {
        label: 'Front',
        items: [
          'Next.js 16',
          'React 19',
          'TypeScript',
          'Tailwind CSS 4',
          'shadcn/ui',
          'TanStack Query',
          'TanStack Form',
        ],
      },
      {
        label: 'Back',
        items: [
          'NestJS 11',
          'Prisma 7',
          'PostgreSQL',
          'class-validator',
          'Jest',
        ],
      },
      {
        label: 'CMS & Auth',
        items: ['Payload CMS 3', 'Firebase Auth', 'Firebase Admin'],
      },
      {
        label: 'Infra',
        items: [
          'Turborepo',
          'pnpm Workspaces',
          'Vercel',
          'Vercel Blob',
          'Render',
        ],
      },
    ],
    image: '/assets/work/uai-economizei/01-home.png',
    images: [
      '/assets/work/uai-economizei/01-home.png',
      '/assets/work/uai-economizei/04-carrinho-produtos.png',
      '/assets/work/uai-economizei/05-meus-pedidos.png',
      '/assets/work/uai-economizei/06-minha-conta.png',
      '/assets/work/uai-economizei/02-dashboard-home.png',
      '/assets/work/uai-economizei/03-dashboard-produto.png',
    ],
    live: 'https://uai-economizei-monorepo-front.vercel.app/',
    github: 'https://github.com/mteusgsouza/uai-economizei-monorepo',
    translations: {
      en: {
        category: 'E-commerce',
        description:
          'A full online store for discounted products: catalog by category and brand, best-seller and new-arrival showcases, customer area, cart and checkout. Storefront, API and admin panel built as a single monorepo.',
        highlights: [
          'Monorepo powered by Turborepo and pnpm workspaces, holding the storefront, the API and shared packages for UI, database access and ESLint/TypeScript configuration.',
          'Payload CMS 3 embedded in the Next app itself, backed by PostgreSQL with versioned migrations, managing products, categories, brands, promotions, pages and posts.',
          'Custom admin built on top of Payload: metrics dashboard, order and customer management, a visual HTML editor and custom fields for card fees, promotion scheduling and store theming.',
          'Firebase authentication — sign in, sign up, Google Sign-In and password recovery on the client, with tokens verified on the back end by a Firebase Admin guard.',
          'REST API in NestJS with Prisma and PostgreSQL, DTOs validated through class-validator, unit tests in Jest and consumption from the front end via a BFF route in Next.',
          'Multi-step checkout with shipping cost by ZIP code, in-store pickup and payment by PIX, bank slip or installment credit card.',
          'Web push notifications with web-push and a service worker, plus sitemap, robots and on-demand revalidation for SEO.',
        ],
      },
      pt: {
        category: 'E-commerce',
        description:
          'Uma loja online completa para produtos com desconto: catálogo por categoria e marca, vitrines de mais vendidos e novidades, área do cliente, carrinho e checkout. Storefront, API e painel administrativo construídos em um único monorepo.',
        highlights: [
          'Monorepo com Turborepo e pnpm workspaces, reunindo o storefront, a API e pacotes compartilhados de UI, acesso ao banco de dados e configuração de ESLint/TypeScript.',
          'Payload CMS 3 embutido na própria aplicação Next, com PostgreSQL e migrations versionadas, gerenciando produtos, categorias, marcas, promoções, páginas e posts.',
          'Painel administrativo customizado sobre o Payload: dashboard de métricas, gestão de pedidos e clientes, editor visual de HTML e campos customizados para taxas de cartão, agendamento de promoções e tema da loja.',
          'Autenticação com Firebase — login, cadastro, login com Google e recuperação de senha no cliente, com tokens verificados no back end por um guard do Firebase Admin.',
          'API REST em NestJS com Prisma e PostgreSQL, DTOs validados com class-validator, testes unitários com Jest e consumo pelo front end via uma rota BFF no Next.',
          'Checkout em múltiplas etapas com cálculo de frete por CEP, retirada na loja e pagamento via PIX, boleto ou cartão de crédito parcelado.',
          'Notificações push com web-push e service worker, além de sitemap, robots e revalidação sob demanda para SEO.',
        ],
      },
      ja: {
        category: 'ECサイト',
        description:
          '割引商品を扱うオンラインストア一式。カテゴリー・ブランド別のカタログ、ベストセラーや新着商品のショーケース、マイページ、カート、決済までを提供。ストアフロント・API・管理画面を単一のモノレポで構築。',
        highlights: [
          'Turborepoとpnpm workspacesによるモノレポ構成。ストアフロント、API、UI・DBアクセス・ESLint/TypeScript設定を共有するパッケージをまとめて管理。',
          'Payload CMS 3をNextアプリ自体に組み込み、バージョン管理されたマイグレーションを備えたPostgreSQLを利用。商品、カテゴリー、ブランド、プロモーション、ページ、投稿を管理。',
          'Payload上にカスタム管理画面を構築。指標ダッシュボード、注文・顧客管理、ビジュアルHTMLエディター、カード手数料やプロモーションのスケジューリング、ストアのテーマ設定用のカスタムフィールドを搭載。',
          'Firebase認証を採用 — クライアント側でログイン、新規登録、Googleログイン、パスワード再設定を実装し、バックエンドではFirebase Adminガードでトークンを検証。',
          'NestJSとPrisma、PostgreSQLによるREST API。class-validatorでDTOを検証し、Jestで単体テストを実施。フロントエンドからはNextのBFFルート経由で利用。',
          '郵便番号による送料計算、店舗受け取り、PIX・銀行振込・分割クレジットカード決済に対応したマルチステップのチェックアウト。',
          'web-pushとservice workerによるWebプッシュ通知に加え、SEO対策としてサイトマップ、robots、オンデマンド再検証にも対応。',
        ],
      },
    },
  },
  {
    num: '02',
    title: 'Projeto Fitness',
    stack: [
      {
        label: 'Front',
        items: [
          'Next.js 16',
          'React 19',
          'TypeScript 5',
          'Tailwind CSS 4',
          'shadcn/ui',
          'Recharts',
          'React Hook Form',
          'Zod',
        ],
      },
      {
        label: 'Back',
        items: ['Server Actions', 'Prisma 6', 'PostgreSQL'],
      },
      {
        label: 'Auth',
        items: ['Clerk 7'],
      },
      {
        label: 'Infra',
        items: ['Vercel', 'Neon (PostgreSQL)'],
      },
    ],
    image: '/assets/work/projeto-fitness/01-home.png',
    images: [
      '/assets/work/projeto-fitness/01-home.png',
      '/assets/work/projeto-fitness/02-executando-treinamento.png',
      '/assets/work/projeto-fitness/03-historico-treino.png',
      '/assets/work/projeto-fitness/04-perfil.png',
    ],
    live: 'https://projeto-fitness-five.vercel.app/sign-in',
    github: 'https://github.com/mteusgsouza/projeto-fitness',
    translations: {
      en: {
        category: 'PWA',
        description:
          'Mobile-first PWA for gym workouts: mount workout sheets (one per weekday), log what was actually executed (load, reps, RPE) series by series, and track progression over time with charts for frequency and per-exercise evolution.',
        highlights: [
          '88 pre-seeded exercises across 10 muscle groups with descriptions and difficulty levels; global catalog stays intact when users modify their prescriptions, preserving exercise history.',
          'One training sheet per weekday enforced by database constraint; edit the prescription, add or swap exercises, and the app keeps the execution history separate and unchanged.',
          'Per-series logging during workout: load, reps, and RPE independently per set, with fields pre-filled from the last session or the target prescription — the plan is a guideline, not a lock.',
          'Mobile-first UI with 44px touch targets, bottom navigation bar on mobile / top bar on desktop, selectors as bottom sheets on mobile / modals on desktop, and light/dark theme with emerald palette.',
          'Workout history by session and per-exercise graphs: frequency in the last 12 weeks (every week shown, so zero weeks are visible) and absolute progression since first record — kg for loaded exercises, reps for bodyweight.',
          'Retroactive session logging with editable date, time and notes; the app suggests updating the prescription if execution diverges from the target.',
        ],
      },
      pt: {
        category: 'PWA',
        description:
          'PWA mobile-first para treinos de academia: monte fichas de treino (uma por dia da semana), registre o que foi realmente executado (carga, repetições, RPE) série por série, e acompanhe a evolução ao longo do tempo com gráficos de frequência e progresso por exercício.',
        highlights: [
          '88 exercícios pré-cadastrados em 10 grupos musculares, com descrições e níveis de dificuldade; o catálogo global permanece intacto quando os usuários modificam suas prescrições, preservando o histórico dos exercícios.',
          'Uma ficha de treino por dia da semana, garantida por constraint no banco de dados; ao editar a prescrição, adicionar ou trocar exercícios, o app mantém o histórico de execução separado e inalterado.',
          'Registro por série durante o treino: carga, repetições e RPE de forma independente por set, com campos pré-preenchidos a partir da última sessão ou da prescrição alvo — o plano é uma referência, não uma trava.',
          'UI mobile-first com áreas de toque de 44px, barra de navegação inferior no mobile / superior no desktop, seletores como bottom sheets no mobile / modais no desktop, e tema claro/escuro com paleta esmeralda.',
          'Histórico de treinos por sessão e gráficos por exercício: frequência nas últimas 12 semanas (todas as semanas são exibidas, inclusive as com zero treinos) e progressão absoluta desde o primeiro registro — kg para exercícios com carga, repetições para exercícios de peso corporal.',
          'Registro retroativo de sessões com data, horário e notas editáveis; o app sugere atualizar a prescrição quando a execução diverge do alvo.',
        ],
      },
      ja: {
        category: 'PWA',
        description:
          'ジムトレーニング向けのモバイルファーストPWA。曜日ごとのトレーニングシートを作成し、実際に行ったセットごとの負荷・回数・RPEを記録。頻度と種目別の進捗をグラフで長期的に確認できます。',
        highlights: [
          '10の筋群にわたる88種類の事前登録済みエクササイズ(説明・難易度付き)。ユーザーが処方を変更してもグローバルカタログは影響を受けず、エクササイズ履歴が保持されます。',
          '曜日ごとに1つのトレーニングシートをデータベース制約で保証。処方を編集したり種目を追加・変更しても、実行履歴は分離されたまま変更されません。',
          'トレーニング中はセットごとに負荷・回数・RPEを個別に記録。前回のセッションまたは目標処方から自動入力されるため入力の手間が少なく、プランはあくまで目安として柔軟に扱えます。',
          '44pxのタッチターゲットを備えたモバイルファーストUI。モバイルでは下部ナビゲーション、デスクトップでは上部バー、選択UIはモバイルでボトムシート/デスクトップでモーダルに切り替え。エメラルドカラーのライト/ダークテーマにも対応。',
          'セッション別のトレーニング履歴と種目別グラフを提供。直近12週間の頻度(トレーニングが0の週も含めて全て表示)と、初回記録からの絶対的な進捗(負荷種目はkg、自重種目は回数)を確認可能。',
          '日時やメモを編集できる遡及的なセッション記録に対応。実行内容が目標処方と乖離した場合はプランの更新を提案します。',
        ],
      },
    },
  },
  // Next projects: copy the block above, bump `num` and adjust the fields.
  // `image`, `live` and `github` are optional.
]
