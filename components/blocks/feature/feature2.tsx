import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const Feature2 = () => (
  <div className='flex flex-col items-start gap-4'>
    <div>
      <Badge>Nosotros</Badge>
    </div>
    <div className='flex flex-col gap-2'>
      <h2 className='font-regular text-3xl tracking-tighter md:text-5xl lg:max-w-xl'>
        ¿Quiénes somos?
      </h2>
      <div className='max-w-xl text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-xl'>
        <p className='mb-4'>
          {' '}
          <br></br>
          Somos un laboratorio dedicado a los pacientes, que requieren de un
          diagnóstico patológico, preciso, actualizado y rápido.
        </p>
        <p className='mb-4'>
          El sistema de valores y las creencias que nos definen son honestidad,
          espíritu crítico, humildad y fundamentalmente dedicación.
        </p>
        <p className='mb-4'>
          Nuestro compromiso y nuestra responsabilidad es tanto con los
          pacientes, como con colegas médicos e instituciones que depositan en
          nosotros su confianza.
        </p>
      </div>
    </div>
    <div className='flex w-full flex-col gap-10 pt-12'>
      <div className='grid grid-cols-2 items-start gap-10 lg:grid-cols-3'>
        <div className='flex w-full flex-row items-start gap-6'>
          <Check className='mt-2 h-4 w-4 text-primary' />
          <div className='flex flex-col gap-1'>
            <h3 className='text-base font-semibold'>Dirección</h3>
            <ul className='list-none text-sm text-muted-foreground'>
              <li>Dra. María Luisa Musto</li>
              <li>Dra. María Virginia Ortega</li>
              <li>Dra. Gabriela Gualco</li>
            </ul>
          </div>
        </div>
        <div className='flex w-full flex-row items-start gap-6'>
          <Check className='mt-2 h-4 w-4 text-primary' />
          <div className='flex flex-col gap-1'>
            <h3 className='text-base font-semibold'>Equipo Técnico</h3>
            <ul className='list-none text-sm text-muted-foreground'>
              <li>Dra. Stella Bianco</li>
              <li>Dra. Maria Oreggia</li>
              <li>Dra. Elena Gonzalez</li>
              <li>Dra. Ana Maslloréns</li>
              <li>Dra. Mariana Menini</li>
              <li>Dra. Cecilia Silva</li>
              <li>Dra. Carolina Viera</li>
              <li>Dra. Mariana Turell</li>
              <li>Dra. Dilia Díaz Arreaza</li>
              <li>Dra. Lucía Moller</li>
              <li>Dra. Laura Gonzalez</li>
              <li>Dra. Mariana López</li>
              <li>Dra. Paula Frones</li>
              <li>Dra. Paulina Ferraro</li>
              <li>Dr. Andrés Korbut</li>
              <li>Dr. Diego Rosales</li>
              <li>Dra. Cinthia Bernice Paz</li>
            </ul>
          </div>
        </div>
        <div className='flex w-full flex-row items-start gap-6'>
          <Check className='mt-2 h-4 w-4 text-primary' />
          <div className='flex flex-col gap-1'>
            <h3 className='text-base font-semibold'>Histotecnólogas</h3>
            <ul className='list-none text-sm text-muted-foreground'>
              <li>Tec. AP. Guislena López</li>
              <li>Tec. AP. Carmen Fontoura</li>
              <li>Tec. AP. Alexandra Perdomo</li>
            </ul>
          </div>
        </div>
        <div className='flex w-full flex-row items-start gap-6'>
          <Check className='mt-2 h-4 w-4 text-primary' />
          <div className='flex flex-col gap-1'>
            <h3 className='text-base font-semibold'>Administración</h3>
            <ul className='list-none text-sm text-muted-foreground'>
              <li>Ines Gonzalez</li>
              <li>Clara Giacomini</li>
              <li>Noelia Berazategui</li>
              <li>Maria Norma Ortega</li>
              <li>Carolina Piñeyro</li>
              <li>Noralisa Romero</li>
              <li>Joseline Conde</li>
              <li>Tec.AP Araceli Gonzalez</li>
              <li>María de Orta</li>
              <li>Carlos De Los Santos</li>
              <li>Cr. Martin Musto</li>
              <li>Ing. Javier Gualco</li>
            </ul>
          </div>
        </div>
        <div className='flex w-full flex-row items-start gap-6'>
          <Check className='mt-2 h-4 w-4 text-primary' />
          <div className='flex flex-col gap-1'>
            <h3 className='text-base font-semibold'>
              Tecnología de la información
            </h3>
            <ul className='list-none text-sm text-muted-foreground'>
              <li>Anibal Ramos</li>
              <li>Peter del Prestito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Feature2
