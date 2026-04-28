// Assets
import notFound from '@assets/page-not-found.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <main id='main-content' tabIndex='-1' className='px-4 md:px-6'>
      <section className='mx-auto mt-8 flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl border border-white/15 bg-black/55 p-8 text-center backdrop-blur-xl animate-fade-in animate-duration-slow'>
        <h1 className='text-3xl font-semibold text-white md:text-4xl'>Página no encontrada</h1>
        <p className='text-slate-300'>La ruta que buscás no existe o fue movida.</p>
        <img className='w-[220px] animate-float animate-iteration-count-infinite animate-duration-slower' src={notFound} alt='Página no encontrada' />
        <Button asChild className='h-11 rounded-xl bg-white px-5 text-base font-semibold text-[#12091f] hover:bg-slate-200 animate-bounce-fade-in animate-delay-300'>
          <Link to='/'>Volver al inicio</Link>
        </Button>
      </section>
    </main>
  )
}
