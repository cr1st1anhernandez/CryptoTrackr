export interface ApiCrypto {
  item: {
    id: string
    symbol: string
    name: string
    data: {
      price: string
    }
    market_cap_rank: number
    thumb: string
  }
}
