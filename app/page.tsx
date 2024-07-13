'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { LampContainer } from '@/components/ui/lamp'
import { Header1 } from '@/components/header'
import { Hero4 } from '@/components/blocks/hero/hero4'
import { Feature6 } from '@/components/blocks/feature/feature6'
import { FAQ1 } from '@/components/blocks/faq/faq1'
import { SparklesCore } from '@/components/ui/sparkles'
import { useMediaQuery } from 'react-responsive'
import { Testimonials1 } from '@/components/blocks/gallery/Testimonials1'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  const isMediumDevice = useMediaQuery({ query: '(min-width: 768px)' })
  const isLargeDevice = useMediaQuery({ query: '(min-width: 1024px)' })

  let initialValues = { opacity: 0.5, y: 500 }
  let whileInViewValues = { opacity: 1, y: 300 }

  if (isMediumDevice) {
    initialValues = { opacity: 0.5, y: 400 }
    whileInViewValues = { opacity: 1, y: 100 }
  }

  if (isLargeDevice) {
    initialValues = { opacity: 0.5, y: 500 }
    whileInViewValues = { opacity: 1, y: 300 }
  }

  useEffect(() => {
    console.log('Home page mounted')
  }, [])

  return (
    <>
      <Header1 />

      <LampContainer>
        <motion.div
          initial={initialValues}
          whileInView={whileInViewValues}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className='mt-10 flex flex-col items-center bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text py-4 text-5xl font-medium tracking-tight text-transparent sm:text-5xl md:mt-1 md:text-6xl lg:text-7xl'
        >
          Diagnostico SRL
        </motion.div>
        <motion.div
          initial={initialValues}
          whileInView={whileInViewValues}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className='mt-5 flex flex-col items-center bg-gradient-to-br from-slate-200 to-slate-300 bg-clip-text py-2 text-xl leading-relaxed tracking-tight text-muted-foreground sm:text-xl md:mt-0 md:text-2xl lg:text-3xl'
        >
          <p>Laboratorio de Anatomía Patológica</p>
          <Link href='/pages/contacto' passHref legacyBehavior>
            <Button className='mt-8 text-white' variant='outline'>
              Contacto
            </Button>
          </Link>
        </motion.div>
        <SparklesCore
          background='transparent'
          minSize={0.1}
          maxSize={0.4}
          particleDensity={30}
          className='absolute inset-0 h-full w-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'
          particleColor='#FFFFFF'
        />
      </LampContainer>
      <Hero4 />
      <Feature6 />
      <Testimonials1 />
      <FAQ1 />
    </>
  )
}
