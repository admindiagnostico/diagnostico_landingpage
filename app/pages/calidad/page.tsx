import { Badge } from '@/components/ui/badge'
import { GlareCard } from '@/components/ui/glare-card'
import NextImage from 'next/image'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export default function CalidadPage() {
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
              <BreadcrumbPage>Calidad</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
          <div className='flex flex-col gap-4 lg:w-2/3'>
            <div>
              <Badge>Gestión de la calidad</Badge>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl'>
                Compromiso<br></br>
                <br></br>
              </h2>
              <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground'>
                La calidad en Anatomía Patológica se define como un Informe
                final, completo, preciso y a tiempo.<br></br>
                <br></br>En Diagnostico SRL contamos con habilitación del MSP,
                con los recursos técnicos, con la infraestructura y los sistemas
                necesarios para asegurar los procesos de generación de informes
                y la trazabilidad de los especímenes en todas sus etapas a
                efectos de brindar un diagnóstico de excelencia en Anatomía
                Patológica.
                <br></br>
                <br></br>
                Disponemos además de sistemas automatizados para el
                procesamiento de tejidos, coloración de láminas y para las
                técnicas de Inmunohistoquímica (IHQ) e Hibridación in Situ,
                participamos en los controles de calidad del Colegio Americano
                de Patólogos (CAP) para marcadores predictivos de IHQ y en los
                controles de calidad del NordiQC para las técnicas de
                hibridización in situ.
                <br></br>
                <br></br>
                Invertimos permanentemente en actividades científicas y de
                capacitación para los profesionales y funcionarios que integran
                el laboratorio; como parte de las iniciativas de mejora continua
                que llevamos adelante se nos ha otorgado el "Certificado UNIT de
                Sistema de Gestión de la Calidad, conforme a la norma
                UNIT-ISO9001:2015" número CS559 a nombre de Diagnóstico SRL.
                <br></br>
                <br></br>
                Conducir el laboratorio de esta forma implica una inversión
                permanente la cual realizamos con la convicción de que es la
                forma correcta de hacer las cosas en beneficio de los pacientes,
                de los médicos y de las instituciones que confían en nosotros.
                <br></br>
                <br></br>
              </p>
            </div>
          </div>

          <GlareCard className='flex flex-col items-center justify-center'>
            <div className='h-full w-full p-4'>
              <div className='relative h-full w-full'>
                <NextImage
                  src='/assets/iso/CS_559.png'
                  alt='CS 559 Image'
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  quality={100}
                />
              </div>
            </div>
          </GlareCard>
        </div>
      </div>
    </div>
  )
}
