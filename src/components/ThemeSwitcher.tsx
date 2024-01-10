import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'

import { MdLightMode } from 'react-icons/md'

export default function ThemeSwitcher(): JSX.Element {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <Button
      onClick={() => {
        setDarkMode(!darkMode)
      }}
      isIconOnly
      size="sm"
    >
      {darkMode ? (
        <FaMoon className="text-white" />
      ) : (
        <MdLightMode className="text-black" />
      )}
    </Button>
  )
}
