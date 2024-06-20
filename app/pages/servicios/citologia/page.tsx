// Custom Blog2 content. Hice un rfce y luego dentro del return () puse el contenido

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

function page() {
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
              <BreadcrumbPage>Anatomía Patológica</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8'>
          <h4 className='text-3xl md:text-5xl tracking-tighter max-w-xl font-regular'>
            Anatomía Patológica
          </h4>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-4  md:col-span-2'>
            <div className='flex flex-col gap-2'>
              <p className='max-w-3xl text-muted-foreground text-base'>
                En DIAGNOSTICO SRL estamos comprometidos en brindarle el mejor
                servicio posible. Disponemos de la experiencia, recursos y
                tecnología para atenderle.<br></br>
                <br></br> Dentro de nuestro personal, contamos con profesionales
                altamente entrenados, con dedicación completa para brindar
                atención profesional personalizada, de forma agradable y
                eficiente. <br></br>
                <br></br>Ofrecemos estudio de anatomía patológica convencional,
                con finalidad diagnóstica y pronóstica, siguiendo las
                recomendaciones internacionales actualizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
