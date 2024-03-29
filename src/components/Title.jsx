export default function Title ({ text, children }) {
  return (
    <section className='flex flex-col max-w-[500px] mx-auto w-full'>
      <h2 className='text-3xl text-center font-bold mb-3'>{text}</h2>
      {children}
    </section>
  )
}
