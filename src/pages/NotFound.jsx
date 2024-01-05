import notFound from '../assets/page-not-found.svg'

export default function NotFound () {
  return (
    <main>
      <h1 className='text-3xl mb-2'>Página no encontrada!</h1>
      <p className='text-l'>Intenta con otra ruta</p>
      <img className='w-[200px]' src={notFound} alt='Página no encontrada' />
    </main>
  )
}
