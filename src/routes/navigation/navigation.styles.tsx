import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;

  @media screen and (max-width: 768px) {
        padding:1rem;
    }
`



  export const LogoContainer = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
    `

   export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        width:100%;
    }
    `

  

    export const NavLink = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;
      `

