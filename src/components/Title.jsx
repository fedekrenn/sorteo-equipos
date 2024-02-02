import SelecPlayers from '@components/SelectPlayers'

export default function Title ({ text, matchFunction, setMatches }) {
  return (
    <section className='flex flex-col max-w-[500px] mx-auto w-full'>
      <h2 className='text-3xl text-center font-bold'>{text}</h2>
      <SelecPlayers matchFunction={matchFunction} setMatches={setMatches} />
    </section>
  )
}
