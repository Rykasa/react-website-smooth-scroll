import { useEffect, useState } from "react";
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./styles"
import { FaBars } from 'react-icons/fa'

type NavbarProps = {
  toggle: () => void;
}

export const Navbar = ({toggle}: NavbarProps) =>{
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () =>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleTop = () =>{
    scroll.scrollToTop()
  }

  return(
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav  scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleTop}>dolla</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks 
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                >
                  About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                >
                  Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                >
                  Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                >
                  Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}