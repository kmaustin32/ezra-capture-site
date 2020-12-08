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
import {pageAnimation, fade, imgAnimate, lineAnimate, slider, sliderContainer, scrollReveal} from '../animation';
import {useScroll} from '../components/useScroll';

const OurWork = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return(
        <StyledWork 
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnimate} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <StyledHide>
                        <motion.img variants={imgAnimate} src={athlete} alt="athlete"/>
                    </StyledHide>
                </Link>
            </StyledMovie>
            <StyledMovie 
            ref={element} 
            variants={scrollReveal}
            initial="hidden"
            animate={controls}>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnimate} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <StyledHide>
                        <motion.img variants={imgAnimate} src={theracer} alt="theracer"/>
                    </StyledHide>  
                </Link>
            </StyledMovie>
            <StyledMovie 
            ref={element2}
            variants={scrollReveal}
            initial="hidden"
            animate={controls2}>
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

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.3rem;
        background: #3de9f5;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 75vh;
        object-fit: cover;
    }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #4287f5;
    z-index: 2;
    opacity: .5;
`;

const Frame2 = styled(Frame1)`
    background: #6533bd;
`;

const Frame3 = styled(Frame1)`
    background: #872682;
`;

const Frame4 = styled(Frame1)`
    background: #454545;;
`;

export default OurWork;