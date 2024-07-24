import React, { useState, useEffect, useCallback } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Menu, MoveRight, X } from 'lucide-react'
import Link from 'next/link'
import styled from 'styled-components'
import CommandBar from '@/components/CommandBar/CommandBar'

export const Header1 = () => {
  const navigationItems = [
    {
      title: 'Servicios',
      items: [
        { title: 'Anatomía Patológica', href: '/pages/servicios/anatomia' },
        { title: 'Citología', href: '/pages/servicios/citologia' },
        {
          title: 'Inmunohistoquímica',
          href: '/pages/servicios/inmunohistoquimica'
        },
        {
          title: 'Biología Molecular',
          href: '/pages/servicios/biologia_molecular'
        }
      ]
    },
    {
      title: 'Novedades',
      href: 'https://my-outstatic-blog-beta.vercel.app',
      description: ''
    },
    { title: 'Resultados', href: '/pages/resultados', description: '' },
    {
      title: '¿Quiénes somos?',
      href: '/pages/quienes-somos',
      description: ''
    },
    { title: 'Calidad', href: '/pages/calidad', description: '' }
  ]

  const [isOpen, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hideTimeoutId, setHideTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  )
  const [isScrolled, setIsScrolled] = useState(false)

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY

    // Check if scrolled
    setIsScrolled(currentScrollY > 0)

    // Check if at the top of the page
    if (currentScrollY === 0) {
      setIsVisible(true)
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
      }
      return
    }

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
      }

      // Set a timeout to hide the header after a delay
      const newHideTimeoutId = setTimeout(() => {
        setIsVisible(false)
      }, 1000) // Adjust this value to change the delay before hiding (currently 1 second)

      setHideTimeoutId(newHideTimeoutId)
    } else {
      // Scrolling up
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
      }

      setIsVisible(true)
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY, hideTimeoutId])

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
      }
    }
  }, [controlNavbar, hideTimeoutId])

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
        !isVisible ? '-translate-y-full transform' : ''
      } ${
        isScrolled
          ? 'bg-gradient-to-b from-background/40 to-background/0 backdrop-blur-sm md:bg-gradient-to-b md:from-background/40 md:to-background/0 md:backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className='container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3'>
        <div className='hidden flex-row items-center justify-start gap-4 lg:flex'>
          <NavigationMenu className='flex items-start justify-start'>
            <NavigationMenuList className='flex flex-row justify-start gap-4'>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Link href={item.href} passHref legacyBehavior>
                      <NavigationMenuLink>
                        <Button variant='ghost'>{item.title}</Button>
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className='text-sm font-medium'>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='!w-[450px] p-4'>
                        <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
                          <div className='flex h-full flex-col justify-between'>
                            <div className='flex flex-col'>
                              <p className='text-base'>{}</p>
                              <p className='text-sm text-muted-foreground'>
                                {item.description}
                              </p>
                            </div>
                            <Link
                              href='/pages/contacto'
                              passHref
                              legacyBehavior
                            >
                              <Button size='sm' className='mt-10'>
                                Contacto
                              </Button>
                            </Link>

                            <div className='hidden border-r md:inline'></div>
                          </div>
                          <div className='flex h-full flex-col justify-end text-sm'>
                            {item.items?.map(subItem => (
                              <Link href={subItem.href} key={subItem.title}>
                                <NavigationMenuLink
                                  href={subItem.href}
                                  className='flex flex-row items-center justify-between rounded px-4 py-1 hover:bg-muted'
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className='h-4 w-4 text-muted-foreground' />
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex lg:justify-center'>
          {/* <p className="font-semibold"> </p> */}
        </div>
        <div className='flex w-full items-center justify-end gap-4'>
          <Link href='/pages/contacto' passHref legacyBehavior>
            <Button variant='ghost' className='hidden md:inline'>
              Contacto
            </Button>
          </Link>
          <CommandBar>
            <SearchButton>
              <MagnifyingGlassIcon className='shrink-1 mr-2 h-4 w-4 opacity-50' />
              Busqueda
              <ShortcutHint className='pointer-events-none ml-14 inline-flex h-6 select-none items-center gap-1 rounded bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
                ⌘ K
              </ShortcutHint>
            </SearchButton>
          </CommandBar>
          <div className='hidden border-r md:inline'></div>
          <Button variant='outline'>Ingresar</Button>
          {/* <Button>Get started</Button> */}
          {/* <ThemeToggle /> */}
        </div>
        <div className='flex w-12 shrink items-end justify-end lg:hidden'>
          <Button variant='ghost' onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </Button>

          {isOpen && (
            <div className='container absolute right-0 top-20 flex w-full flex-col gap-8 border-t bg-background py-4 shadow-lg'>
              {navigationItems.map(item => (
                <div key={item.title}>
                  <div className='flex flex-col gap-2'>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className='flex items-center justify-between'
                        onClick={() => setOpen(false)}
                      >
                        <span className='text-lg'>{item.title}</span>
                        <MoveRight className='h-4 w-4 stroke-1 text-muted-foreground' />
                      </Link>
                    ) : (
                      <p className='text-lg'>{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map(subItem => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className='flex items-center justify-between'
                          onClick={() => setOpen(false)}
                        >
                          <span className='text-muted-foreground'>
                            {subItem.title}
                          </span>
                          <MoveRight className='h-4 w-4 stroke-1' />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

const StyledCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: var(--font-petrona);

  & > em > a {
    transition: color var(--base-timing) ease-out;
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem;
  }
`

const SearchButton = styled.button`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #9ca2af;
  white-space: nowrap;
  align-items: center;
  border-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: inherit;
  display: inline-flex;
  height: 2.3rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: transparent;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 0.3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  outline: none;

  @media (max-width: 768px) {
    display: none;
    width: auto;
    margin-left: 0.5rem;
    background-color: #030816;
  }

  @media (max-width: 1024px) {
    width: auto;
    margin-left: 0.5rem;
    background-color: #030816;
  }

  :disabled {
    opacity: 0.5;
  }

  ::placeholder {
    color: #6b7280;
  }

  &:hover {
    background-color: var(--hover-bg);
  }

  &:focus {
    outline: none;
    border-color: #555;
  }
`

const MagnifyingGlassIcon = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21 21l-4.35-4.35m1.15-6.65a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z'
    />
  </svg>
)

const ShortcutHint = styled.span``

export default Header1
