import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { LayoutTransition } from '@/components/layout-transition'

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
              <BreadcrumbPage>Biologia Molecular</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between'>
          <h4 className='font-regular max-w-xl text-3xl tracking-tighter md:text-5xl'>
            Idylla™: Sistema de Pruebas Moleculares
          </h4>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='flex flex-col gap-4 md:col-span-2'>
            <Image
              src='/assets/hero4/3.png'
              width={1740}
              height={1162}
              alt='Picture of the author'
            />

            <div className='flex flex-row items-center gap-4'></div>
            <div className='flex flex-col gap-2'>
              <p className='max-w-3xl text-base text-muted-foreground'>
                La solución Idylla™ que incorporamos recientemente es un
                sistema revolucionario de pruebas moleculares basado en PCR en
                tiempo real, es totalmente automatizado, diseñado para ofrecer
                resultados en un tiempo mínimo y ampliamente probado a nivel
                mundial.
                <br></br>
                <br></br>
                Los testeos se realizan a demanda, caso a caso, sin necesidad de
                utilizar procesamiento por lotes, logrando que las
                determinaciones moleculares sean muy rápidas, cómodas, adecuadas
                a la dinámica de nuestro laboratorio y a las necesidades
                terapéuticas del paciente.
                <br></br>
                <br></br>A partir de muestras de tejido tumoral fijadas en
                formol e incluidas en parafina nos permite realizar tests para
                detectar mutaciones específicas de gran importancia terapéutica.
                <br></br>
                <br></br>
                La incorporación de esta solución nos permite realizar un testeo
                de alta calidad, preciso completo, evitando trasladar los
                bloques de parafina a otros centros, preservando al máximo el
                material del paciente y sobre todo acortando el tiempo total de
                diagnóstico.
                <br></br>
                <br></br>
                Las siguientes son las determinaciones que incorporamos y los
                aspectos generales de aplicación de cada una:
              </p>
              {/* Add bullet points here */}
              <ul className='custom-bullets list-inside text-base text-muted-foreground'>
                <li>
                  EGFR - Se utiliza para la detección de todas las mutaciones
                  relevantes para cáncer de pulmón y definición de tratamiento.
                </li>
                <li>
                  BRAF - Se utiliza para la detección de mutaciones del gen BRAF
                  recomendada para todos los pacientes con melanoma avanzado o
                  metastásico y cáncer colorrectal metastásico (mCRC) para
                  definir u orientar el tratamiento.
                </li>
                <li>
                  KRAS - Se utiliza para la detección de mutaciones de los genes
                  RAS, en casos de cáncer de pulmón, cáncer colorrectal y cáncer
                  de páncreas, para definición del tratamiento y valor
                  pronóstico.
                </li>
                <li>
                  NRAS/BRAF/EGFR (S492R) - Se utiliza para evaluar el estado
                  mutacional del gen RAS, se aplica en casos de cáncer de
                  colorrectal, pulmón, tiroides y melanoma. En muestras de tumor
                  procedentes de pacientes con cáncer colorrectal metastásico,
                  el estado mutacional de BRAF se evalúa junto con el de RAS
                  como biomarcador de valor pronóstico.
                </li>
                <li>
                  MSI - Se utiliza para la identificación de casos de cáncer con
                  inestabilidad de microsatélites (MSI).
                </li>
                <li>
                  GeneFusion - Se utiliza para la detección cualitativa de
                  fusiones genéticas específicas para los genes: ALK, ROS1, RET,
                  también como el exón 14 MET y desequilibrio de expresión para
                  ALK, ROS1, RET y NTRK1/2/3.
                </li>
              </ul>
              <br></br>
              <p className='max-w-3xl text-base text-muted-foreground'>
                Cada vez más, esta herramienta del patólogo está ampliando los
                horizontes y el alcance de la especialidad.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page
