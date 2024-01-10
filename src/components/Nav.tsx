import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import { Link, NavbarMenuItem } from '@nextui-org/react'
import { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const NavbarItems = [
    {
      title: 'Home',
      href: '#top',
    },
    {
      title: 'Documentation',
      href: '#documentation',
    },
    {
      title: 'FAQs',
      href: '#faqs',
    },
    {
      title: 'Trending Cryptos',
      href: '#trending_cryptos',
    },
  ]

  return (
    <Navbar
      className="bg-[#fffffe] dark:bg-[#000]"
      shouldHideOnScroll
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      />
      <NavbarBrand>
        <a href="/" className="font-bold">
          Crypto Trackr
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {NavbarItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href} color="foreground">
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {NavbarItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              onPress={() => {
                setIsMenuOpen(false)
              }}
              href={item.href}
              color="foreground"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
