import { Link, useLocation } from 'react-router'

const modeLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/1vs1', label: '1 vs 1' },
  { to: '/2vs2', label: '2 vs 2' },
  { to: '/random-teams', label: 'Aleatorio' }
]

export default function ModeNav () {
  const location = useLocation()

  return (
    <nav className='mx-auto mt-2 w-full max-w-4xl px-4 md:px-6' aria-label='Modos de sorteo'>
      <ul className='mx-auto inline-flex min-h-11 flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-white/15 bg-black/45 px-1.5 py-1 backdrop-blur-xl animate-fade-in-up animate-delay-200 animate-duration-slow'>
        {modeLinks.map(({ to, label }) => {
          const isActive = location.pathname === to

          return (
            <li key={to}>
              <Link
                to={to}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex h-9 items-center justify-center rounded-xl px-4 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
                  isActive
                    ? 'bg-white text-[#12091f] shadow-[0_6px_16px_rgba(255,255,255,0.25)]'
                    : 'text-slate-100 hover:bg-white/15 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
