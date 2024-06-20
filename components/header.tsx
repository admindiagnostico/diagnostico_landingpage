// import React, { useState, useEffect } from 'react'
// import { ThemeToggle } from '@/components/theme-toggle'
// import { Button } from '@/components/ui/button'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger
// } from '@/components/ui/navigation-menu'
// import { Menu, MoveRight, X } from 'lucide-react'
// import Link from 'next/link'
// import styled from 'styled-components'
// import CommandBar from '@/components/CommandBar/CommandBar'

// export const Header1 = () => {
//   const navigationItems = [
//     {
//       title: 'Servicios',
//       items: [
//         { title: 'Anatomía Patológica', href: '/pages/servicios/anatomia' },
//         { title: 'Citología', href: '/pages/servicios/citologia' },
//         {
//           title: 'Inmunohistoquímica',
//           href: '/pages/servicios/inmunohistoquimica'
//         },
//         {
//           title: 'Biología Molecular',
//           href: '/pages/servicios/biologiamolecular'
//         }
//       ]
//     },
//     { title: 'Novedades', href: '/novedades', description: '' },
//     { title: 'Resultados', href: '/resultados', description: '' },
//     { title: '¿Quiénes somos?', href: '/quienes-somos', description: '' },
//     { title: 'Calidad', href: '/calidad', description: '' }
//   ]

//   const [isOpen, setOpen] = useState(false)
//   const [show, setShow] = useState(true)
//   const [lastScrollY, setLastScrollY] = useState(0)
//   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

//   const controlNavbar = () => {
//     if (timeoutId) {
//       clearTimeout(timeoutId)
//     }

//     if (window.scrollY > lastScrollY) {
//       // if scroll down hide the navbar
//       const newTimeoutId = setTimeout(() => {
//         setShow(false)
//       }, 600) // delay in milliseconds
//       setTimeoutId(newTimeoutId)
//     } else {
//       // if scroll up show the navbar
//       setShow(true)
//     }

//     // remember current page location to use in the next move
//     setLastScrollY(window.scrollY)
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', controlNavbar)

//     // cleanup function
//     return () => {
//       window.removeEventListener('scroll', controlNavbar)
//     }
//   }, [lastScrollY])

//   return (
//     <header
//       className={`fixed left-0 top-0 z-40 w-full transition-transform duration-300 ${!show && '-translate-y-full transform'}`}
//     >
//       <div className='container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3'>
//         <div className='hidden flex-row items-center justify-start gap-4 lg:flex'>
//           <NavigationMenu className='flex items-start justify-start'>
//             <NavigationMenuList className='flex flex-row justify-start gap-4'>
//               {navigationItems.map(item => (
//                 <NavigationMenuItem key={item.title}>
//                   {item.href ? (
//                     <NavigationMenuLink>
//                       <Button variant='ghost'>{item.title}</Button>
//                     </NavigationMenuLink>
//                   ) : (
//                     <>
//                       <NavigationMenuTrigger className='text-sm font-medium'>
//                         {item.title}
//                       </NavigationMenuTrigger>
//                       <NavigationMenuContent className='!w-[450px] p-4'>
//                         <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
//                           <div className='flex h-full flex-col justify-between'>
//                             <div className='flex flex-col'>
//                               <p className='text-base'>{}</p>
//                               <p className='text-sm text-muted-foreground'>
//                                 {item.description}
//                               </p>
//                             </div>
//                             <Button size='sm' className='mt-10'>
//                               Contacto
//                             </Button>
//                             <div className='hidden border-r md:inline'></div>
//                           </div>
//                           <div className='flex h-full flex-col justify-end text-sm'>
//                             {item.items?.map(subItem => (
//                               <Link href={subItem.href} key={subItem.title}>
//                                 <NavigationMenuLink
//                                   href={subItem.href}
//                                   className='py- flex flex-row items-center justify-between rounded px-4 hover:bg-muted'
//                                 >
//                                   <span>{subItem.title}</span>
//                                   <MoveRight className='h-4 w-4 text-muted-foreground' />
//                                 </NavigationMenuLink>
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </NavigationMenuContent>
//                     </>
//                   )}
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div className='flex lg:justify-center'>
//           {/* <p className="font-semibold"> </p> */}
//         </div>
//         <div className='flex w-full items-center justify-end gap-4'>
//           <Button variant='ghost' className='hidden md:inline'>
//             Contacto
//           </Button>
//           <CommandBar>
//             <SearchButton className='size=icom'>
//               <MagnifyingGlassIcon className='shrink-1 mr-2 h-4 w-4 opacity-50' />
//               Busqueda
//               <ShortcutHint className='pointer-events-none ml-14 inline-flex h-6 select-none items-center gap-1 rounded bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
//                 ⌘ K
//               </ShortcutHint>
//             </SearchButton>
//           </CommandBar>
//           <div className='hidden border-r md:inline'></div>
//           <Button variant='outline'>Ingresar</Button>
//           {/* <Button>Get started</Button> */}
//           {/* <ThemeToggle /> */}
//         </div>
//         <div className='flex w-12 shrink items-end justify-end lg:hidden'>
//           <Button variant='ghost' onClick={() => setOpen(!isOpen)}>
//             {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
//           </Button>

