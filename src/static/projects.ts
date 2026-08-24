export type StackGroup = {
  label: string
  items: string[]
}

export type Project = {
  num: string
  category: string
  title: string
  description: string
  /** Architecture and engineering decisions, listed inside the card accordion. */
  highlights: string[]
  stack: StackGroup[]
  /** Cover screenshot under `public/assets/work/`. Without it the card shows a placeholder. */
  image?: string
  /** Extra screenshots for the gallery viewer. Defaults to just `image` when omitted. */
  images?: string[]
  live?: string
  github?: string
}

export const projects: Project[] = [
  {
    num: '01',
    category: 'E-commerce',
    title: 'UAI Economizei',
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
  },
  {
    num: '02',
    category: 'PWA',
    title: 'Projeto Fitness',
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
  },
  // Next projects: copy the block above, bump `num` and adjust the fields.
  // `image`, `live` and `github` are optional.
]
