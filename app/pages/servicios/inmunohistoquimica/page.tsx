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
              <BreadcrumbPage>Inmunohistoquímica</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
          <h4 className='font-regular max-w-xl text-3xl tracking-tighter md:text-5xl'>
            Inmunohistoquímica
          </h4>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='flex flex-col gap-4 md:col-span-2'>
            <div className='flex flex-col gap-4'>
              <p className='max-w-3xl text-base text-muted-foreground'>
                La <strong>inmunohistoquímica</strong> es un procedimiento
                histopatológico que se basa en la utilización de anticuerpos que
                se unen específicamente a una sustancia que se quiere
                identificar (antígeno) localizada en la célula o tejido en
                análisis. Esta unión especifica entre el anticuerpo y el
                antígeno, se visualiza mediante la generación de un producto que
                identificable colorimétricamente, donde se encuentre el complejo
                antígeno-anticuerpo.
              </p>
              <p className='max-w-3xl text-base text-muted-foreground'>
                Esta técnica permite identificar la localización de una
                sustancia específica permitiendo identificar su localización
                tisular o citológica, de esta manera se pueden identificar los
                marcadores antigénicos característicos de una línea celular,
                identificar células que secretan una proteína, receptores de
                membrana, gradientes de concentración tisulares o células que
                han respondido a una hormona (con anticuerpos específicos para
                las vías de señalización intracelular).
              </p>
              <p className='max-w-3xl text-base text-muted-foreground'>
                Esta herramienta permite objetivizar el diagnostico, definir
                elementos de valor pronostico o predictivos de respuesta aun
                tratamiento.
              </p>
              <p className='max-w-3xl text-base text-muted-foreground'>
                Dentro de los usos mas comunes se encuentran:
              </p>
              <ul className='max-w-3xl list-disc space-y-2 pl-6 text-base text-muted-foreground'>
                <li>Separación entres neoplasias benignas y malignas</li>
                <li>Definición entre proceso reactivo y neoplásico</li>
                <li>Confirmación de invasión en procesos neoplasicos</li>
                <li>
                  Identificación del sitio primario de un tumor metastatico de
                  origen desconocido
                </li>
                <li>
                  Clasificación de neoplasias, segun su estirpe o histogenesis,
                  como linfomas vs carcinoma vs melanoma.
                </li>
                <li>Subtipificación de neoplasias linfoides</li>
                <li>Subtipificación de sarcomas</li>
                <li>
                  Diagnostico diferencial entre neoplasias poco o
                  indiferenciadas
                </li>
                <li>Paneles de valor pronostico en cáncer, mama, pulmón</li>
                <li>
                  Paneles de valor predictivo en cáncer, mama, pulmón, melanoma
                </li>
                <li>Estudio de ganglio centinela</li>
                <li>
                  Estudio de expresión proteica de marcadores moleculares,
                  oncogenes, genes supresores de tumor, etc.
                </li>
              </ul>
              <p className='max-w-3xl text-base text-muted-foreground'>
                Cada vez mas esta herramienta del patólogo está ampliando los
                horizontes y el alcance de la especialidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
