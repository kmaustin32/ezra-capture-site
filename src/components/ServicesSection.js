import React from 'react';
import clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
import home2 from '../images/home2.png'
import {StyledAbout, StyledDescription, StyledImage} from "../styles";
import styled from "styled-components";
import {scrollReveal} from '../animation';
import {useScroll} from './useScroll';


const ServicesSection = () => {
    
    const [element, controls] = useScroll();

    return(
        <StyledServices 
            ref={element} 
            variants={scrollReveal} 
            initial="hidden" 
            animate={controls}>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="app-home-2"/>
            </StyledImage>
        </StyledServices>
    )
}

const StyledServices = styled(StyledAbout)`
    h2 {
        padding-bottom: 3rem;
        z-index: 3;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    @media (max-width: 900px) {
        display: block;
        padding: 2rem 5rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    
    .icon {
        display: flex;
        align-items: center;
        
    }
    h3 {
        padding: 0rem 1.5rem;
    }
`;
export default ServicesSection;