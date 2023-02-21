import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  box-sizing:border-box;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position:relative;
  z-index:1;
`;

export const HeroContent = styled.div`
  z-index:3;
  max-width:800px;
  position:absolute;
  width:100%;
  align-items: center;
  display:flex;
  color:white;
  margin:7% ;
  margin-left:22%;
  border-radius: 25px;
  background-color: rgba(0,0,0,0.5);
  box-shadow: 0 0 17px #333;
  padding:20px;
  color:#5cb574;
`;
export const Sec1 = styled.div`
  width:50%;
  text-align:center;
`


export const Sec2 = styled.div`
  width:50%;
  text-align:center;
`

