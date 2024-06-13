// components/CommandBar/SearchStyles.tsx

import styled from 'styled-components'

export const SearchButton = styled.button`
  padding-left: 0.75rem; /* 12px */
  padding-right: 0.75rem; /* 12px */
  color: #9ca2af; /* Set text color to red with 50% opacity */
  align-items: center;
  border-width: 1px; /* Default border width is 1px */
  border-bottom-style: solid; /* Default border style is solid */
  border-bottom-color: inherit; /* Inherit border color (You may replace 'inherit' with a specific color if needed) */
  display: flex;
  height: 2.5rem; /* 40px */
  width: 20%;
  border-radius: 0.375rem; /* 6px */
  background-color: transparent;
  padding-top: 0.75rem; /* 12px */
  padding-bottom: 0.75rem; /* 12px */
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  outline: none;

  :disabled {
    opacity: 0.5;
  }

  ::placeholder {
    color: #6b7280; /* example muted foreground color */
  }

  &:hover {
    background-color: #2c2c2c;
  }

  &:focus {
    outline: none;
    border-color: #555;
  }
`

export const MagnifyingGlassIcon = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21 21l-4.35-4.35m1.15-6.65a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z'
    />
  </svg>
)

export const ShortcutHint = styled.span`
  margin-left: auto;
  font-size: 0.875rem;
  color: #999;
`
