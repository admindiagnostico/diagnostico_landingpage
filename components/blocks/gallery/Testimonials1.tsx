// // 'use client'
// import { useEffect, useState } from 'react'
// import {
//   Carousel,
//   CarouselApi,
//   CarouselContent,
//   CarouselItem
// } from '@/components/ui/carousel'
// import Image from 'next/image'

// export const Testimonials1 = () => {
//   const [api, setApi] = useState<CarouselApi>()
//   const [current, setCurrent] = useState(0)
//   const totalImages = 4 // We have 4 images: 1.png, 2.png, 3.png, 4.png

//   useEffect(() => {
//     if (!api) {
//       return
//     }
//     const intervalId = setInterval(() => {
//       if (current + 1 === totalImages) {
//         setCurrent(0)
//         api.scrollTo(0)
//       } else {
//         api.scrollNext()
//         setCurrent(current + 1)
//       }
//     }, 4000)

//     return () => clearInterval(intervalId)
//   }, [api, current])

//   return (
//     <div className='w-full py-20 lg:py-40'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col gap-10'>
//           <h2 className='font-regular text-left text-3xl tracking-tighter md:text-5xl lg:max-w-xl'>
//             Trusted by thousands of businesses worldwide
//           </h2>
//           <Carousel setApi={setApi} className='w-full'>
//             <CarouselContent>
//               {[1, 2, 3, 4].map(imageNumber => (
//                 <CarouselItem key={imageNumber} className='lg:basis-1/2'>
//                   <div className='relative aspect-video w-full'>
//                     <Image
//                       src={`/assets/hero4/${imageNumber}.png`}
//                       alt={`Testimonial image ${imageNumber}`}
//                       layout='fill'
//                       objectFit='cover'
//                       className='rounded-md'
//                     />
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { useEffect, useState } from 'react'
// import {
//   Carousel,
//   CarouselApi,
//   CarouselContent,
//   CarouselItem
// } from '@/components/ui/carousel'

// export const Testimonials1 = () => {
//   const [api, setApi] = useState<CarouselApi>()
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     if (!api) {
//       return
//     }

//     setTimeout(() => {
//       if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
//         setCurrent(0)
//         api.scrollTo(0)
//       } else {
//         api.scrollNext()
//         setCurrent(current + 1)
//       }
//     }, 1000)
//   }, [api, current])

//   return (
//     <div className='w-full py-20 lg:py-40'>
//       <div className='container mx-auto'>
//         <div className='grid grid-cols-5 items-center gap-10'>
//           <h3 className='font-regular text-left text-xl tracking-tighter lg:max-w-xl'>
//             Trusted by market leaders
//           </h3>
//           <div className='relative col-span-4 w-full'>
//             <div className='absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-r from-background via-white/0 to-background'></div>
//             <Carousel setApi={setApi} className='w-full'>
//               <CarouselContent>
//                 {Array.from({ length: 25 }).map((_, index) => (
//                   <CarouselItem className='basis-1/4 lg:basis-1/6' key={index}>
//                     <div className='flex aspect-square items-center justify-center rounded-md bg-muted p-2'>
//                       <span className='text-sm'>Logo {index + 1}</span>
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import Image from 'next/image'

export const Testimonials1 = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const totalImages = 4 // We have 4 images: 1.png, 2.png, 3.png, 4.png

  useEffect(() => {
    if (!api) {
      return
    }
    const intervalId = setInterval(() => {
      if (current + 1 === totalImages) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent(current + 1)
      }
    }, 4000)

    return () => clearInterval(intervalId)
  }, [api, current])

  return (
    <div className='w-full py-20 lg:py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10'>
          <h2 className='font-regular text-left text-3xl tracking-tighter md:text-5xl lg:max-w-xl'>
            Primamos la actualización del conocimiento y la renovación
            tecnológica.
          </h2>
          <div className='relative w-full'>
            <div className='absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-gradient-to-r from-background via-white/0 to-background'></div>
            <Carousel setApi={setApi} className='w-full'>
              <CarouselContent>
                {[1, 2, 3, 4].map(imageNumber => (
                  <CarouselItem key={imageNumber} className='lg:basis-1/2'>
                    <div className='relative aspect-video w-full'>
                      <Image
                        src={`/assets/hero4/${imageNumber}.png`}
                        alt={`Testimonial image ${imageNumber}`}
                        layout='fill'
                        objectFit='cover'
                        className='rounded-md'
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials1
