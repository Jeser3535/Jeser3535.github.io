import { useState } from 'react'

const profiles = [
  { label: 'LinkedIn', image: 'linkedin-logo.png', href: 'https://www.linkedin.com/in/jesse-sergent/' },
  { label: 'GitHub', image: 'github-logo.webp', href: 'https://github.com/Jeser3535' },
  { label: 'Handshake', image: 'handshake-logo.jpg', href: 'https://app.joinhandshake.com/profiles/jesse_sergent' },
]

function ContactCard({ children }) {
  return (
    <article className="card mx-auto grid w-full max-w-xl grid-cols-1 items-center justify-items-center gap-5 p-6 md:min-h-[14rem] md:grid-cols-[9rem_12rem] md:justify-items-stretch md:justify-center md:gap-8 md:p-8">
      {children}
    </article>
  )
}

function EmailAddress({ label, address }) {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:' + address
    }
  }

  return (
    <button type="button" onClick={copyEmail} className="text-left text-slate-700 transition hover:text-blue" title="Click to copy email address">
      <span className="block font-bold text-slate-900">{label}</span>
      <span>{copied ? 'Copied to clipboard!' : address}</span>
    </button>
  )
}

export default function Contact() {
  return (
    <section className="page-stack py-10 sm:py-14">
      <p className="text-center text-sm italic text-slate-600">Click the images to visit my profiles.</p>
      {profiles.map((profile) => (
        <ContactCard key={profile.label}>
          <a href={profile.href} target="_blank" rel="noreferrer" aria-label={'Visit my ' + profile.label + ' profile'}>
            <img
              src={import.meta.env.BASE_URL + 'Images/' + profile.image}
              alt={profile.label + ' logo'}
              className="h-28 w-36 object-contain transition hover:scale-105"
              onError={(event) => { event.currentTarget.hidden = true }}
            />
          </a>
          <h1 className="text-2xl font-bold text-slate-900">{profile.label}</h1>
        </ContactCard>
      ))}
      <ContactCard>
        <img
          src={import.meta.env.BASE_URL + 'Images/Gmail-logo.webp'}
          alt="Email"
          className="h-24 w-32 object-contain"
          onError={(event) => { event.currentTarget.hidden = true }}
        />
        <div className="grid grid-cols-1 gap-4 ">
          <EmailAddress label="Personal" address="Jeser3534@gmail.com" />
          <EmailAddress label="School" address="Jtsergen@mtu.edu" />
        </div>
      </ContactCard>
    </section>
  )
}
