import { Link } from 'react-router-dom'

export default function Index () {
  return (
    <main>
      <p className='text-center text-2xl max-w-[500px] mx-auto'>Webapp de sorteos de equipos y/o parejas para juegos de futbol virtual.</p>
      <ul className='flex flex-col items-center justify-center gap-3'>
        <li><Link to='/1vs1' className='btn block m-auto w-[100px] text-center'>1 vs 1</Link></li>
        <li><Link to='/2vs2' className='btn block m-auto w-[100px] text-center'>2 vs 2</Link></li>
        <li><Link to='/random-teams' className='btn block w-[100px] m-auto text-center'>Equipos aleatorios</Link></li>
      </ul>
    </main>
  )
}
