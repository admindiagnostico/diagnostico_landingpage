'use client'

import { Inter } from 'next/font/google'
import { useEffect } from 'react'
// import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'
const inter = Inter({ subsets: ['latin'] })

declare global {
  interface Window {
    pagefind: any
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === 'undefined') {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind generated after build
            /* webpackIgnore: true */ '/_next/static/chunks/pages/pagefind/pagefind.js'
          )
          console.log('Pagefind loaded successfully')
        } catch (error) {
          console.log('Error loading Pagefind', error)
          window.pagefind = {
            debouncedSearch: () => ({
              results: [
                {
                  id: 'pretzels',
                  data: async () => ({
                    url: '/pretzels.html',
                    meta: { title: 'These pretzels are making me thirsty' },
                    excerpt: 'these <mark>pretzels</mark> are making me thirsty'
                  })
                }
              ]
            })
          }
        }
      } else {
        console.log('Pagefind already loaded')
      }
    }
    loadPagefind()
  }, [])

  return (
    <html
      lang='en'
      className='scroll-smooth antialiased'
      suppressHydrationWarning
    >
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          {/* <Header /> */}
          <main className='grow'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
