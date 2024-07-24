import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const SearchResults = ({ results, handleClick }) => {
  console.log('Rendering SearchResults with results:', results)
  return (
    <StyledUl>
      {results.map(result => (
        <ResultRow key={result.id} result={result} handleClick={handleClick} />
      ))}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ResultRow = ({ result, handleClick }) => {
  const [data, setData] = useState(null)
  const [url, setUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await result.data()
      console.log('Result data fetched:', data)
      setData(data)

      const path = data.url.match(/\/pages\/(.+)$/)
      const url = path ? path[1].replace(/\/page\.tsx$/, '') : ''
      setUrl(url)
    }

    fetchData()
  }, [result])

  const resultHtml = useMemo(() => {
    if (!data) return ''
    if (!data.sub_results) return ''
    return data.sub_results.map(sub => sub.excerpt).join('... ')
  }, [data])

  if (!data || !url) return null

  return (
    <li>
      <StyledLink href={`/${url}`} onClick={handleClick}>
        <StyledH3>{data.meta.title}</StyledH3>
        <StyledP dangerouslySetInnerHTML={{ __html: resultHtml }} />
      </StyledLink>
    </li>
  )
}

const StyledLink = styled(Link)`
  display: block;
  padding: 16px;
  border: 2px solid #000;
  border-radius: 4px;
  color: #000;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #000;
    color: #fff;
  }
`

const StyledH3 = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  padding-bottom: 8px;
`

const StyledP = styled.p`
  font-size: 0.875rem;

  &::before,
  &::after {
    content: '...';
  }

  & mark {
    color: #000;
    background-color: #f0f0f0;
    padding: 2px;
    border-radius: 2px;
  }
`

export default SearchResults
