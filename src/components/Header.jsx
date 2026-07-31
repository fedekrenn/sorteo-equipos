// React Router Dom
import { Link } from 'react-router'
// Assets
import image from '../assets/logo.webp'

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-4xl px-4 pt-6 md:px-6 md:pt-8">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black focus:px-2 focus:py-1 focus:rounded focus:ring-2 focus:ring-blue-500">
        Saltar al contenido principal
      </a>
      <Link
        to="/"
        className="group relative flex min-h-16 items-center justify-between overflow-hidden rounded-2xl border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-xl transition duration-300 hover:border-white/30 animate-fade-in-down animate-duration-slow"
      >
        <span className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-600 shadow-[0_0_24px_rgba(34,211,238,0.8)]" />
        <h1 className="pl-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">Sorteo de equipos</h1>
        <img
          src={image}
          alt="Logo"
          className="size-11 rounded-full border border-white/30 object-cover shadow-[0_0_24px_rgba(59,130,246,0.45)] transition duration-300 group-hover:scale-105 animate-rotate-in animate-delay-200"
        />
      </Link>
    </header>
  )
}
