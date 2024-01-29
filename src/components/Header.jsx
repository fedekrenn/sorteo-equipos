import { Link } from 'react-router-dom'
import image from '../assets/logo.webp'

export default function Header () {
  return (
    <header className='flex justify-around items-center w-2/5 min-h-32 m-auto'>
      <Link to='/'>
        <img src={image} alt='logo' className='w-28 h-28 rounded-full' />
      </Link>
      <h2 className='text-4xl font-bold flex-1 text-center'>Sorteo de equipos</h2>
    </header>
  )
}
