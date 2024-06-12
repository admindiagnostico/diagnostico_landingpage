'use client'
import React from 'react'
import styled from 'styled-components'
import CommandBar from '@/components/CommandBar/CommandBar'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Next shadcn starter</h1>
        <CommandBar>
          <SearchButton>
            Search / Explore
            <ShortcutHint>⌘ + K</ShortcutHint>
          </SearchButton>
        </CommandBar>
      </div>
    </section>
  )
}

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #333;
  }

  &:focus {
    outline: none;
  }
`

const ShortcutHint = styled.span`
  margin-left: 8px;
  font-size: 0.875rem;
  color: #ccc;
`
// 'use client'

// import React from 'react'
// import styled from 'styled-components'
// import CommandBar from '@/components/CommandBar/CommandBar'

// export default function Home() {
//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <h1 className='text-3xl font-bold'>Next shadcn starter</h1>
//         <CommandBar>
//           <SearchButton>
//             Search / Explore
//             <ShortcutHint>⌘ + K</ShortcutHint>
//           </SearchButton>
//         </CommandBar>
//       </div>
//     </section>
//   )
// }

// const SearchButton = styled.button`
//   padding: 8px 16px;
//   background-color: #000;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   font-weight: 700;
//   cursor: pointer;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background-color: #333;
//   }

//   &:focus {
//     outline: none;
//   }
// `

// const ShortcutHint = styled.span`
//   margin-left: 8px;
//   font-size: 0.875rem;
//   color: #ccc;
// `
