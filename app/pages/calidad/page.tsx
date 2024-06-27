import React from 'react'
import { Badge } from '@/components/ui/badge'

const Feature4: React.FC = () => (
  <div className='w-full py-20 lg:py-40'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-center'>
        <div className='flex flex-1 flex-col gap-4'>
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl'>
              This is the start of something new
            </h2>
            <div className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm'>
              <p>
                La calidad en Anatomía Patológica se define como un{' '}
                <strong>Informe final, completo, preciso y a tiempo</strong>.
              </p>
              <p>
                En Diagnostico SRL contamos con habilitación del MSP, con los
                recursos técnicos, con la infraestructura y los sistemas
                necesarios para asegurar los procesos de generación de informes
                y la trazabilidad de los especímenes en todas sus etapas a
                efectos de brindar un diagnóstico de excelencia en Anatomía
                Patológica.
              </p>
              <p>
                Disponemos además de sistemas automatizados para el
                procesamiento de tejidos, coloración de láminas y para las
                técnicas de Inmunohistoquímica (IHQ) e Hibridación in Situ,
                participamos en los controles de calidad del{' '}
                <strong>Colegio Americano de Patólogos (CAP)</strong> para
                marcadores predictivos de IHQ y en los controles de calidad del{' '}
                <strong>NordiQC</strong> para las técnicas de hibridización in
                situ.
              </p>
              <p>
                Invertimos permanentemente en actividades científicas y de
                capacitación para los profesionales y funcionarios que integran
                el laboratorio; como parte de las iniciativas de mejora continua
                que llevamos adelante se nos ha otorgado el "Certificado UNIT de
                Sistema de Gestión de la Calidad, conforme a la norma{' '}
                <strong>UNIT-ISO9001:2015</strong>" número CS559 a nombre de
                Diagnóstico SRL.
              </p>
              <br></br>
              <p>
                Conducir el laboratorio de esta forma implica una inversión
                permanente la cual realizamos con la convicción de que es la
                forma correcta de hacer las cosas en beneficio de los pacientes,
                de los médicos y de las instituciones que confían en nosotros.
              </p>
            </div>
          </div>
        </div>
        <div className='aspect-video h-full w-full flex-1 rounded-md bg-muted'></div>
      </div>
    </div>
  </div>
)

export default Feature4
