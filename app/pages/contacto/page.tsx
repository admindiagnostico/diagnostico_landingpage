'use client'

import { useEffect } from 'react'
import { ContactForm } from '@/components/ContactForm'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export default function ContactoPage() {
  useEffect(() => {
    console.log('ContactoPage component mounted')
  }, [])

  return (
    <div className='w-full py-20 lg:py-40'>
      <div className='container mx-auto flex flex-col gap-14'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href='/' passHref legacyBehavior>
                <BreadcrumbLink>Inicio</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contacto</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ContactForm />
      </div>
    </div>
  )
}
