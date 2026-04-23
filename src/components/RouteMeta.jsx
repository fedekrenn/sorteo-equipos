import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://sorteo-equipos.vercel.app'
const OG_IMAGE_URL = `${SITE_URL}/open-graph.webp`

const ROUTE_META = {
  '/': {
    title: 'Sorteo de equipos de fútbol | 1 vs 1, 2 vs 2 y aleatorio',
    description: 'Sorteá equipos de fútbol en segundos para 1 vs 1, 2 vs 2 o partido aleatorio. Armá cruces rápidos, claros y listos para jugar con tus amigos.',
    path: '/',
    robots: 'index, follow'
  },
  '/1vs1': {
    title: 'Modo 1 vs 1 | Sorteo de equipos de fútbol',
    description: 'Generá cruces 1 vs 1 con jugadores y equipos al azar en segundos. Ideal para partidos rápidos y organizados.',
    path: '/1vs1',
    robots: 'index, follow'
  },
  '/2vs2': {
    title: 'Modo 2 vs 2 | Sorteo de equipos de fútbol',
    description: 'Armá duplas equilibradas y sorteá equipos para partidos 2 vs 2 de forma simple, rápida y clara.',
    path: '/2vs2',
    robots: 'index, follow'
  },
  '/random-teams': {
    title: 'Partido aleatorio | Sorteo de equipos de fútbol',
    description: 'Obtené dos equipos al instante para arrancar un partido aleatorio sin cargar jugadores manualmente.',
    path: '/random-teams',
    robots: 'index, follow'
  }
}

const FALLBACK_META = {
  title: 'Página no encontrada | Sorteo de equipos de fútbol',
  description: 'La ruta que buscás no existe. Volvé al inicio para seguir sorteando equipos de fútbol.',
  path: '/',
  robots: 'noindex, nofollow'
}

function upsertMetaTag (selector, attr, key, value) {
  let element = document.head.querySelector(selector)

  if (element == null) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

function upsertCanonical (href) {
  let canonical = document.head.querySelector('link[rel="canonical"]')

  if (canonical == null) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', href)
}

export default function RouteMeta () {
  const location = useLocation()

  useEffect(() => {
    const meta = ROUTE_META[location.pathname] ?? FALLBACK_META
    const canonicalUrl = `${SITE_URL}${meta.path}`

    document.title = meta.title
    upsertMetaTag('meta[name="description"]', 'name', 'description', meta.description)
    upsertMetaTag('meta[name="robots"]', 'name', 'robots', meta.robots)
    upsertMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    upsertMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title)
    upsertMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description)
    upsertMetaTag('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE_URL)
    upsertMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    upsertMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)
    upsertMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE_URL)
    upsertMetaTag('meta[property="twitter:url"]', 'property', 'twitter:url', canonicalUrl)
    upsertCanonical(canonicalUrl)
  }, [location.pathname])

  return null
}
