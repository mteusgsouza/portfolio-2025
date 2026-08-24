import WorkProjects from '@/components/work-projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
}

function WorkPage() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center pt-12 pb-20 xl:pt-0 xl:pb-32">
      <div className="container">
        <h1 className="mb-5 text-center text-3xl font-bold">Work</h1>
        <div className="mx-auto mb-8 w-20 border-b border-white/50"></div>
        <p className="mx-auto mb-12 max-w-2xl text-center text-white/80">
          A selection of the projects I have built. Expand each card to see the
          engineering decisions behind it and the full tech stack.
        </p>
        <WorkProjects />
      </div>
    </section>
  )
}

export default WorkPage
