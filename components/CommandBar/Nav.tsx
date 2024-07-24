import Link from 'next/link'
import styled from 'styled-components'

const Nav = ({ handleClick }) => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledNavLink href='/pages/servicios/anatomia' onClick={handleClick}>
            Anatomía Patológica
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href='/pages/servicios/citologia'
            onClick={handleClick}
          >
            Citología
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href='/pages/servicios/inmunohistoquimica'
            onClick={handleClick}
          >
            Inmunohistoquimíca
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href='/pages/servicios/biologia_molecular'
            onClick={handleClick}
          >
            Biología Molecular
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='/novedades' onClick={handleClick}>
            Novedades
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='/pages/resultados' onClick={handleClick}>
            Resultados
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='/pages/quiene-somos' onClick={handleClick}>
            ¿Quiénes somos?
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href='/pages/calidad' onClick={handleClick}>
            Calidad
          </StyledNavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  padding: 16px 8px;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 16px;
  }
`

const StyledNavLink = styled(Link)`
  font-family: var(--font-mono);
  font-weight: 700;
  text-decoration: none;
  display: block;
  outline-offset: 8px;

  &:after {
    content: ' →';
  }

  &:hover {
    color: ${p => p.theme.linkTextColorHover};
  }
`

export default Nav
