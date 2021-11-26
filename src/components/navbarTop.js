//#region Imports

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'

//#endregion

const Navbar = styled.nav`
    height: 84px;
    background-color: #fff;
    flex: 1 1 auto;
    width: calc(100% - 80px);
    display: block;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 0 40px;
    margin: 0;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    align-items: center;
`;

const Logo = styled.img`
    height: 60px;
    width: 60px;
`;

const NavbarTop = () => {
    return (
        <header>
            <Navbar>
                <Link to='/'>
                    <Logo src={logo} alt='Farfetch' />
                </Link>
            </Navbar>
        </header>
    );
};

export default NavbarTop;