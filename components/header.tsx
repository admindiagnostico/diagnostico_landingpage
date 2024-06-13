// se ve perfecto pero se queja al compilar  Error: Missing "key" prop for element in iterator  react/jsx-key
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
// import { useState } from 'react'
// import Link from 'next/link'
// import SearchCta from '@/components/CommandBar/SearchCta'
// import styled from 'styled-components'
// import CommandBar from '@/components/CommandBar/CommandBar'

// export default function Header() {
//   const navigationItems = [
//     // {
//     //   title: "Inicio",
//     //   href: "/",
//     //   description: "",
//     // },
//     {
//       title: 'Servicios',
//       // description: "Servicios prestados.",
//       items: [
//         {
//           title: 'Anatomía Patológica',
//           href: '/pages/servicios/anatomia'
//         },
//         {
//           title: 'Citología',
//           href: '/pages/servicios/citologia'
//         },
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
//     {
//       title: 'Novedades',
//       href: '/novedades',
//       description: ''
//     },
//     {
//       title: 'Resultados',
//       href: '/resultados',
//       description: ''
//     },
//     {
//       title: '¿Quiénes somos?',
//       href: '/quienes-somos',
//       description: ''
//     },
//     {
//       title: 'Calidad',
//       href: '/calidad',
//       description: ''
//     }
//     // {
//     //   title: "Trabajo",
//     //   href: "/trabajo",
//     //   description: "",
//     // },
//   ]

//   const [isOpen, setOpen] = useState(false)
//   return (
//     <header className='sticky left-0 top-0 z-40 w-full bg-background'>
//       <div className='container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3'>
//         <div className='hidden flex-row items-center justify-start gap-4 lg:flex'>
//           <NavigationMenu className='flex items-start justify-start'>
//             <NavigationMenuList className='flex flex-row justify-start gap-4'>
//               {navigationItems.map(item => (
//                 <NavigationMenuItem key={item.title}>
//                   {item.href ? (
//                     <>
//                       <NavigationMenuLink>
//                         <Button variant='ghost'>{item.title}</Button>
//                       </NavigationMenuLink>
//                     </>
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
//                           </div>
//                           <div className='flex h-full flex-col justify-end text-sm'>
//                             {item.items?.map(subItem => (
//                               <Link href={subItem.href}>
//                                 <NavigationMenuLink
//                                   href={subItem.href}
//                                   key={subItem.title}
//                                   className='flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted'
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

//           {/* <StyledCta>
//             <SearchCta />
//           </StyledCta> */}

//           <CommandBar>
//             <SearchButton>
//               <MagnifyingGlassIcon className='mr-2 h-4 w-4 shrink-0 opacity-50' />
//               Busqueda
//               <ShortcutHint>⌘ + K</ShortcutHint>
//             </SearchButton>
//           </CommandBar>

//           <div className='hidden border-r md:inline'></div>
//           <Button variant='outline'>Ingresar</Button>
//           {/* <Button>Get started</Button> */}
//           <ThemeToggle />
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

//   align-items: center;
//   border-width: 1px; /* Default border width is 1px */
//   border-bottom-style: solid; /* Default border style is solid */
//   border-bottom-color: inherit; /* Inherit border color (You may replace 'inherit' with a specific color if needed) */
//   display: flex;
//   height: 2.5rem; /* 40px */
//   width: 50%;
//   border-radius: 0.375rem; /* 6px */
//   background-color: transparent;
//   padding-top: 0.75rem; /* 12px */
//   padding-bottom: 0.75rem; /* 12px */
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
//     background-color: #2c2c2c;
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

// const ShortcutHint = styled.span`
//   margin-left: auto;
//   font-size: 0.875rem;
//   color: #999;
// `

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
import { useState } from 'react'
import Link from 'next/link'
import SearchCta from '@/components/CommandBar/SearchCta'
import styled from 'styled-components'
import CommandBar from '@/components/CommandBar/CommandBar'

export default function Header() {
  const navigationItems = [
    {
      title: 'Servicios',
      items: [
        {
          title: 'Anatomía Patológica',
          href: '/pages/servicios/anatomia'
        },
        {
          title: 'Citología',
          href: '/pages/servicios/citologia'
        },
        {
          title: 'Inmunohistoquímica',
          href: '/pages/servicios/inmunohistoquimica'
        },
        {
          title: 'Biología Molecular',
          href: '/pages/servicios/biologiamolecular'
        }
      ]
    },
    {
      title: 'Novedades',
      href: '/novedades',
      description: ''
    },
    {
      title: 'Resultados',
      href: '/resultados',
      description: ''
    },
    {
      title: '¿Quiénes somos?',
      href: '/quienes-somos',
      description: ''
    },
    {
      title: 'Calidad',
      href: '/calidad',
      description: ''
    }
  ]

  const [isOpen, setOpen] = useState(false)
  return (
    <header className='sticky left-0 top-0 z-40 w-full bg-background'>
      <div className='container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3'>
        <div className='hidden flex-row items-center justify-start gap-4 lg:flex'>
          <NavigationMenu className='flex items-start justify-start'>
            <NavigationMenuList className='flex flex-row justify-start gap-4'>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant='ghost'>{item.title}</Button>
                      </NavigationMenuLink>
                    </>
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
                          </div>
                          <div className='flex h-full flex-col justify-end text-sm'>
                            {item.items?.map(subItem => (
                              <Link href={subItem.href} key={subItem.title}>
                                <NavigationMenuLink
                                  href={subItem.href}
                                  className='flex flex-row items-center justify-between rounded px-4 py-2 hover:bg-muted'
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

          {/* <StyledCta>
            <SearchCta />
          </StyledCta> */}

          <CommandBar>
            <SearchButton>
              <MagnifyingGlassIcon className='mr-2 h-4 w-4 shrink-0 opacity-50' />
              Busqueda
              <ShortcutHint>⌘ + K</ShortcutHint>
            </SearchButton>
          </CommandBar>

          <div className='hidden border-r md:inline'></div>
          <Button variant='outline'>Ingresar</Button>
          {/* <Button>Get started</Button> */}
          <ThemeToggle />
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

  align-items: center;
  border-width: 1px; /* Default border width is 1px */
  border-bottom-style: solid; /* Default border style is solid */
  border-bottom-color: inherit; /* Inherit border color (You may replace 'inherit' with a specific color if needed) */
  display: flex;
  height: 2.5rem; /* 40px */
  width: 50%;
  border-radius: 0.375rem; /* 6px */
  background-color: transparent;
  padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */

  outline: none;
  :disabled {
    opacity: 0.5;
  }
  ::placeholder {
    color: #6b7280; /* example muted foreground color */
  }

  &:hover {
    background-color: #2c2c2c;
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

const ShortcutHint = styled.span`
  margin-left: auto;
  font-size: 0.875rem;
  color: #999;
`
