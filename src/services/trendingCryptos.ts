import axios from 'axios'
import { ApiCrypto } from '../interfaces/interfaces'

export const fetchCryptos = async (): Promise<ApiCrypto[]> => {
  try {
    const res = await axios.get(
      'https://cryptotrackrback.netlify.app/crypto/trending',
    )
    const coins = res.data.coins as ApiCrypto[]
    return coins
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error)
    throw error
  }
}