//           {isOpen && (
//             <div className='container absolute right-0 top-20 flex w-full flex-col gap-8 border-t bg-background py-4 shadow-lg'>
//               {navigationItems.map(item => (
//                 <div key={item.title}>
//                   <div className='flex flex-col gap-2'>
//                     {item.href ? (
//                       <Link
//                         href={item.href}
//                         className='flex items-center justify-between'
//                         onClick={() => setOpen(false)}
//                       >
//                         <span className='text-lg'>{item.title}</span>
//                         <MoveRight className='h-4 w-4 stroke-1 text-muted-foreground' />
//                       </Link>
//                     ) : (
//                       <p className='text-lg'>{item.title}</p>
//                     )}
//                     {item.items &&
//                       item.items.map(subItem => (
//                         <Link
//                           key={subItem.title}
//                           href={subItem.href}
//                           className='flex items-center justify-between'
//                           onClick={() => setOpen(false)}
//                         >
//                           <span className='text-muted-foreground'>
//                             {subItem.title}
//                           </span>
//                           <MoveRight className='h-4 w-4 stroke-1' />
//                         </Link>
//                       ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }

// const StyledCta = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
//   font-family: var(--font-petrona);

//   & > em > a {
//     transition: color var(--base-timing) ease-out;
//   }

//   @media (min-width: 1200px) {
//     font-size: 1.25rem;
//   }
// `

// const SearchButton = styled.button`
//   padding-left: 0.75rem; /* 12px */
//   padding-right: 0.75rem; /* 12px */
//   color: #9ca2af; /* Set text color to red with 50% opacity */
//   white-space: nowrap;
//   align-items: center;
//   border-width: 1px; /* Default border width is 1px */
//   border-bottom-style: solid; /* Default border style is solid */
//   border-bottom-color: inherit; /* Inherit border color (You may replace 'inherit' with a specific color if needed) */
//   display: inline-flex;
//   height: 2.3rem; /* 40px */
//   width: 100%;
//   border-radius: 0.5rem; /* 6px */
//   background-color: transparent;
//   padding-top: 0.75rem; /* 12px */
//   padding-bottom: 0.75rem; /* 12px */
//   padding-right: 0.3rem;
//   font-size: 0.875rem; /* 14px */
//   line-height: 1.25rem; /* 20px */
//   outline: none;

//   :disabled {
//     opacity: 0.5;
//   }

//   ::placeholder {
//     color: #6b7280; /* example muted foreground color */
//   }

//   &:hover {
//     background-color: var(
//       --hover-bg
//     ); /* Use CSS variable for hover background color */
//   }

//   &:focus {
//     outline: none;
//     border-color: #555;
//   }
// `

// const MagnifyingGlassIcon = ({ className }) => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     fill='none'
//     viewBox='0 0 24 24'
//     strokeWidth={1.5}
//     stroke='currentColor'
//     className={className}
//   >
//     <path
//       strokeLinecap='round'
//       strokeLinejoin='round'
//       d='M21 21l-4.35-4.35m1.15-6.65a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z'
//     />
//   </svg>
// )

// const ShortcutHint = styled.span``
import React, { useState, useEffect } from 'react'
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
    { title: 'Novedades', href: '/novedades', description: '' },
    { title: 'Resultados', href: '/resultados', description: '' },
    { title: '¿Quiénes somos?', href: '/quienes-somos', description: '' },
    { title: 'Calidad', href: '/calidad', description: '' }
  ]

  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const controlNavbar = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    if (window.scrollY > lastScrollY) {
      const newTimeoutId = setTimeout(() => {
        setShow(false)
      }, 600) // delay in milliseconds
      setTimeoutId(newTimeoutId)
    } else {
      setShow(true)
    }

    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY, timeoutId])

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full transition-transform duration-300 ${!show && '-translate-y-full transform'}`}
    >
      <div className='container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3'>
        <div className='hidden flex-row items-center justify-start gap-4 lg:flex'>
          <NavigationMenu className='flex items-start justify-start'>
            <NavigationMenuList className='flex flex-row justify-start gap-4'>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink>
                      <Button variant='ghost'>{item.title}</Button>
                    </NavigationMenuLink>
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
                            <Button size='sm' className='mt-10'>
                              Contacto
                            </Button>
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
          <Button variant='ghost' className='hidden md:inline'>
            Contacto
          </Button>
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
  padding-left: 0.75rem; /* 12px */
  padding-right: 0.75rem; /* 12px */
  color: #9ca2af; /* Set text color to red with 50% opacity */
  white-space: nowrap;
  align-items: center;
  border-width: 1px; /* Default border width is 1px */
  border-bottom-style: solid; /* Default border style is solid */
  border-bottom-color: inherit; /* Inherit border color (You may replace 'inherit' with a specific color if needed) */
  display: inline-flex;
  height: 2.3rem; /* 40px */
  width: 100%;
  border-radius: 0.5rem; /* 6px */
  background-color: transparent;
  padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  padding-right: 0.3rem;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  outline: none;

  @media (max-width: 768px) {
    display: none; /* Hide the search button on small screens */
    width: auto; /* For medium screens and up */
    margin-left: 0.5rem; /* Add margin-left for spacing */
    background-color: #030816; /* Use a light gray background color */
  }

  @media (max-width: 1024px) {
    width: auto; /* For medium screens and up */
    margin-left: 0.5rem; /* Add margin-left for spacing */
    background-color: #030816; /* Use a light gray background color */
  }

  :disabled {
    opacity: 0.5;
  }

  ::placeholder {
    color: #6b7280; /* example muted foreground color */
  }

  &:hover {
    background-color: var(
      --hover-bg
    ); /* Use CSS variable for hover background color */
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
