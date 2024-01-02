import { Link } from 'react-router-dom'

export default function Index () {
  return (
    <main>
      <h1>Sorteo de equipos</h1>
      <p>Bienvenidos a la app de sorteos de equipo para juegos de futbol virtual.</p>
      <p>Indique modalidad de juego:</p>
      <ul>
        <li><Link to='/1vs1' className='btn'>1 vs 1</Link></li>
        <li><Link to='/2vs2' className='btn'>2 vs 2</Link></li>
      </ul>
    </main>
  )
}
