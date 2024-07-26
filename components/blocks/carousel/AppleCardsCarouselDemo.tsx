// 'use client'
// import React from 'react'
// import { Carousel, Card } from '@/components/ui/apple-cards-carousel'
// import Image from 'next/image'

// export function AppleCardsCarouselDemo() {
//   const cards = data.map(card => (
//     <Card key={card.id} card={card} index={data.indexOf(card)} />
//   ))

//   return (
//     <div className='h-full w-full py-20 pl-20'>
// <h2 className='font-regular text-left text-3xl tracking-tighter md:text-5xl lg:max-w-xl'>
//   Primamos la actualización del conocimiento y la renovación tecnológica.
// </h2>
//       <Carousel items={cards} />
//     </div>
//   )
// }

// const MaxImage = ({ src }: { src: string }) => (
//   <div className='flex h-full items-center justify-center'>
//     <Image
//       src={src}
//       alt='Maximized slide'
//       width={544} // Doubled the width for better resolution
//       height={1540} // Doubled the height for better resolution
//       className='object-contain'
//     />
//   </div>
// )

// const data = [
//   {
//     id: '1',
//     // category: 'Artificial Intelligence',
//     // title: 'You can do more with AI.',
//     src: '/assets/slides/slide1.jpeg',
//     content: <MaxImage src='/assets/slides/maxslide1.jpg' />
//   },
//   {
//     id: '2',
//     // category: 'Productivity',
//     // title: 'Enhance your productivity.',
//     src: '/assets/slides/slide2.jpeg',
//     content: <MaxImage src='/assets/slides/maxslide2.jp' />
//   },
//   {
//     id: '3',
//     // category: 'Product',
//     // title: 'Launching the new Apple Vision Pro.',
//     src: '/assets/slides/slide3.jpeg',
//     content: <MaxImage src='/assets/slides/maxslide3.jpg' />
//   },
//   {
//     id: '4',
//     // category: 'Product',
//     // title: 'Maps for your iPhone 15 Pro Max.',
//     src: '/assets/slides/slide4.jpeg',
//     content: <MaxImage src='/assets/slides/maxslide4.jpg' />
//   },
//   {
//     id: '5',
//     // category: 'iOS',
//     // title: 'Photography just got better.',
//     src: '/assets/slides/slide5.jpeg',
//     content: <MaxImage src='/assets/slides/maxslide5.jpg' />
//   },
//   {
//     id: '6',
//     // category: 'Hiring',
//     // title: 'Hiring for a Staff Software Engineer',
//     src: '/assets/slides/slide6.jpeg',

//     content: <MaxImage src='/assets/slides/maxslide6.jpg' />
//   }
// ]
'use client'
import React from 'react'
import { Carousel, Card } from '@/components/ui/apple-cards-carousel'
import Image from 'next/image'

export function AppleCardsCarouselDemo() {
  const cards = data.map(card => (
    <Card key={card.id} card={card} index={data.indexOf(card)} />
  ))

  return (
    <div className='h-full w-full py-20'>
      <h2 className='font-regular pl-20 text-left text-3xl tracking-tighter md:text-5xl lg:max-w-xl'>
        Primamos la actualización del conocimiento y la renovación tecnológica.
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const MaxImage = ({ src }: { src: string }) => (
  <div className='flex h-full items-center justify-center'>
    <Image
      src={src}
      alt='Maximized slide'
      width={1400}
      height={3000}
      className='object-contain'
    />
  </div>
)

const data = [
  {
    id: '1',
    // category: 'Artificial Intelligence',
    // title: 'You can do more with AI.',
    src: '/assets/slides/slide1.jpeg',
    content: <MaxImage src='/assets/slides/maxslide1.jpg' />
  },
  {
    id: '2',
    // category: 'Productivity',
    // title: 'Enhance your productivity.',
    src: '/assets/slides/slide2.jpeg',
    content: <MaxImage src='/assets/slides/maxslide2.jpg' />
  },
  {
    id: '3',
    // category: 'Product',
    // title: 'Launching the new Apple Vision Pro.',
    src: '/assets/slides/slide3.jpeg',
    content: <MaxImage src='/assets/slides/maxslide3.jpg' />
  },
  {
    id: '4',
    // category: 'Product',
    // title: 'Maps for your iPhone 15 Pro Max.',
    src: '/assets/slides/slide4.jpeg',
    content: <MaxImage src='/assets/slides/maxslide4.jpg' />
  },
  {
    id: '5',
    // category: 'iOS',
    // title: 'Photography just got better.',
    src: '/assets/slides/slide5.jpeg',
    content: <MaxImage src='/assets/slides/maxslide5.jpg' />
  },
  {
    id: '6',
    // category: 'Hiring',
    // title: 'Hiring for a Staff Software Engineer',
    src: '/assets/slides/slide6.jpeg',
    content: <MaxImage src='/assets/slides/maxslide6.jpg' />
  }
]

export default AppleCardsCarouselDemo
