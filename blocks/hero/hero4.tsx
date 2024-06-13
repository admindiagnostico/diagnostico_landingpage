import { MoveRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export const Hero4 = () => (
  <div className='w-full py-20 lg:py-40'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <div>
            <Badge variant='outline'>We&apos;re live!</Badge>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-regular max-w-lg text-left text-5xl tracking-tighter md:text-7xl'>
              Calidad y eficiencia en patología médica.
            </h1>
            <p className='max-w-md text-left text-xl leading-relaxed tracking-tight text-muted-foreground'>
              Anatomía Patológica Inmunohistoquímica Citología
            </p>
          </div>
          <div className='flex flex-row gap-4'>
            <Button size='lg' className='gap-4' variant='outline'>
              Jump on a call <PhoneCall className='h-4 w-4' />
            </Button>
            <Button size='lg' className='gap-4'>
              Sign up here <MoveRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-8'>
          <div className='rounded-md'>
            <Image
              src='/assets/hero4/1.png'
              width={1054}
              height={703}
              alt='Picture of the author'
            />
          </div>
          <div className='rounded-md bg-muted'>
            <Image
              src='/assets/hero4/2.png'
              width={1742}
              height={1166}
              alt='Picture of the author'
            />
          </div>
          <div className='rounded-md bg-muted'>
            <Image
              src='/assets/hero4/3.png'
              width={1740}
              height={1162}
              alt='Picture of the author'
            />
          </div>
          <div className='rounded-md bg-muted'>
            <Image
              src='/assets/hero4/4.png'
              width={1738}
              height={1104}
              alt='Picture of the author'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)
