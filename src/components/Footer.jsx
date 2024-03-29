// Assets
import linkedin from '@assets/linkedin.svg'
import github from '@assets/github.svg'

export default function Footer () {
  return (
    <footer className='h-[60px] flex flex-col justify-evenly max-w-[500px] mx-auto'>
      <p className='text-sm'>Diseñado por Federico Krenn</p>
      <div className='flex gap-2'>
        <a href='https://www.linkedin.com/in/fkrenn' target='_blank' rel='noreferrer'>
          <img
            src={linkedin}
            alt='Logo de Linkedin'
            className='w-[20px] hover:scale-125 hover:animate-pulse transition-all'
          />
        </a>
        <a href='https://github.com/fedekrenn' target='_blank' rel='noreferrer'>
          <img
            src={github}
            alt='Logo de Github'
            className='w-[20px] hover:scale-125 hover:animate-pulse transition-all'
          />
        </a>
      </div>
    </footer>
  )
}
