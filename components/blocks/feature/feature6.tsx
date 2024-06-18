import { User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const Feature6 = () => (
  <div className='w-full py-20 lg:py-40'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col items-start gap-4'>
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl'>
              Laboratorio de Anatomía Patológica
            </h2>
            <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg'>
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>La anatomía patológica</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                es la rama de la medicina que se ocupa del estudio de las
                enfermedades humanas, por medio de técnicas morfológicas.
              </p>
            </div>
          </div>
          <div className='flex aspect-square flex-col justify-between rounded-md bg-muted p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>El fin último</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                de esta especialidad es el diagnóstico correcto de biopsias,
                piezas quirúrgicas, citologías y autopsias. Leer más:
                https://www.diagnosticosrl.com/
              </p>
            </div>
          </div>

          <div className='flex aspect-square flex-col justify-between rounded-md bg-muted p-6'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>La anatomía patológica</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                es una especialidad médica que posee un cuerpo doctrinal de
                carácter básico que determina que sea, por una parte, una
                disciplina académica autónoma y, por otra, una unidad funcional
                en la asistencia médica. Leer más:
                https://www.diagnosticosrl.com/
              </p>
            </div>
          </div>
          <div className='flex aspect-square h-full flex-col justify-between rounded-md bg-muted p-6 lg:col-span-2 lg:aspect-auto'>
            <User className='h-8 w-8 stroke-1' />
            <div className='flex flex-col'>
              <h3 className='text-xl tracking-tight'>Pay supplier invoices</h3>
              <p className='max-w-xs text-base text-muted-foreground'>
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
