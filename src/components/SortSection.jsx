export default function SortSection ({ title, children }) {
  return (
    <section className='flex flex-col max-w-[500px] mx-auto w-full'>
      <h2 className='text-3xl text-center font-bold mb-3'>{title}</h2>
      {children}
    </section>
  )
}
