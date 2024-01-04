import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='flex justify-around items-center w-2/5 min-h-28 m-auto'>
      <Link to='/'>
        <img src='https://i.imgur.com/7I1V7Uu.png' alt='logo' className='w-16 h-16' />
      </Link>
      <h2 className='text-4xl font-bold flex-1 text-center'>Sorteo de equipos</h2>
    </header>
  )
}
