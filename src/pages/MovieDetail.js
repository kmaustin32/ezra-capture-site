import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
//Style
import styled from 'styled-components';
import {StyledHide} from '../styles'
//State
import {MovieState} from '../movieState';
//Animate
import {motion} from 'framer-motion';
import {pageAnimation, awardFade, fade} from '../animation';
import ScrollTop from '../components/ScrollTop';
import {useScroll} from '../components/useScroll';

const MoiveDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    const [element, controls] = useScroll();
    
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return(
        <>
        {movie && (
            <StyledDetails
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit">
                <StyledHeadline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie"/>
                </StyledHeadline>
                <StyledHide>
                <StyledAwards 
                ref={element}
                variants={awardFade}
                initial='hidden'
                animate={controls}>
                    {movie.awards.map((award) => (
                        <Award
                        title={award.title}
                        description={award.description}
                        key={award.title}/>
                    ))}
                </StyledAwards>
                </StyledHide>
                <StyledImage>
                    <img 
                    src={movie.secondaryImg} 
                    alt="secondaryImage"/>
                </StyledImage>
                <ScrollTop />
            </StyledDetails>
        )}
        </>
    ); 
};

const StyledDetails = styled(motion.div)`
    color: whitesmoke;
    @media (max-width: 900px) {
        display: block;
        padding: 2rem 5rem 0rem 5rem;
    }
`;

const StyledHeadline = styled.div`
    min-height: 80vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        padding-bottom: 25%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover; 
    }
    @media (max-width: 900px) {
        min-height: 60vh;
        img {
            height: 50vh;
        }
    }
    @media (max-width: 768px) {
        min-height: 50vh;
        padding-top: 10vh;
        h2 {
            top: 5%;
            font-size: 2.75rem;
        }
        img {
            height: 35vh;
        }
    }
`;

const StyledAwards = styled(motion.div)`
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 1rem;
    @media (max-width: 900px) {
        margin: 1rem 0rem;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 3rem 0rem;
    }
`;

const StyledAward = styled(motion.div)`
    padding: 3rem;
    h3 {
        font-size: 1.75rem;
    }
    .line {
        width: 100%;
        height: 0.3rem;
        background: rgb(189, 29, 252);
        margin: 1rem 0rem;
    }
    @media (max-width: 900px) {
        padding: 1.5rem;
    }
`;

const StyledImage = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    @media (max-width: 900px) {
        img {
            height: 50vh;
        }
    }
    @media (max-width: 768px) {
        img {
            height: 35vh;
        }
    }
`;

const Award = ({title, description}) => {
   return(
       <StyledAward>
           <h3>{title}</h3>
           <div className="line"></div>
           <p>{description}</p>
       </StyledAward>
   ) 
};


export default MoiveDetail;