import React from 'react';
import {Link} from 'react-router-dom';
//Images
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';
//Style
import styled from 'styled-components';
//Animate
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';



const OurWork = () => {
    return(
        <StyledWork 
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to='/work/the-athlete'>
                    <img src={athlete} alt="athlete"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/work/the-racer'>
                    <img src={theracer} alt="theracer"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times'>
                    <img src={goodtimes} alt="goodtimes"/>
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
        background: whitesmoke;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;