// export default function Home() {
//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <h1 className='text-3xl font-bold'>Next shadcn starter</h1>
//       </div>
//     </section>
//   )
// }
'use client'
import React from 'react'
import CommandBar from '@/components/CommandBar/CommandBar'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Next shadcn starter</h1>
        <CommandBar>
          <button>Open Search</button>
        </CommandBar>
      </div>
    </section>
  )
}
