import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Burger from './Burger';

import Logo from '../../assets/logo1.jpg';

const Nav = styled.nav`

  width: 100%;
  position: fixed;
  height: 55px;
  padding: 0 20px;
  box-shadow: 0 2px 5px transparent;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  background: ${({ scrollNav }) => (scrollNav ? 'rgba(255, 255, 255, 0.055)' : 'transparent')}; 
  backdrop-filter: blur(8px);
  transition: 0.8s all ease;


  @media screen and (max-width: 960px){
      transition: 0.8s all ease;
  }

  .logo{
      padding: 15px 0;
  }
 
`

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
       }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return(
        <Nav scrollNav={scrollNav} className='menu'>
            <div className='logo'>
                <img src={Logo} alt="" width="30px" />
            </div>
            <Burger />
        </Nav>
    );
}

export default Navbar;