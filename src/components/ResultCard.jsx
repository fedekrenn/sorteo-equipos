import { Card, CardContent } from '@/components/ui/card'

export default function ResultCard ({ title, subtitle, image, imageAlt, isFree = false }) {
  return (
    <Card className='arcade-card h-full border-white/15 bg-black/55 backdrop-blur-xl animate-zoom-in animate-duration-normal'>
      <CardContent className='flex h-full flex-col items-center gap-4 pt-6 text-center'>
        {isFree
          ? (
            <div className='flex min-h-36 items-center justify-center rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-6 py-10 text-3xl font-bold italic text-yellow-300 shadow-[0_0_28px_rgba(250,204,21,0.28)] animate-pulse animate-iteration-count-twice'>
              Libre
            </div>
            )
          : (
            <img
              src={image}
              alt={imageAlt}
              className='h-28 w-28 object-contain drop-shadow-[0_0_24px_rgba(255,255,255,0.25)] md:h-40 md:w-40 animate-pop animate-delay-200'
            />
            )}
        <div className='space-y-1'>
          {title != null && <p className='text-xl font-semibold text-slate-50'>{title}</p>}
          {subtitle != null && <p className='text-sm text-slate-300'>{subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
