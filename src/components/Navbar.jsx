import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/paw-logo.svg'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/adopt', label: 'Adopt Dogs' },
  { to: '/favourites', label: 'Favourite Dogs' },
  { to: '/training', label: 'Dog Training' },
  { to: '/health', label: 'Health Tracker' },
  { to: '/appointments', label: 'Vet Appointment' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-2.5 py-2 text-sm font-bold transition duration-300 whitespace-nowrap ${
      isActive
        ? 'bg-orange-100 text-paw-orange dark:bg-stone-700 dark:text-orange-300'
        : 'text-stone-700 hover:bg-orange-50 hover:text-paw-orange dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:text-orange-300'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/90 backdrop-blur transition duration-300 dark:border-stone-700 dark:bg-stone-900/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="h-10 w-10" />
          <span className="text-xl font-extrabold text-paw-orange">PawCare</span>
        </Link>

        <div className="hidden items-center gap-0.5 xl:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-xl p-2 text-stone-700 dark:text-stone-200"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block h-0.5 w-6 bg-stone-800 dark:bg-stone-100" />
            <span className="mt-1.5 block h-0.5 w-6 bg-stone-800 dark:bg-stone-100" />
            <span className="mt-1.5 block h-0.5 w-6 bg-stone-800 dark:bg-stone-100" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="max-h-[70vh] space-y-1 overflow-y-auto border-t border-orange-100 bg-white px-4 py-3 dark:border-stone-700 dark:bg-stone-900 xl:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={(props) => `block ${linkClass(props)}`}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  )
}
