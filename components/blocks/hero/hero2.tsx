import { MoveRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const Hero2 = () => (
  <div className='w-full'>
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center gap-8 py-20 lg:py-40'>
        <div>
          <Badge variant='default'>Acceso exclusivo</Badge>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl'>
            Acceso a resultados en línea. <br></br>Disponible solo para médicos
            y prestadores de salud.
          </p>
        </div>
        <div className='flex flex-row gap-3'>
          <Link href='http://diagnosticosrl.com.uy' passHref>
            <Button size='lg' className='gap-4' variant='outline'>
              Ingreso <MoveRight className='h-4 w-4' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)
