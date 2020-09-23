import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Ul = styled.ul`
    display: flex;
    list-style: none;
    flex-flow: row nowrap;
        li {
            font-weight: 600;
            cursor: pointer;
            padding: 0 20px;
            font-size: 1.4rem;
            color: #fff;
    }
    @media only screen and (max-width: 1000px){
        margin-top: 75px;
        z-index: 10;
        backdrop-filter: blur(8px);
        flex-flow: column nowrap;
        flex-direction: column;
        background-color: rgba(0,0,0,0.8);
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        transition: transform 0.3s ease-in-out;
        li {
            text-align: center;
            font-weight: 300;
            margin: 6vh 0;
        }
    }
`

const RightNav = ({open}) => {
    return (
        <Ul open={open}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <li>Home</li>
            </Link>
            <Link to="/services" style={{textDecoration: 'none'}}>
                <li>Services</li>
            </Link>
            <Link to="/portfolio" style={{textDecoration: 'none'}}>
                <li>Portfolio</li>
            </Link>
            <Link to="/blog" style={{textDecoration: 'none'}}>
                <li>Blog</li>
            </Link>
            <Link to="/about" style={{textDecoration: 'none'}}>
                <li>About</li>
            </Link>
        </Ul>
    )
}

export default RightNav
