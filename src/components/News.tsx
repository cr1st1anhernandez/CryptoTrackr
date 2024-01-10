import { Accordion, AccordionItem, Image, Link } from '@nextui-org/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function News() {
  const [news, setNews] = useState<NewsItem[] | null>(null)

  interface NewsItem {
    article_id: string
    title: string
    description: string
    link: string
    image_url: string
  }

  const fetchCryptos = async () => {
    try {
      const res = await axios.get(
        'https://wonderful-entremet-da9a0d.netlify.app/crypto/news',
      )
      setNews(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const [scrolling, setScrolling] = useState(false)

  const handleScroll = () => {
    setScrolling(window.scrollY > 0)
  }

  useEffect(() => {
    fetchCryptos()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const sectionClasses = `flex flex-col gap-8 ${
    scrolling ? 'animate-fade-down animate-delay-300 animate-once' : ''
  }`

  return (
    <section className={sectionClasses}>
      <h2>News</h2>
      {news && news.length > 0 ? (
        <Accordion
          variant="splitted"
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
        >
          {news.map((item) => (
            <AccordionItem
              className="flex h-full flex-col"
              key={item.article_id}
              title={item.title}
            >
              <div className="flex flex-col gap-4 xl:grid xl:grid-cols-3">
                <p className="col-span-2 text-pretty">{item.description}</p>
                {item.image_url && (
                  <div className="col-span-1 xl:flex xl:justify-end">
                    <Image
                      width={200}
                      height={200}
                      className="h-[200px] w-[200px] rounded-lg object-cover object-center"
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                )}
              </div>
              <Link
                isExternal
                href={item.link}
                showAnchorIcon
                className="font-bold"
              >
                Open Article
              </Link>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </section>
  )
}
