'use client'

import React from 'react'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Blog2 from '@/components/blocks/blog/blog2'
import { Spotlight } from '@/components/ui/Spotlight'

function Page() {
  return (
    <div className='w-full py-20 lg:py-40'>
      <Spotlight className='right-0 top-1' />
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
              <BreadcrumbPage>¿Quiénes somos?</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Blog2 />
      </div>
    </div>
  )
}

export default Page
