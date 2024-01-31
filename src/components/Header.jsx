import { Link } from 'react-router-dom'
import image from '../assets/logo.webp'

export default function Header () {
  return (
    <header>
      <Link to='/' className='flex items-center min-h-24 gap-5 justify-between max-w-[500px] mx-auto'>
        <h1 className='text-2xl md:text-4xl font-bold inline'>| Sorteo de equipos</h1>
        <img src={image} alt='Logo' className='w-10 h-10 inline rounded-full' />
      </Link>
    </header>
  )
}
