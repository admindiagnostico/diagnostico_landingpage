'use client'

import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Next shadcn starter</h1>
      </div>
    </section>
  )
}

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
  width: 20%;
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

// 'use client'

// import { motion } from 'framer-motion'
// import { LampContainer } from '@/components/ui/lamp'
// import { Header1 } from '@/blocks/header/header1'
// import { Hero4 } from '@/blocks/hero/hero4'
// import { Feature6 } from '@/blocks/feature/feature6'
// import { FAQ1 } from '@/blocks/faq/faq1'
// import { SparklesCore } from '@/components/ui/sparkles'
// import { useMediaQuery } from 'react-responsive'
// import { Button } from '@/components/ui/button'
// import CommandBar from '@/components/CommandBar/CommandBar'

// export default function Home() {
//   const isMediumDevice = useMediaQuery({ query: '(min-width: 768px)' })
//   const isLargeDevice = useMediaQuery({ query: '(min-width: 1024px)' })

//   let initialValues = { opacity: 0.5, y: 500 }
//   let whileInViewValues = { opacity: 1, y: 300 }

//   if (isMediumDevice) {
//     initialValues = { opacity: 0.5, y: 400 }
//     whileInViewValues = { opacity: 1, y: 100 }
//   }

//   if (isLargeDevice) {
//     initialValues = { opacity: 0.5, y: 500 }
//     whileInViewValues = { opacity: 1, y: 300 }
//   }

//   return (
//     <>
//       <Header1 />
//          <CommandBar>
//            <SearchButton>
//              <MagnifyingGlassIcon className='mr-2 h-4 w-4 shrink-0 opacity-50' />
//              Search / Explore
//              <ShortcutHint>⌘ + K</ShortcutHint>
//            </SearchButton>
//          </CommandBar>
//       <LampContainer>
//         <motion.div
//           initial={initialValues}
//           whileInView={whileInViewValues}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut'
//           }}
//           className='mt-10 flex flex-col items-center bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text py-4 text-4xl font-medium tracking-tight text-transparent md:mt-1 md:text-7xl'
//         >
//           Diagnostico SRL
//         </motion.div>
//         <motion.div
//           initial={initialValues}
//           whileInView={whileInViewValues}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: 'easeInOut'
//           }}
//           className='mt-5 flex flex-col items-center bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text py-2 tracking-tight text-transparent md:mt-0 md:text-4xl lg:text-2xl'
//         >
//           <p>Laboratorio de Anatomía Patológica</p>
//           <Button className='mt-8 text-white' variant='outline'>
//             Contacto
//           </Button>
//         </motion.div>
//         <SparklesCore
//           background='transparent'
//           minSize={0.1}
//           maxSize={0.4}
//           particleDensity={1200}
//           className='lg:mt-30 absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] md:mt-20'
//           particleColor='#FFFFFF'
//         />
//       </LampContainer>
//       <Hero4 />
//       <Feature6 />
//       <FAQ1 />
//     </>
//   )
// }

// export default function Home() {
//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <h1 className='text-3xl font-bold'>Next shadcn starter</h1>
//         <CommandBar>
//           <SearchButton>
//             <MagnifyingGlassIcon className='mr-2 h-4 w-4 shrink-0 opacity-50' />
//             Search / Explore
//             <ShortcutHint>⌘ + K</ShortcutHint>
//           </SearchButton>
//         </CommandBar>
//       </div>
//     </section>
//   )
// }
