import { Link } from 'react-router-dom'

const exploreLinks = [
  { to: '/adopt', label: 'Adopt Dogs' },
  { to: '/favourites', label: 'Favourite Dogs' },
  { to: '/training', label: 'Dog Training' },
  { to: '/health', label: 'Health Tracker' },
  { to: '/appointments', label: 'Vet Appointment' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/care', label: 'Dog Care' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="mt-auto bg-stone-800 text-orange-50 transition duration-300 dark:bg-stone-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold text-orange-300">PawCare</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-stone-300">
            A demo dog care and adoption website built for learning React,
            Vite, Tailwind CSS, and Cursor AI.
          </p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-stone-300">
            {exploreLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Visit</p>
          <p className="mt-3 text-sm leading-6 text-stone-300">
            18 Maple Lane
            <br />
            Demo City, DC 00000
            <br />
            hello@pawcare-demo.com
          </p>
        </div>
      </div>
      <p className="border-t border-stone-700 py-4 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} PawCare. Fictional demo content for learning.
      </p>
    </footer>
  )
}
