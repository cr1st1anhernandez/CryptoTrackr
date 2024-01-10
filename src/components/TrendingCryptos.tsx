import { Card, CardBody } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import UseAnimations from 'react-useanimations'
import activity from 'react-useanimations/lib/activity'
import { ApiCrypto } from '../interfaces/interfaces'
import { fetchCryptos } from '../services/trendingCryptos'

export default function TrendingCryptos() {
  const [cryptos, setCryptos] = useState<ApiCrypto[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coins = await fetchCryptos()
        setCryptos(coins)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="flex flex-col gap-4" id="trending_cryptos">
      <h2 className="text-center">Trending Cryptos</h2>
      <Card className="w-full p-4 font-bold">
        <CardBody className="grid gap-12 md:grid-cols-2">
          {cryptos.length > 0 ? (
            cryptos.map((crypto) => (
              <article
                key={crypto.item.id}
                className="w-ful flex flex-col justify-between xl:flex-row"
              >
                <div className="flex items-center gap-1 xl:w-1/3">
                  <img
                    width={12}
                    height={12}
                    className="rounded-full"
                    src={crypto.item.thumb}
                    alt={crypto.item.name}
                  />
                  <p className="font-bold xl:text-2xl">{crypto.item.symbol}</p>
                  <span className="text-xl text-gray-400">
                    {crypto.item.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-bold text-yellow-500 xl:w-1/3 xl:justify-center">
                  <p className="xl:text-2xl">
                    Rank {crypto.item.market_cap_rank}
                  </p>
                  <UseAnimations
                    animation={activity}
                    strokeColor="#eab308"
                    size={24}
                  />
                </div>
                <p className="font-bold text-blue-600 xl:w-1/3 xl:text-right xl:text-2xl">
                  {crypto.item.data.price}
                </p>
              </article>
            ))
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </CardBody>
      </Card>
    </section>
  )
}
