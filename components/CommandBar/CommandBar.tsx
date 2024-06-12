// import { useEffect, useState, useRef } from 'react'
// import styled from 'styled-components'
// import VisuallyHidden from '@/components/VisuallyHidden'
// import Dialog from '@/components/Dialog'
// import SearchResults from './SearchResults'
// import Nav from './Nav'

// const CommandBar = ({ children }) => {
//   const [query, setQuery] = useState('')
//   const [results, setResults] = useState([])
//   const [dialogIsOpen, setDialogIsOpen] = useState(false)

//   const searchInputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     function handleKeyDown(event) {
//       if (
//         (event.metaKey && event.key === 'k') || // For macOS (Command+K)
//         (event.ctrlKey && event.key === 'k') // For Windows/Linux (Ctrl+K)
//       ) {
//         setDialogIsOpen(true)
//       }
//     }

//     document.addEventListener('keydown', handleKeyDown)

//     return () => document.removeEventListener('keydown', handleKeyDown)
//   }, [])

//   async function handleSearch(e) {
//     e.preventDefault()

//     if (window.pagefind) {
//       const search = await window.pagefind.debouncedSearch(query)
//       setResults(search.results)
//     }
//   }

//   return (
//     <Dialog
//       open={dialogIsOpen}
//       onOpenChange={() => setDialogIsOpen(!dialogIsOpen)}
//       srTitle='Search and explore'
//       srDescription='Find content by searching, or follow navigation links.'
//       trigger={children}
//     >
//       <>
//         <search>
//           <form onSubmit={handleSearch}>
//             <VisuallyHidden>
//               <label htmlFor='search'>Search</label>
//             </VisuallyHidden>
//             <StyledInput
//               type='text'
//               id='search'
//               placeholder='Search the site'
//               ref={searchInputRef}
//               value={query}
//               onChange={e => setQuery(e.target.value)}
//               onInput={handleSearch}
//             />
//           </form>
//         </search>
//         {query ? (
//           <SearchResults
//             results={results}
//             handleClick={() => setDialogIsOpen(false)}
//           />
//         ) : (
//           <Nav handleClick={() => setDialogIsOpen(false)} />
//         )}
//       </>
//     </Dialog>
//   )
// }

// const StyledInput = styled.input`
//   width: calc(100% - 52px);
//   background-color: #fff;
//   border: 2px solid #000;
//   border-radius: 4px;
//   padding: 8px;
//   font-family: 'Inter', sans-serif;
//   font-size: 0.875rem;
//   font-weight: 700;

//   &::placeholder {
//     color: #000;
//     opacity: 0.75;
//   }
// `

// export default CommandBar
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import VisuallyHidden from '@/components/VisuallyHidden'
import Dialog from '@/components/Dialog'
import SearchResults from './SearchResults'
import Nav from './Nav'

const CommandBar = ({ children }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        (event.metaKey && event.key === 'k') || // For macOS (Command+K)
        (event.ctrlKey && event.key === 'k') // For Windows/Linux (Ctrl+K)
      ) {
        setDialogIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (window.pagefind) {
      console.log('Pagefind is loaded in useEffect.')
    } else {
      console.log('Pagefind is not loaded in useEffect.')
    }
  }, [])

  async function handleSearch(e) {
    e.preventDefault()
    console.log('Search initiated with query:', query)

    if (window.pagefind) {
      console.log('Pagefind is loaded.')
      const search = await window.pagefind.debouncedSearch(query)
      console.log('Search results:', search)
      setResults(search.results)
    } else {
      console.log('Pagefind is not loaded.')
    }
  }

  return (
    <Dialog
      open={dialogIsOpen}
      onOpenChange={() => setDialogIsOpen(!dialogIsOpen)}
      srTitle='Search and explore'
      srDescription='Find content by searching, or follow navigation links.'
      trigger={children}
    >
      <>
        <search>
          <form onSubmit={handleSearch}>
            <VisuallyHidden>
              <label htmlFor='search'>Search</label>
            </VisuallyHidden>
            <StyledInput
              type='text'
              id='search'
              placeholder='Search the site'
              ref={searchInputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onInput={handleSearch}
            />
          </form>
        </search>
        {query ? (
          <SearchResults
            results={results}
            handleClick={() => setDialogIsOpen(false)}
          />
        ) : (
          <Nav handleClick={() => setDialogIsOpen(false)} />
        )}
      </>
    </Dialog>
  )
}

const StyledInput = styled.input`
  width: calc(100% - 52px);
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  padding: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;

  &::placeholder {
    color: #000;
    opacity: 0.75;
  }
`

export default CommandBar
