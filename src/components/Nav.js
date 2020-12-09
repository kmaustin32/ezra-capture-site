import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {

    const {pathname} = useLocation();

    return(
        <StyledNav>
            <h1>
                <Link id='logo' to='/'>Capture</Link></h1>
            <ul>
                <li>
                    <Link to='/'>About Us</Link>
                    <Line 
                    transition={{duration: .75}}
                    initial={{width: '0%'}}
                    animate={{width: pathname === '/' ? '50%' : '0%'}}/>
                </li>
                <li>
                    <Link to='/work'>Our Work</Link>
                    <Line 
                    transition={{duration: .75}}
                    initial={{width: '0%'}}
                    animate={{width: pathname === '/work' ? '50%' : '0%'}}/>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                    <Line 
                    transition={{duration: .75}}
                    initial={{width: '0%'}}
                    animate={{width: pathname === '/contact' ? '50%' : '0%'}}/>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 8vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background: black;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 8rem;
        position: relative;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
        padding-bottom: 2rem;
        
        li {
            padding-left: 3rem;
        }
        #logo {
            display: inline-block;
            padding-bottom: 2rem;
            font-size: 2rem;
        }        
    }
`;

const Line = styled(motion.div)`
    height: .3rem;
    background: #3de9f5;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 900px) {
        bottom: -80%;
        left: 42%;
    }
`;

export default Nav;