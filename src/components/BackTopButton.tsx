import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import UseAnimations from 'react-useanimations'
import arrowUp from 'react-useanimations/lib/arrowUp'

export default function BackTopButton() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {isScrolled && (
        <Button
          isIconOnly
          color="primary"
          className="fixed bottom-4 right-6 z-50 rounded-md text-white shadow-sm"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <UseAnimations animation={arrowUp} size={32} strokeColor="white" />
        </Button>
      )}
    </>
  )
}
