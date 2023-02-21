import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarElements';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const route = useNavigate()
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo onClick={() => route('/')}>Wara2y</NavLogo>
            </NavbarContainer>
        </Nav>
      </>
    )
  };
  
  export default Navbar;
