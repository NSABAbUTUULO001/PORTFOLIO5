import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HEADER_HEIGHT = 64; // px

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: ${props => props.scrolled ? 'rgba(115, 201, 72, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? '1px solid rgba(130, 228, 85, 1)' : 'none'};

  @media (max-width: 780px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #000000ff 0%, #000000ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: ${HEADER_HEIGHT}px;
    left: 0;
    right: 0;
    width: 100vw;
    background: rgba(10, 10, 20, 0.98);
    backdrop-filter: blur(10px);
    padding: 2rem 1rem 2rem 1rem;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-120%)'};
    transition: transform 0.3s cubic-bezier(.77,0,.18,1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 999;
  }
`;

const NavItem = styled.li`
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: #15ff00ff;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: ${HEADER_HEIGHT}px;
    left: 0;
    width: 100vw;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    background: rgba(0,0,0,0.3);
    z-index: 998;
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo>MELBERK.LLC</Logo>
        <MenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
        <NavMenu isOpen={isMenuOpen}>
          <NavItem>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
          </NavItem>
          <NavItem>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
          </NavItem>
          <NavItem>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
              Skills
            </a>
          </NavItem>
          <NavItem>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>
              Portfolio
            </a>
          </NavItem>
          <NavItem>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              Services
            </a>
          </NavItem>
          <NavItem>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </NavItem>
        </NavMenu>
        <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;