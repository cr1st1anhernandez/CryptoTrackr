import BackTopButton from './components/BackTopButton'
import Documentation from './components/Documentation'
import Faqs from './components/Faqs'
import Home from './components/Home'
import Nav from './components/Nav'
import News from './components/News'
import SearchCoins from './components/SearchCoins'
import TrendingCryptos from './components/TrendingCryptos'

function App() {
  return (
    <>
      <Nav />
      <div className="mx-auto flex max-w-[1600px] flex-col justify-center gap-8 bg-[#fffffe] px-6 pb-8 yellow-light dark:bg-[#000] dark:yellow-dark md:px-12 2xl:px-0">
        <Home />
        <News />
        <TrendingCryptos />
        <SearchCoins />
        <Faqs />
        <Documentation />
        <BackTopButton />
      </div>
    </>
  )
}

export default App
