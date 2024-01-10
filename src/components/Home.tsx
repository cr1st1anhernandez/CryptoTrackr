import TopCryptos from './TopCryptos'

export default function Home() {
  return (
    <section className="min-h-screen animate-fade-down animate-delay-300 animate-once md:pt-20 xl:pt-56">
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:justify-between">
        <article className="bg flex flex-col gap-2">
          <h1 className="text-center font-bold text-amber-400 dark:text-yellow-500">
            Crypto Trackr
          </h1>
          <p className="text-center text-2xl">Powered by CoinGecko API</p>
        </article>
        <TopCryptos />
      </div>
    </section>
  )
}
