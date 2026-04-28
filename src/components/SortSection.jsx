export default function SortSection ({ title, subtitle, children }) {
  return (
    <section className='mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 md:px-6'>
      <header className='space-y-2 text-center'>
        <h1 className='text-3xl font-semibold tracking-tight text-white md:text-4xl animate-fade-in animate-duration-normal'>{title}</h1>
        {subtitle != null && <p className='mx-auto max-w-2xl text-sm text-slate-300 md:text-base animate-fade-in animate-delay-150'>{subtitle}</p>}
      </header>
      {children}
    </section>
  )
}
