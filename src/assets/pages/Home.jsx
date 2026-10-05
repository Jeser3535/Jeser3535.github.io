import { Link } from 'react-router-dom'

const certifications = [
  'Google IT Support Professional Certificate — Expected completion: TBD',
  'Google Cybersecurity Professional Certificate — Expected completion: TBD',
  'IT Automation with Python — Expected completion: TBD',
  'AWS Certified Cloud Practitioner — Expected completion: TBD',
]

const projectPlans = [
  {
    title: 'Software Development Projects',
    file: 'Software%20Development%20Projects.pdf',
    projects: [
      {
        title: 'Personal Study Planner CLI',
        description:
          'A Python command-line app for organizing study tasks and saving data between sessions.',
      },
      {
        title: 'Personal Library Manager',
        description:
          'A Python desktop app for managing a personal book collection, using a graphical interface and SQLite.',
      },
    ],
  },
  {
    title: 'Full Stack Projects',
    file: 'Full%20Stack%20Projects.pdf',
    projects: [
      {
        title: 'Internship Application Tracker',
        description:
          'A full-stack app for tracking job applications, interview stages, deadlines, notes, and statuses.',
      },
      {
        title: 'Campus Marketplace',
        description:
          'A marketplace where students can post listings, search for items, save favorites, and manage their own posts.',
      },
    ],
  },
]

const projects = [
  {
    title: 'Personal Web Portfolio',
    description: 'A web application showcasing my background, Projects, and Future plans to improve Software Development skills.',
  },
  {
    title: 'CS3421 Final',
    description: 'Built with SQL, PHP, HTML, and CSS. This project was a final assignment for a databases class. Further description in Resume.',
    note: 'Included in the GitHub repository.',
  },
]

export default function Home() {
  return (
    <div className="page-stack">
      <section className="pt-10 sm:pt-14">
        <div className="card p-7 sm:p-12">
          <p className="mb-3 font-semibold uppercase tracking-[0.16em] text-blue">Computer Science · Cybersecurity</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">Summer 2027 Internship Search</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Eager to apply software engineering, game development, and cybersecurity principles to real-world technical projects. Experienced in C#, Java, C, and SQL with a focus on collaborative problem-solving, clean code, and building performance-focused applications.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="button button-primary" href={import.meta.env.BASE_URL + 'Documents/Resume.pdf'} target="_blank" rel="noopener noreferrer">View Resume</a>
            <a className="button button-secondary" href="#projects">Featured Projects</a>
            <Link className="button button-outline" to="/contact">Get In Touch</Link>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-8 pb-4">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid gap-5">
          {projects.map((project) => (
            <article className="card p-7 sm:p-9" key={project.title}>
              <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
              <p className="mt-3 text-lg text-slate-600">{project.description}</p>
              {project.note && <p className="mt-4 font-semibold text-blue">{project.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="page-stack">
        <h2 className="section-heading">Project Plans</h2>

        {projectPlans.map((plan) => (
          <article className="card p-7 sm:p-9" key={plan.title}>
            <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-600">
              {plan.projects.map((project) => (
                <li key={project.title}>
                  <span className="font-semibold text-slate-900">{project.title}:</span>{' '}
                  {project.description}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                className="button button-primary"
                href={import.meta.env.BASE_URL + 'Documents/' + plan.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                View {plan.title} PDF
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="card p-7 sm:p-10">
        <h2 className="section-heading">Planned Certifications</h2>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}