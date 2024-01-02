import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='flex justify-around'>
      <Link to='/'>
        <img src='https://i.imgur.com/7I1V7Uu.png' alt='logo' className='w-16 h-16' />
      </Link>
      <h1 className='text-4xl font-bold'>Sorteo de equipos</h1>
    </header>
  )
}
