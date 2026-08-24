export type ResumeEntry = {
  title: string
  place: string
  period: string
  bullets: string[]
}

export const profile = {
  role: 'Senior Web Developer',
  summary:
    'Front-end developer with over 5 years of experience building modern, responsive interfaces. Specialized in React.js, Next.js and TypeScript, with extensive experience in styling tools like Tailwind CSS and MUI. Passionate about creating intuitive, high-performance solutions that improve the user experience.',
}

export const experience: ResumeEntry[] = [
  {
    title: 'Senior Web Developer',
    place: 'Bigmidia LTDA',
    period: 'Nov 2019 – present',
    bullets: [
      'My first job as a developer, where I had my first contact with PHP and Xamarin.',
      'After specializing in React, I led the adoption of the technology across several projects, including React Native apps and Next.js websites, always focused on improving the user experience.',
    ],
  },
  {
    title: 'Legalization Assistant',
    place: 'Sr. Organize Serviços Auxiliares',
    period: 'Jun 2016 – Jul 2018',
    bullets: [
      'Worked alongside the accounting department, helping companies obtain certificates and permits and negative clearance certificates, and drafting company formation and closure contracts.',
    ],
  },
]

export const education: ResumeEntry[] = [
  {
    title: "Bachelor's Degree in Information Systems",
    place: 'Faculdade Pitágoras',
    period: '2015 – 2019',
    bullets: [
      'Project analysis and management',
      'Software engineering and programming logic',
      'Algorithms, data structures and databases',
      'Web development with a focus on UX/UI and interface design',
    ],
  },
  {
    title: 'Technical Degree in Graphic Computing',
    place: 'Faculdade Pitágoras',
    period: '2014 – 2015',
    bullets: [
      'Web programming, marketing and audiovisual production',
      '3D modeling, illustration, model making and graphic design',
    ],
  },
]

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'Japanese', level: 'N4 (JLPT) — Dec/2025' },
]
