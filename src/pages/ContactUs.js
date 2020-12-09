import React from 'react';
//Animate
import {motion} from 'framer-motion';
import {pageAnimation, TitleAnimation, lineAnimate} from '../animation';
import styled from 'styled-components';
import {StyledHide, styledHide} from '../styles';
import ScrollTop from '../components/ScrollTop';


const ContactUs = () => {
    return(
        <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={TitleAnimation}>
                        Contact Us
                    </motion.h2>
                </StyledHide>
                <StyledHide>
                    <motion.div className='line' variants={lineAnimate}></motion.div>
                </StyledHide>
            </StyledTitle>
            <StyledHide>
                <StyledSocial variants={TitleAnimation}>
                    <Circle />
                    <h3>Send Us A Message</h3>
                </StyledSocial>
            </StyledHide>
            <StyledHide>
                <StyledSocial variants={TitleAnimation}>
                    <Circle />
                    <h3>Send Us An Email</h3>
                </StyledSocial>
            </StyledHide>
            <StyledHide>
                <StyledSocial variants={TitleAnimation}>
                    <Circle />
                    <h3>Find Us On Social Media</h3>
                </StyledSocial>
            </StyledHide>
            <ScrollTop />
        </motion.div>
    );
};

const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: whitesmoke;
    min-height: 90vh;
    @media (max-width: 900px) {
        display: block;
        padding: 2rem 5rem;
    }
`;

const StyledTitle = styled.div`
    margin: 5rem;
    .line {
        height: 0.3rem;
        background: #3de9f5;
        margin-top: 1rem;
    }
`;

const StyledSocial = styled(motion.div)`
    display: flex;
    align-items: center;
    margin: 3rem 5rem;
    h3 {
        padding-left: 2rem;
    }
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: rgb(189, 29, 252);
`;

export default ContactUs;