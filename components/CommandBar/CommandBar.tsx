'use client'

import { useEffect, useState, useRef, ChangeEvent } from 'react'
import styled from 'styled-components'
import Dialog from '@/components/Dialog'
import Nav from './Nav'

const CommandBar = ({ children }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
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

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.target.value)
    console.log('Search initiated with query:', e.target.value)

    if (window.pagefind) {
      console.log('Pagefind is loaded.')
      const search = await window.pagefind.debouncedSearch(e.target.value)
      console.log('Search results:', search)
      setResults(search.results)
    } else {
      console.log('Pagefind is not loaded.')
    }
  }

  const handleDialogChange = () => {
    setDialogIsOpen(!dialogIsOpen)
    if (dialogIsOpen) {
      setQuery('')
      setResults([])
    }
  }

  return (
    <Dialog
      open={dialogIsOpen}
      onOpenChange={handleDialogChange}
      srTitle='Search and explore'
      srDescription='Find content by searching, or follow navigation links.'
      trigger={children}
    >
      {/* ANIBAL: esto lo hice para que el header1 estuviera blured */}
      <div className='rounded-lg border border-slate-700 shadow-md'>
        <div className='flex items-center border-b border-slate-700 px-3'>
          <MagnifyingGlassIcon className='mr-2 h-4 w-4 shrink-0 opacity-50' />
          <input
            type='text'
            placeholder='Hacer busqueda.'
            value={query}
            onChange={e => setQuery(e.target.value)}
            onInput={handleSearch}
            className='flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
        <div className='max-h-[300px] overflow-y-auto overflow-x-hidden'>
          {query ? (
            results.length > 0 ? (
              <div className='p-1'>
                <h3 className='px-2 py-1.5 text-xs font-medium text-muted-foreground'>
                  Results
                </h3>
                {results.map(result => (
                  <div
                    key={result.id}
                    className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground'
                  >
                    <ResultRow
                      result={result}
                      handleClick={() => setDialogIsOpen(false)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className='py-6 text-center text-sm'>No results found.</div>
            )
          ) : (
            <Nav handleClick={() => setDialogIsOpen(false)} />
          )}
        </div>
      </div>
    </Dialog>
  )
}

const ResultRow = ({ result, handleClick }) => {
  const [data, setData] = useState(null)
  const [url, setUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await result.data()
      console.log('Result data fetched:', data)
      setData(data)

      let generatedUrl = ''
      if (data.url.includes('/servicios/')) {
        const match = data.url.match(/\/servicios\/([^/]+)\.html$/)
        generatedUrl = match ? `/pages/servicios/${match[1]}` : ''
      } else {
        const match = data.url.match(/\/([^/]+)\.html$/)
        generatedUrl = match ? `/pages/${match[1]}` : ''
      }
      setUrl(generatedUrl)
    }

    fetchData()
  }, [result])

  if (!data || !url) return null

  return (
    <a href={url} onClick={handleClick}>
      <h3>{data.meta.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: data.excerpt }} />
    </a>
  )
}

const MagnifyingGlassIcon = styled.span`
  // Add your own SVG or icon component here
`

export default CommandBar