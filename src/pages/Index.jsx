import { Link } from 'react-router-dom'

export default function Index () {
  return (
    <main>
      <p>Bienvenidos a la app de sorteos de equipo para juegos de futbol virtual.</p>
      <p>Indique modalidad de juego:</p>
      <ul className='flex justify-center gap-3 m-5'>
        <li><Link to='/1vs1' className='btn'>1 vs 1</Link></li>
        <li><Link to='/2vs2' className='btn'>2 vs 2</Link></li>
        <li><Link to='/random-teams' className='btn'>Equipos aleatorios</Link></li>
      </ul>
    </main>
  )
}
