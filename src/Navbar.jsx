import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="bg-navy shadow-md">
      <nav className="site-container flex min-h-20 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Jesse Sergent home">
          <img
            src={import.meta.env.BASE_URL + 'Images/Logo.png'}
            alt="Personal logo"
            className="h-20 w-20 rounded-full object-contain"
            onError={(event) => { event.currentTarget.style.visibility = 'hidden' }}
          />
        </Link>
        <span className="hidden text-[1.7rem] font-extrabold tracking-tight text-white sm:block">Jesse Sergent</span>
        <div className="flex items-center gap-2 sm:gap-5">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                ['rounded-md px-2 py-2 text-sm font-bold transition hover:text-gold sm:px-3 sm:text-base',
                  isActive ? 'text-gold underline decoration-2 underline-offset-8' : 'text-sky-100'].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
