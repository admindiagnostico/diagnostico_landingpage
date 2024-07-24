import { Check, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const Feature6 = () => (
  <div className='w-full py-20 lg:py-40'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col items-start gap-4'>
          {/* <div>
            <Badge>Platform</Badge>
          </div> */}
          <div className='flex flex-col gap-2'>
            <h2 className='font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl'>
              Laboratorio de Anatomía Patológica
            </h2>
            {/* <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg'>
              Puntos principales.
            </p> */}
          </div>
        </div>
        <div className='flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4'>
          <div className='flex aspect-square h-full w-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:row-span-2'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>Anatomía Patológica</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                La anatomía patológica es la rama de la medicina que se ocupa
                del estudio de las enfermedades humanas, por medio de técnicas
                morfológicas. El fin último de esta especialidad es el
                diagnóstico correcto de biopsias, piezas quirúrgicas, citologías
                y autopsias.
              </p>
            </div>
          </div>

          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              {/* <h3 className='text-xl tracking-tight'>Pay supplier invoices</h3> */}
              <p className='max-w-xs text-base text-muted-foreground'>
                La anatomía patológica es una especialidad médica que posee un
                cuerpo doctrinal de carácter básico que determina que sea, por
                una parte, una disciplina académica autónoma y, por otra, una
                unidad funcional en la asistencia médica.
              </p>
            </div>
          </div>

          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-muted/30 p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>Politica de Calidad</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                Brindar diagnósticos en anatomía patológica de excelencia,
                comprometidos con las necesidades de los pacientes, médicos e
                instituciones , proporcionando elementos de valor para guiar la
                terapéutica y evaluar el pronóstico del paciente.
              </p>
            </div>
          </div>

          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-muted/30 p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              {/* <h3 className='text-xl tracking-tight'>Pay supplier invoices</h3> */}
              <p className='max-w-xs text-base text-muted-foreground'>
                La mejora continua de nuestros procesos es el camino para
                lograrlo. Es por ello por lo que La Dirección Técnica ha
                decidido implantar en el laboratorio DIAGNOSTICO SRL un sistema
                de gestión de la calidad basado en la norma ISO 9001:2015.
              </p>
            </div>
          </div>

          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-muted/30 p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              {/* <h3 className='text-xl tracking-tight'>Pay supplier invoices</h3> */}
              <p className='max-w-xs text-base text-muted-foreground'>
                Nos comprometemos a cumplir con los requisitos aplicables con el
                fin de conseguir la mejora continua del sistema de gestión de
                calidad.
              </p>
            </div>
          </div>

          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-slate-600 p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>Misión</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                Somos un laboratorio dedicado al diagnóstico anatomo-patológico.
                Trabajamos enfocados a la calidad y seguridad para mejorar las
                etapas de este proceso diagnóstico, dirigido a los pacientes,
                médicos, instituciones de salud pública y privada.
              </p>
            </div>
          </div>

          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-slate-600 p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              {/* <h3 className='text-xl tracking-tight'>Pay supplier invoices</h3> */}
              <p className='max-w-xs text-base text-muted-foreground'>
                Brindamos un servicio de calidad, personalizado, eficiente y
                dinámico para satisfacer las necesidades de los mismos. Primamos
                la actualización del conocimiento y la renovación tecnológica
                para un crecimiento sostenido, con el objetivo de dar lo mejor
                al paciente.
              </p>
            </div>
          </div>

          <div className='flex h-full flex-col justify-between rounded-md border border-slate-800 bg-slate-950 p-6 lg:col-span-2'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>Visión</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                Proyectarnos como un laboratorio de referencia en patología en
                el país, incluyendo además de la etapa diagnóstica, elementos de
                valor para guiar la terapéutica y evaluar el pronóstico, para
                cada paciente, en diferentes áreas de la patología.
              </p>
            </div>
          </div>
          <div className='flex h-full flex-col justify-between rounded-md border border-slate-800 bg-slate-950 p-6 lg:col-span-2'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              {/* <h3 className='text-xl tracking-tight'>Visión</h3> */}
              <p className='max-w-xs text-base text-muted-foreground'>
                Ser reconocidos por la calidad humana y profesional de nuestro
                equipo. Contribuir activamente al bien de nuestra comunidad,
                aplicando el conocimiento actualizado, la tecnología e
                innovación en el área.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
