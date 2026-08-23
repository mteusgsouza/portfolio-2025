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
  /** Screenshot under `public/assets/work/`. Without it the card shows a placeholder. */
  image?: string
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
    // Drop the screenshot in public/assets/work/ and uncomment:
    // image: '/assets/work/uai-economizei.png',
    live: 'https://uai-economizei-monorepo-front.vercel.app/',
    github: 'https://github.com/mteusgsouza/uai-economizei-monorepo',
  },
  {
    num: '02',
    category: 'PWA',
    title: 'Projeto Fitness',
    description:
      'Mobile-first PWA for tracking gym workouts. Each member keeps one workout sheet per weekday, adjusts it as the training evolves, and compares load, repetitions and difficulty across sessions, with frequency and progress charts on the home screen.',
    highlights: [
      'Installable mobile-first PWA, designed to be used on the phone during the workout itself rather than filled in afterwards.',
      'One workout sheet per weekday, edited over time so the routine evolves alongside the training instead of being rebuilt from scratch.',
      'Per-exercise progression tracking: load, repetitions and perceived difficulty are recorded every session and compared against the previous ones.',
      'Home dashboard with frequency and progress charts built from the session history.',
      'Authentication and route protection with Clerk — every application route is gated by middleware, with sign-in and sign-up as the only public entry points.',
    ],
    // TODO: add database, ORM and charting library once confirmed.
    stack: [
      { label: 'Front', items: ['Next.js', 'React', 'PWA'] },
      { label: 'Auth', items: ['Clerk'] },
      { label: 'Infra', items: ['Vercel'] },
    ],
    // image: '/assets/work/projeto-fitness.png',
    live: 'https://projeto-fitness-five.vercel.app/sign-in',
    github: 'https://github.com/mteusgsouza/projeto-fitness',
  },
  // Next projects: copy the block above, bump `num` and adjust the fields.
  // `image`, `live` and `github` are optional.
]
