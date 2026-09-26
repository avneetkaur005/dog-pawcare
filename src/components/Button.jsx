import { Link } from 'react-router-dom'

const styles = {
  primary:
    'bg-paw-orange text-white hover:bg-orange-700 shadow-md shadow-orange-200 dark:shadow-none',
  secondary:
    'bg-white text-paw-orange border-2 border-paw-orange hover:bg-orange-50 dark:bg-stone-800 dark:hover:bg-stone-700',
  teal: 'bg-paw-teal text-white hover:bg-teal-800 shadow-md shadow-teal-100 dark:shadow-none',
}

export default function Button({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 font-bold transition duration-200 ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
