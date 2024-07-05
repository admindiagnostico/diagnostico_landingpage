// Custom Blog2 content. Hice un rfce y luego dentro del return () puse el contenido

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { LayoutTransition } from '@/components/layout-transition'

function Blog2() {
  return (
    <div className='w-full py-20 lg:py-40'>
      <div className='container mx-auto flex flex-col gap-14'>
        <div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
          <h4 className='font-regular max-w-xl text-3xl tracking-tighter md:text-5xl'>
            Anatomía Patológica
          </h4>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='flex flex-col gap-4 md:col-span-2'>
            <div className='flex flex-col gap-2'>
              <p className='max-w-3xl text-base text-muted-foreground'>
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

export default Blog2
