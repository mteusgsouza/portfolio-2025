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

export function localizeProject(
  project: Project,
  locale: Locale
): LocalizedProject {
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
          'dnd-kit',
          'Vaul',
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
          'Mobile-first PWA for gym workouts: build training sheets (one per weekday), log every set as it happens — load, reps or duration, RPE — and track progression over time with frequency and per-exercise charts.',
        highlights: [
          'Catalog of 88 pre-seeded exercises across 10 muscle groups; each exercise defines its own tracking unit (reps or duration), with optional distance in km for treadmill, bike, elliptical and rowing — the global catalog and exercise history stay intact when prescriptions are edited.',
          'One training sheet per weekday enforced by a database constraint, with drag-and-drop reordering (dnd-kit) both when building the sheet and during the workout itself, including full keyboard support — focus the handle, space to lift, arrow keys to move.',
          "Per-set logging during workout: load, the exercise's own unit (reps, duration or distance) and RPE independently per set, pre-filled from the last session or the prescription — the plan is a guideline, not a lock.",
          'Only checked exercises are saved: each one collapses and expands, the header shows live progress ("3 of 6 exercises"), and a confirmation dialog lists what will be left out before saving.',
          'History with average RPE per session, and a full progression curve per exercise reachable from the sheet, the session detail, or the catalog — kg for loaded exercises, reps for bodyweight, time for cardio and isometrics.',
          'Profile dashboard with a 12-week frequency chart (zero-training weeks shown, not hidden) and total time training counted from the first logged session ("14 days", "5 months", "1 year and 4 months").',
          'Mobile-first UI with 44px touch targets, bottom-sheet/dialog selectors, light/dark theme with a choice of 5 accent colors applied via a pre-hydration script to avoid flashing, and loading skeletons on database-backed routes.',
        ],
      },
      pt: {
        category: 'PWA',
        description:
          'PWA mobile-first para treinos de academia: monte fichas de treino (uma por dia da semana), registre cada série como ela acontece — carga, repetições ou tempo, RPE — e acompanhe a evolução ao longo do tempo com gráficos de frequência e progresso por exercício.',
        highlights: [
          'Catálogo com 88 exercícios pré-cadastrados em 10 grupos musculares; cada exercício define sua própria unidade de medida (repetições ou tempo), com distância opcional em km para esteira, bike, elíptico e remo — o catálogo global e o histórico permanecem intactos ao editar prescrições.',
          'Uma ficha por dia da semana, garantida por constraint no banco; reordenação por arrastar e soltar (dnd-kit) tanto na montagem da ficha quanto durante a execução do treino, com suporte completo a teclado — foco na alça, espaço para levantar, setas para mover.',
          'Registro por série durante o treino: carga, a medida do exercício (repetições, tempo ou distância) e RPE de forma independente por set, pré-preenchidos a partir da última sessão ou da prescrição — o plano é referência, não trava.',
          'Só o que for marcado como feito entra na sessão: os exercícios recolhem e expandem, o cabeçalho mostra o progresso ("3 de 6 exercícios") e um diálogo lista o que ficará de fora antes de gravar.',
          'Histórico com esforço médio (RPE) por sessão, e curva de progressão por exercício acessível pela ficha, pelo detalhe da sessão ou pelo catálogo — kg para exercícios com carga, repetições para peso corporal, tempo para cardio e isometria.',
          'Perfil com frequência das últimas 12 semanas (semanas sem treino aparecem como zero) e tempo de treino contado desde o primeiro registro ("14 dias", "5 meses", "1 ano e 4 meses").',
          'UI mobile-first com áreas de toque de 44px, seletores em bottom sheet/modal, tema claro/escuro com cor de destaque à escolha entre 5 opções (aplicada antes da hidratação, sem piscar), e skeletons de carregamento nas rotas que consultam o banco.',
        ],
      },
      ja: {
        category: 'PWA',
        description:
          'ジムトレーニング向けのモバイルファーストPWA。曜日ごとのトレーニングシートを作成し、負荷・回数（または時間）・RPEをセットごとにその場で記録。頻度と種目別の進捗をグラフで長期的に確認できます。',
        highlights: [
          '10の筋群にわたる88種目の事前登録カタログ。種目ごとに測定単位（回数/時間）を保持し、有酸素マシン（トレッドミル・バイク・エリプティカル・ローイング）ではオプションで距離（km）も記録。処方を変更してもグローバルカタログとエクササイズ履歴は影響を受けません。',
          '曜日ごとに1つのトレーニングシート（データベース制約で保証）。dnd-kitによるドラッグ＆ドロップで種目を並べ替え可能。シート作成画面だけでなく実行中のワークアウト画面でも対応し、ハンドルへのフォーカス・スペースキーでの選択・矢印キーでの移動というキーボード操作にも対応。',
          'セットごとの記録：負荷・種目固有の単位（回数・時間・距離）・RPEを個別に入力。前回セッションまたは目標処方から自動入力され、プランはあくまで目安として柔軟に扱えます。',
          'チェックした種目だけがセッションとして保存される仕組み。各種目は折りたたみ可能で、ヘッダーに「6種目中3種目完了」の進捗バーを表示。保存前には除外される種目を一覧するダイアログが確認を促します。',
          'セッション別履歴に平均RPEを表示し、種目ごとの進捗カーブはシート・セッション詳細・カタログのいずれからも参照可能。記録単位は負荷種目でkg、自重種目で回数、有酸素・アイソメトリックで時間。',
          'プロフィール画面では直近12週間の頻度グラフ（トレーニングが0の週も表示）と、初回記録からのトレーニング継続期間（「14日」「5か月」「1年4か月」など）を表示。',
          'モバイルファーストUI：44pxのタッチターゲット、ボトムシート/モーダルの選択UI、ライト/ダークテーマに加え5色から選べるアクセントカラー（ハイドレーション前のスクリプトでちらつきを防止）、DBアクセスを伴うルートにはスケルトン表示。',
        ],
      },
    },
  },
  // Next projects: copy the block above, bump `num` and adjust the fields.
  // `image`, `live` and `github` are optional.
]
