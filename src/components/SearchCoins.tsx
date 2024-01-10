import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import axios from 'axios'
import { useState } from 'react'
import UseAnimations from 'react-useanimations'
import activity from 'react-useanimations/lib/activity'

interface CoinData {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap_rank: number
  market_cap_change_percentage_24h: number
}

export default function SearchCoins() {
  const [coinName, setCoinName] = useState<string>('')
  const [coinData, setCoinData] = useState<CoinData | null>(null)
  const [error, setError] = useState<string>('')

  const handleSearchCoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `https://wonderful-entremet-da9a0d.netlify.app/crypto/coin/${coinName}`,
      )
      setCoinName('')
      const data: CoinData[] = response.data
      if (data.length > 0) {
        setCoinData(data[0])
      } else {
        setCoinData(null)
        setError('Not found results')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section>
      <Card className="p-4">
        <CardHeader>
          <h2 className="text-center">Search Coins</h2>
        </CardHeader>
        <CardBody className="gap-4">
          <div className="lg:w-1/3">
            <form
              onSubmit={handleSearchCoin}
              className="flex flex-col items-center gap-8 sm:flex-row sm:gap-4"
            >
              <Input
                type="text"
                size="sm"
                label="Coin"
                className="font-bold"
                onChange={(e) => setCoinName(e.target.value)}
                id="coinName"
                value={coinName}
              />
              <Button
                type="submit"
                color="primary"
                className="w-full font-bold sm:w-fit"
              >
                Search
              </Button>
            </form>
          </div>
          {coinData && (
            <div className="flex flex-col items-start gap-2 font-bold lg:flex-row lg:items-center">
              <img
                src={coinData.image}
                alt={coinData.name}
                width="20px"
                height="20px"
              />
              <h3>{coinData.name}</h3>
              <p className="text-gray-400">{coinData.symbol}</p>
              <p className="text-blue-600">{coinData.current_price}$</p>
              <div className="flex items-center gap-1 font-bold text-yellow-500">
                <p>Rank {coinData.market_cap_rank}</p>
                <UseAnimations
                  animation={activity}
                  strokeColor="#eab308"
                  size={24}
                />
              </div>
              <p>
                <span>Price Change </span>
                <span
                  className={
                    coinData.price_change_percentage_24h > 0
                      ? 'text-emerald-600'
                      : 'text-rose-600'
                  }
                >
                  {coinData.price_change_percentage_24h}%
                </span>
              </p>
              <p>
                <span>Market Cap Change </span>
                <span
                  className={
                    coinData.market_cap_change_percentage_24h > 0
                      ? 'text-emerald-600'
                      : 'text-rose-600'
                  }
                >
                  {coinData.market_cap_change_percentage_24h}%
                </span>
              </p>
            </div>
          )}
          {!coinData && (
            <div className="font-bold text-rose-600">
              <p>{error}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </section>
  )
}
