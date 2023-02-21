import styled from 'styled-components'
export const Nav = styled.nav`
  background: black;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  position:sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px){
      transition:0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display:flex;
  justify-content:space-between;
  /*height:20px;*/
  z-index:1;
  width:100%;
  padding:0;
  /*max-width: 1100px;*/
`;

export const NavLogo = styled.h1`
  color: white;
  justify-self: flex-start;
  cursor:pointer;
  font-size: 1.5rem;
  align-items:center;
  margin-left:24px;
  font-weight: bold;
  text-decoration:none;
`;