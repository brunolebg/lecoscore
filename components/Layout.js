import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 15px 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  
  &:hover {
    color: #FF6B6B;
    text-shadow: 0 0 10px #FF6B6B;
  }
`;

const Logo = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 1.5rem;
  color: #FF6B6B;
  text-shadow: 0 0 10px #FF6B6B;
  margin-right: 30px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Main = styled.main`
  padding-top: 80px;
  min-height: 100vh;
`;

const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: 50px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavList>
            <Logo>MASSILIA SHOP</Logo>
            <NavItem>
              <Link href="/" passHref>
                <NavLink>Accueil</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/histoire" passHref>
                <NavLink>Notre Histoire</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/beach-vibes" passHref>
                <NavLink>Beach Vibes</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/evenements" passHref>
                <NavLink>Événements</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact" passHref>
                <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/admin" passHref>
                <NavLink>Admin</NavLink>
              </Link>
            </NavItem>
          </NavList>
        </NavContainer>
      </Nav>
      <Main>{children}</Main>
      <Footer>
        <p>&copy; 2024 Massilia Shop - Fait avec ❤️ à Marseille</p>
      </Footer>
    </>
  );
};

export default Layout;