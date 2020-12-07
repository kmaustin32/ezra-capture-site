import React from 'react';
import {Link} from 'react-router-dom';
//Images
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';
//Style
import styled from 'styled-components';
import {StyledHide} from '../styles';
//Animate
import {motion} from 'framer-motion';
import {pageAnimation, fade, imgAnimate, lineAnimate} from '../animation';

const OurWork = () => {
    return(
        <StyledWork 
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnimate} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <StyledHide>
                        <motion.img variants={imgAnimate} src={athlete} alt="athlete"/>
                    </StyledHide>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnimate} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <StyledHide>
                        <motion.img variants={imgAnimate} src={theracer} alt="theracer"/>
                    </StyledHide>  
                </Link>
            </StyledMovie>
            <StyledMovie>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnimate} className="line"></motion.div>
                <Link to='/work/good-times'>
                    <StyledHide>
                        <motion.img variants={imgAnimate} src={goodtimes} alt="goodtimes"/>
                    </StyledHide> 
                </Link>
            </StyledMovie>
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.3rem;
        background: #3de9f5;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;



export default OurWork;