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
  /** Client or employer this was built for. Omitted means a personal project built end to end. */
  company?: string
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
          'Zod',
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
        label: 'IA',
        items: [
          '@anthropic-ai/sdk',
          'DeepSeek (deepseek-flash)',
          'Claude Haiku',
        ],
      },
      {
        label: 'Infra',
        items: [
          'Turborepo',
          'pnpm Workspaces',
          'Vercel',
          'Vercel Blob',
          'Neon (PostgreSQL)',
          'Render',
        ],
      },
    ],
    image: '/assets/work/uai-economizei/01-home.png',
    images: [
      '/assets/work/uai-economizei/01-home.png',
      '/assets/work/uai-economizei/07-assistente-busca.png',
      '/assets/work/uai-economizei/08-chat-ajuda.png',
      '/assets/work/uai-economizei/04-carrinho-produtos.png',
      '/assets/work/uai-economizei/05-meus-pedidos.png',
      '/assets/work/uai-economizei/06-minha-conta.png',
      '/assets/work/uai-economizei/02-dashboard-home.png',
      '/assets/work/uai-economizei/03-dashboard-produto.png',
    ],
    live: 'https://uaieconomizei.mateusgsouza.com.br/',
    github: 'https://github.com/mteusgsouza/uai-economizei-monorepo',
    translations: {
      en: {
        category: 'E-commerce',
        description:
          'A full online store for discounted products: catalog by category and brand, typo-tolerant search, best-seller and new-arrival showcases, customer area, cart and checkout — plus a site-wide help chat and an AI search assistant that steps in when a search comes back empty. Storefront, API and admin panel built as a single monorepo.',
        highlights: [
          'Monorepo powered by Turborepo and pnpm workspaces, holding the storefront, the API and shared packages for UI, database access and ESLint/TypeScript configuration.',
          "Payload CMS 3 embedded in the Next app itself, backed by PostgreSQL on Neon with versioned migrations, managing products, categories, brands, promotions, pages and posts. The public catalog is read through Payload's Local API straight from server components — no HTTP in between.",
          "AI search assistant: when a search comes back empty, a mini-chat asks what the customer is after and answers with real products. The model never writes a product or a price — it calls the site search as a tool, and the cards come from the server, not from the AI's text.",
          "A brake before any token is spent: 10 messages per hour per browser (signed HttpOnly cookie), 30 per hour per IP (a hidden collection that stores only the IP's HMAC), 5 questions per conversation, messages capped at 300 characters and answers at 700 tokens. Past any limit the chat switches itself off for the session and sends the customer back to the normal search.",
          'The AI provider is an environment variable: the same @anthropic-ai/sdk points at DeepSeek (deepseek-flash) through its compatible endpoint, or at Anthropic (Claude Haiku). With no key at all the assistant simply does not show up and the rest of the store runs untouched.',
          'Site-wide help chat, this one without AI: last purchase, order status, in-store pickup and the support channels (WhatsApp, phone, email, opening hours) coming from the admin — each channel only appears once it is filled in.',
          'Hand-written tolerant search: it folds accents, plurals, typos and units — inches, tons and the like reach the index in a single format — with synonym groups editable in the admin and a generator that asks the AI for those groups for the shopkeeper to review, with the last update date in plain sight.',
          'Custom admin built on top of Payload: metrics dashboard, order and customer management, a visual HTML editor, spec sheets per product model (number, text, yes/no and list fields, with units) and a page builder with featured-product, promotion, comparison, image-with-text and video blocks — a page created in the admin goes live without a deploy, and the sitemap is rebuilt on save.',
          'Firebase authentication — sign in, sign up, Google Sign-In and password recovery on the client, with tokens verified on the back end by a Firebase Admin guard. The browser never talks to the Nest API directly: it goes through a BFF in Next that hides the URL and only lets an allowlist of customer routes through.',
          'REST API in NestJS with Prisma and PostgreSQL, DTOs validated through class-validator and unit tests in Jest, handling orders, customers, addresses, ZIP code lookup, uploads and push.',
          'Multi-step checkout with shipping cost by ZIP code, in-store pickup and payment by PIX, bank slip or installment credit card; web push notifications with web-push and a service worker, plus sitemap, robots, Open Graph and JSON-LD for SEO.',
        ],
      },
      pt: {
        category: 'E-commerce',
        description:
          'Uma loja online completa para produtos com desconto: catálogo por categoria e marca, busca tolerante a erro de digitação, vitrines de mais vendidos e novidades, área do cliente, carrinho e checkout — com um chat de ajuda em todo o site e um assistente de busca com IA que entra quando a busca não acha nada. Storefront, API e painel administrativo construídos em um único monorepo.',
        highlights: [
          'Monorepo com Turborepo e pnpm workspaces, reunindo o storefront, a API e pacotes compartilhados de UI, acesso ao banco de dados e configuração de ESLint/TypeScript.',
          'Payload CMS 3 embutido na própria aplicação Next, com PostgreSQL na Neon e migrations versionadas, gerenciando produtos, categorias, marcas, promoções, páginas e posts. O catálogo público é lido pela Local API do Payload direto nos server components — sem HTTP no meio.',
          'Assistente de busca com IA: quando a busca não encontra nada, um mini-chat pergunta o que o cliente procura e responde com produtos de verdade. O modelo não escreve produto nem preço — ele chama a busca do site como tool, e os cartões vêm do servidor, não do texto da IA.',
          'Freio antes de gastar token: 10 mensagens por hora por navegador (cookie HttpOnly assinado), 30 por hora por IP (coleção oculta que guarda só o HMAC do IP), 5 perguntas por conversa, mensagem de até 300 caracteres e resposta de até 700 tokens. Estourou qualquer limite, o chat se desliga na sessão e devolve o cliente para a busca normal.',
          'Provedor de IA trocável por variável de ambiente: o mesmo @anthropic-ai/sdk aponta para a DeepSeek (deepseek-flash) pelo endpoint compatível ou para a Anthropic (Claude Haiku). Sem chave nenhuma, o assistente simplesmente não aparece e o resto da loja continua inteiro.',
          'Chat de ajuda em todo o site, esse sem IA: última compra, status dos pedidos, retirada na loja e os canais de atendimento (WhatsApp, telefone, e-mail, horário) vindos do admin — cada canal só aparece se estiver preenchido.',
          'Busca tolerante escrita à mão: normaliza acento, plural, erro de digitação e unidade — polegada, tonelada e afins chegam ao índice num formato só —, com grupos de sinônimos editáveis no admin e um gerador que pede os grupos à IA para o lojista revisar, com a data da última atualização à vista.',
          'Painel administrativo customizado sobre o Payload: dashboard de métricas, gestão de pedidos e clientes, editor visual de HTML, ficha técnica por modelo de produto (campos de número, texto, sim/não e lista, com unidade) e um construtor de páginas com blocos de destaque, promoção, comparação, imagem com texto e vídeo — página criada no admin entra no ar sem deploy, com o sitemap refeito ao salvar.',
          'Autenticação com Firebase — login, cadastro, login com Google e recuperação de senha no cliente, com tokens verificados no back end por um guard do Firebase Admin. O navegador nunca fala com a API Nest direto: passa por um BFF no Next que esconde a URL e só libera uma allowlist de rotas de cliente.',
          'API REST em NestJS com Prisma e PostgreSQL, DTOs validados com class-validator e testes unitários com Jest, cuidando de pedidos, clientes, endereços, consulta de CEP, upload e push.',
          'Checkout em múltiplas etapas com cálculo de frete por CEP, retirada na loja e pagamento via PIX, boleto ou cartão de crédito parcelado; notificações push com web-push e service worker, além de sitemap, robots, Open Graph e JSON-LD para SEO.',
        ],
      },
      ja: {
        category: 'ECサイト',
        description:
          '割引商品を扱うオンラインストア一式。カテゴリー・ブランド別のカタログ、表記ゆれや打ち間違いに強い検索、ベストセラーや新着商品のショーケース、マイページ、カート、決済に加え、サイト全体で使えるヘルプチャットと、検索が何も見つけられないときに登場するAI検索アシスタントを搭載。ストアフロント・API・管理画面を単一のモノレポで構築。',
        highlights: [
          'Turborepoとpnpm workspacesによるモノレポ構成。ストアフロント、API、UI・DBアクセス・ESLint/TypeScript設定を共有するパッケージをまとめて管理。',
          'Payload CMS 3をNextアプリ自体に組み込み、Neon上のPostgreSQLとバージョン管理されたマイグレーションで、商品・カテゴリー・ブランド・プロモーション・ページ・投稿を管理。公開カタログはサーバーコンポーネントからPayloadのLocal APIで直接読み取り、HTTPを介しません。',
          'AI検索アシスタント：検索が何もヒットしないとき、ミニチャットが何を探しているのかを尋ね、実在する商品で答えます。モデルが商品名や価格を書くことはありません — サイトの検索をツールとして呼び出し、表示されるカードはAIのテキストではなくサーバーから返ります。',
          'トークンを使う前のブレーキ：ブラウザごとに1時間10メッセージ（署名付きHttpOnly Cookie）、IPごとに1時間30メッセージ（IPのHMACだけを保存する非公開コレクション）、1会話あたり5問、メッセージは300文字まで、回答は700トークンまで。いずれかの上限を超えるとチャットはそのセッションで自ら停止し、通常の検索へ案内します。',
          'AIプロバイダーは環境変数で切り替え：同じ@anthropic-ai/sdkを、互換エンドポイント経由でDeepSeek（deepseek-flash）にも、Anthropic（Claude Haiku）にも向けられます。キーが1つもなければアシスタントは表示されず、ストアの他の部分はそのまま動作します。',
          'サイト全体で使えるヘルプチャット（こちらはAIなし）：直近の購入、注文状況、店舗受け取り、そして管理画面から取得するサポート窓口（WhatsApp・電話・メール・受付時間）。入力済みの窓口だけが表示されます。',
          '自前で書いた表記ゆれに強い検索：アクセント・複数形・打ち間違い・単位を正規化し（インチやトンなどは単一の形式でインデックスに入ります）、同義語グループは管理画面で編集可能。AIに同義語グループを提案させる生成機能もあり、店主が内容を確認できます。最終更新日も表示されます。',
          'Payload上に構築したカスタム管理画面：指標ダッシュボード、注文・顧客管理、ビジュアルHTMLエディター、商品モデルごとのスペック表（数値・テキスト・はい/いいえ・選択肢の項目、単位付き）、そして注目商品・プロモーション・比較・画像＋テキスト・動画のブロックを備えたページビルダー。管理画面で作ったページはデプロイなしで公開され、保存時にサイトマップが再生成されます。',
          'Firebase認証を採用 — クライアント側でログイン、新規登録、Googleログイン、パスワード再設定を実装し、バックエンドではFirebase Adminガードでトークンを検証。ブラウザがNest APIと直接やり取りすることはなく、URLを隠し顧客向けルートのみを許可リストで通すNextのBFFを経由します。',
          'NestJSとPrisma、PostgreSQLによるREST API。class-validatorでDTOを検証し、Jestで単体テストを実施。注文・顧客・住所・郵便番号検索・アップロード・プッシュ通知を担当します。',
          '郵便番号による送料計算、店舗受け取り、PIX・銀行振込・分割クレジットカード決済に対応したマルチステップのチェックアウト。web-pushとservice workerによるWebプッシュ通知に加え、SEO対策としてサイトマップ、robots、Open Graph、JSON-LDにも対応。',
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
    live: 'https://treino.mateusgsouza.com.br/sign-in',
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
  {
    num: '03',
    title: 'Bubble',
    stack: [
      {
        label: 'Front',
        items: [
          'One 1.14',
          'Tamagui 2',
          'React 19.2',
          'React Native 0.83',
          'Expo 55',
          'TypeScript 5',
          'TanStack Query 5',
        ],
      },
      {
        label: 'Dados',
        items: ['Drizzle ORM 1.0', 'PostgreSQL 17', 'Valibot'],
      },
      {
        label: 'Auth, Pagamento & Mídia',
        items: ['Better Auth 1.3', 'Stripe 22', 'Cloudflare R2'],
      },
      {
        label: 'Infra',
        items: ['Bun 1.3', 'Docker', 'Caddy', 'AWS Lightsail', 'EAS'],
      },
      {
        label: 'Testes',
        items: ['Vitest', 'Playwright'],
      },
    ],
    image: '/assets/work/bubble/02-feed-mobile.png',
    images: [
      '/assets/work/bubble/07-login.png',
      '/assets/work/bubble/01-feed-web.png',
      '/assets/work/bubble/02-feed-mobile.png',
      '/assets/work/bubble/03-curso.png',
      '/assets/work/bubble/04-post-comentarios.png',
      '/assets/work/bubble/05-admin-visao-geral.png',
      '/assets/work/bubble/06-admin-editar-post.png',
    ],
    live: 'https://bubble.mateusgsouza.com.br',
    github: 'https://github.com/mteusgsouza/tamagui-bubble-app',
    translations: {
      en: {
        category: 'Cross-platform app',
        description:
          'Subscription content platform for a single creator: a feed with text, photo, video and audio, courses split into modules and lessons, content either open or locked behind a subscription, and a web admin to publish all of it. Web, iOS and Android from one codebase.',
        highlights: [
          'One codebase for web, iOS and Android: One handles file-based routing and API routes across all three targets, and Tamagui compiles the same component to the DOM and to React Native, with real themes and tokens.',
          'One endpoint per screen, with React Query on the client: the feed is one request, a post is another, and each spends a constant number of queries, never proportional to the rows. The reactive sync engine that ran before was dropped because the logical replication slot it required kept the database from auto-suspending and burned the whole quota; feed load came down to 22 ms.',
          'The paywall is decided on the server: the rules live in contentAccess.ts as a pure predicate over the already-loaded entitlement, testable without a database and covered by 20 unit cases. The JWT carries identity, not access rights.',
          'Locked content still shows up. A subscriber post or course reaches everyone as a storefront: title, cover, teaser and, on a course, the full curriculum. What does not reach them is the product itself, the post body, the media and the lesson. An invisible catalogue converts nobody.',
          'Feed with text, photo, video and audio: a carousel of up to 9 photos with a counter, a custom player (web and native) with poster, likes, comments and replies, and denormalized counters kept in sync by the mutations themselves.',
          'Courses as course to modules to lessons, with per-lesson progress that resumes where you stopped, completes itself at the end, and a freePreview flag to open a single lesson inside a paid course.',
          'Billing through Stripe behind an adapter: hosted checkout for both recurring subscriptions and one-off purchases, the customer portal for cancelling and changing cards, and a webhook with signature verification and payment deduplication, where the event-to-status map is a pure function with tests. A plan is never deleted, only taken off sale, because old posts still reference it and subscriptions were already sold against it.',
          'Media uploaded straight from the browser or app to Cloudflare R2 through a signed URL, so no byte crosses the app server; reads are a 302 with the subscription gate re-checked before signing, with per-type limits (photo 25 MB, audio 200 MB, video 1 GB) and a signature TTL of 5 minutes for images and 4 hours for video and audio.',
          'Web admin with two permission levels: content management for the creator, and a People and Plans area restricted to admins, because payments live in a private table. Production runs on a single AWS Lightsail box, with the app, Postgres 17 and Caddy on the same machine and media on R2, covered by 158 unit tests in Vitest and 15 integration tests in Playwright.',
        ],
      },
      pt: {
        category: 'App multiplataforma',
        description:
          'Plataforma de conteúdo por assinatura, de um criador só: feed com texto, foto, vídeo e áudio, cursos com módulos e aulas, conteúdo aberto ou trancado para assinantes, e um admin web para publicar tudo isso. Web, iOS e Android com um código só.',
        highlights: [
          'Um código só para web, iOS e Android: o One cuida das rotas por arquivo e das API routes nas três plataformas, e o Tamagui compila o mesmo componente para o DOM e para o React Native, com tema e tokens de verdade.',
          'Um endpoint por tela, com React Query no cliente: o feed é uma requisição, o post é outra, e cada uma gasta um número constante de queries, nunca proporcional às linhas. O motor de sync reativo que rodava antes saiu do projeto porque o slot de replicação lógica que ele exigia impedia o autosuspend do banco e queimava a cota inteira; a carga do feed caiu para 22 ms.',
          'O paywall é decidido no servidor: as regras vivem em contentAccess.ts como predicado puro sobre o entitlement já carregado, testável sem banco e coberto por 20 casos de unidade. O JWT carrega identidade, não direito de acesso.',
          'Conteúdo trancado aparece. Post e curso de assinante chegam a todo mundo como vitrine: título, capa, isca e, no curso, o currículo inteiro. O que não chega é o produto — corpo do post, mídia e aula. Catálogo invisível não converte ninguém.',
          'Feed com texto, foto, vídeo e áudio: carrossel de até 9 fotos com indicador, player próprio (web e nativo) com poster, curtidas, comentários e respostas, e contadores desnormalizados mantidos pelas próprias mutations.',
          'Cursos em curso → módulos → aulas, com progresso por aula que retoma de onde parou, conclui sozinho no fim, e amostra grátis (freePreview) para liberar uma aula dentro de um curso pago.',
          'Cobrança pelo Stripe atrás de um adapter: checkout hospedado tanto em assinatura recorrente quanto em compra avulsa, portal do cliente para cancelar e trocar cartão, e webhook com verificação de assinatura e deduplicação de pagamento, onde o mapa de evento para status é função pura e tem teste. Plano nunca é apagado, só sai de venda, porque ainda é referência de posts antigos e de assinaturas já vendidas.',
          'Mídia enviada direto do navegador ou do app para o Cloudflare R2 com URL assinada, então nenhum byte atravessa o servidor da aplicação; a leitura é um 302 com o gate de assinatura refeito antes de assinar, com limites por tipo (foto 25 MB, áudio 200 MB, vídeo 1 GB) e TTL de 5 minutos para imagem e 4 horas para vídeo e áudio.',
          'Admin web com dois níveis de permissão: gestão de conteúdo para o criador, e a área de Pessoas e Planos restrita a administradores, porque pagamento é tabela privada. Em produção roda tudo numa AWS Lightsail — app, Postgres 17 e Caddy na mesma máquina, com a mídia no R2 —, coberto por 158 testes unitários em Vitest e 15 de integração em Playwright.',
        ],
      },
      ja: {
        category: 'クロスプラットフォームアプリ',
        description:
          'クリエイター1人のためのサブスクリプション型コンテンツ配信プラットフォーム。テキスト・写真・動画・音声のフィード、モジュールとレッスンで構成される講座、公開または購読者限定のコンテンツ、そしてそれらを投稿するWeb管理画面。Web・iOS・Androidを単一のコードベースで実装。',
        highlights: [
          'Web・iOS・Androidを単一コードベースで実装。Oneが3プラットフォーム共通のファイルベースルーティングとAPIルートを担い、TamaguiがDOMとReact Nativeの両方へ同じコンポーネントをコンパイル。テーマとトークンは本物のまま扱えます。',
          '画面ごとに1つのエンドポイントを用意し、クライアントはReact Queryで取得します。フィードは1リクエスト、投稿はもう1リクエストで、発行するクエリ数は行数に比例せず常に一定です。以前使っていたリアクティブ同期エンジンは、必要とする論理レプリケーションスロットがデータベースの自動サスペンドを妨げ、無料枠を使い切ってしまうため廃止しました。フィードの読み込みは22msになりました。',
          'ペイウォールはサーバー側で判定します。ルールはcontentAccess.tsに、読み込み済みのエンタイトルメントに対する純粋な述語として置かれ、データベースなしでテスト可能で、20件の単体ケースで保護されています。JWTが運ぶのは本人性であり、アクセス権限ではありません。',
          'ロックされたコンテンツも表示されます。購読者限定の投稿や講座は、タイトル・カバー・ティーザー、講座では全カリキュラムまで誰にでも届きます。届かないのは商品そのもの、つまり投稿本文・メディア・レッスンです。見えないカタログは誰の購入にもつながりません。',
          'テキスト・写真・動画・音声のフィード。枚数表示付きで最大9枚の写真カルーセル、ポスター付きの自作プレイヤー（Web・ネイティブ共通）、いいね・コメント・返信を備え、非正規化カウンターはミューテーション自身が更新します。',
          '講座 → モジュール → レッスンの構成。レッスン単位の進捗は中断地点から再開でき、最後まで再生すると自動的に完了。freePreview指定により、有料講座内の1レッスンだけを開放できます。',
          '決済はアダプター越しのStripe。継続サブスクリプションと買い切りの両方をホスト型チェックアウトで提供し、解約やカード変更はStripeのカスタマーポータルに任せます。Webhookは署名検証と支払いの重複排除を行い、イベントからステータスへの変換は純粋関数としてテスト済みです。プランは削除されず販売停止になるだけです — 過去の投稿から参照され、販売済みのサブスクリプションからも参照されているためです。',
          'メディアは署名付きURLでブラウザ／アプリからCloudflare R2へ直接アップロードし、アプリサーバーを1バイトも経由しません。読み取りは302リダイレクトで、署名の直前にサブスクリプションのゲートを再評価。種別ごとの上限（写真25MB・音声200MB・動画1GB）と、画像5分・動画/音声4時間の署名TTLを設定しています。',
          'Web管理画面は2段階の権限：コンテンツ管理はクリエイター向け、「ユーザー」と「プラン」は管理者限定です。決済が非公開テーブルのためです。本番環境はAWS Lightsail 1台にアプリ・Postgres 17・Caddyを同居させ、メディアはR2に配置。Vitestの単体テスト158件とPlaywrightの統合テスト15件で担保しています。',
        ],
      },
    },
  },
  // Next projects: copy the block above, bump `num` and adjust the fields.
  // `image`, `live` and `github` are optional.
]
