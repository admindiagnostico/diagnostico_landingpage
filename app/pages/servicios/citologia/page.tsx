import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

function Page() {
  return (
    <div className='w-full py-20 lg:py-40'>
      <div className='container mx-auto flex flex-col gap-14'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Servicios</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Citología</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
          <h4 className='font-regular max-w-xl text-3xl tracking-tighter md:text-5xl'>
            Citología
          </h4>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='flex flex-col gap-4 md:col-span-2'>
            <div className='flex flex-col gap-2'>
              <p className='max-w-3xl text-base text-muted-foreground'>
                En DIAGNOSTICO SRL ofrecemos estudio citológico de tomas
                realizadas en distintas topografias, incluyendo muestras de
                citología urinaria.
                <br />
                <br />
                Las muestras de orina, deben colectarse segun instructivo abajo
                y son evaluadas por patologa especialista en trato urogenital
                masculino.
              </p>
              <ul className='max-w-3xl list-disc pl-6 text-base text-muted-foreground'>
                <li>Descartar la primera orina de la mañana</li>
                <li>
                  Beber abundante líquido (1,5 litros) durante 2 a 3 horas
                </li>
                <li>
                  Recolectar la orina de la segunda micción de la mañana en
                  frasco estéril y cerrado herméticamente.
                </li>
                <li>
                  Realizar previamente una buena higiene del área
                  genito-urinaria. Después de orinar una pequeña cantidad dentro
                  del inodoro, para limpiar la uretra, se recoge un volumen de
                  orina en el frasco estéril (minimo necesario son 30 ml), se
                  retira el recipiente del chorro sin dejar de orinar y se
                  termina la micción en el inodoro.
                </li>
                <li>
                  La muestra con nombre del paciente y solicitud de estudio debe
                  ser llevada inmediatamente al laboratorio, para evitar
                  degradación celular.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
