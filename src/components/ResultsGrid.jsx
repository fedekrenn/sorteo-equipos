export default function ResultsGrid ({ children }) {
  return (
    <section className='mx-auto mt-8 mb-4 w-full max-w-5xl px-4 md:px-6'>
      <div className='grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,260px))]'>
        {children}
      </div>
    </section>
  )
}
