const skills = ['Java', 'C', 'C#', 'HTML', 'CSS', 'JavaScript', 'SQL', 'PHP']

export default function About() {
  return (
    <div className="page-stack">
      <section className="card mt-10 p-7 sm:mt-14 sm:p-12">
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:gap-9">
          <img
            src={import.meta.env.BASE_URL + 'Images/Personal_portrait.png'}
            alt="Jesse Sergent"
            className="h-52 w-52 shrink-0 rounded-full border-4 border-sky-200 object-cover sm:h-64 sm:w-64"
            onError={(event) => { event.currentTarget.hidden = true }}
          />
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Jesse Sergent</h1>
        </div>
        <div className="space-y-4 text-lg leading-8 text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900">About me</h2>
          <p>Hi! I’m Jesse! I’m a Computer Science student at Michigan Technological University with a minor in Cybersecurity and a passion for video game development.</p>
          <p>As a student, most of my experience has come from Computer Science classes using languages like Java, HTML/CSS/JavaScript, C, C#, SQL, and MIPS assembly. Academic projects have helped me build a strong foundation in programming. I plan to use this to start my journey outside of the classroom. I have started, and plan to continue, developing new personal projects and updating ones like this website.</p>
          <p>Besides work and school, I enjoy playing video games, mountain biking, and photography when I get the chance.</p>
        </div>
      </section>
      <section className="card flex flex-col items-center gap-8 p-7 sm:flex-row sm:justify-between sm:p-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Education</h2>
          <h3 className="mt-5 text-xl font-extrabold text-slate-800">Michigan Technological University</h3>
          <p className="mt-2 text-lg text-slate-600">B.S. in Computer Science, Minor in Cybersecurity</p>
          <p className="text-sm italic text-slate-500">2024–2028</p>
          <p className="mt-2 italic text-slate-600">Concentration in Video Game Development</p>
        </div>
        <img
          src={import.meta.env.BASE_URL + 'Images/tech_Logo.png'}
          alt="Michigan Technological University logo"
          className="max-h-40 max-w-56 object-contain"
          onError={(event) => { event.currentTarget.hidden = true }}
        />
      </section>
      <section className="card p-7 sm:p-10">
        <h2 className="section-heading">Languages &amp; Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li key={skill} className="flex min-h-16 min-w-24 items-center justify-center rounded-xl border-2 border-gold px-5 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:bg-gold hover:text-navy">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
