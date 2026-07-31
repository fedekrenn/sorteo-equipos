export default function ResultsGrid({ children, title = 'Resultados del sorteo' }) {
  return (
    <section
      aria-label={title}
      className="mx-auto mt-8 mb-4 w-full max-w-5xl px-4 md:px-6 animate-fade-in animate-duration-slow"
    >
      <h2 className="sr-only">{title}</h2>
      <div className="grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,260px))]">
        {children}
      </div>
    </section>
  )
}
