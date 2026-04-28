// Assets
import linkedin from '@assets/linkedin.svg'
import github from '@assets/github.svg'
import { Separator } from '@/components/ui/separator'

export default function Footer () {
  return (
    <footer className='mx-auto mb-6 mt-10 w-full max-w-4xl px-4 md:px-6'>
      <div className='rounded-2xl border border-white/10 bg-black/50 px-4 py-4 backdrop-blur-lg animate-fade-in-up animate-delay-300 animate-duration-slow'>
        <Separator className='mb-4 bg-white/20' />
        <div className='flex items-center justify-between gap-4'>
          <p className='text-sm text-slate-200/90'>Diseñado por Federico Krenn</p>
          <div className='flex gap-3 animate-fade-in animate-delay-500'>
            <a href='https://www.linkedin.com/in/fkrenn' target='_blank' rel='noreferrer' className='rounded-md p-1 transition hover:bg-white/10'>
              <img
                src={linkedin}
                alt='Logo de Linkedin'
                className='h-5 w-5 transition-all hover:scale-110'
              />
            </a>
            <a href='https://github.com/fedekrenn' target='_blank' rel='noreferrer' className='rounded-md p-1 transition hover:bg-white/10'>
              <img
                src={github}
                alt='Logo de Github'
                className='h-5 w-5 transition-all hover:scale-110'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
