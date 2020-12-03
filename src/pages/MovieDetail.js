import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
//Style
import styled from 'styled-components';
//State
import {MovieState} from '../movieState';
//Animate
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


const MoiveDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    
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
                <StyledAwards>
                    {movie.awards.map((award) => (
                        <Award 
                        title={award.title}
                        description={award.description}
                        key={award.title}/>
                    ))}
                </StyledAwards>
                <StyledImage>
                    <img 
                    src={movie.secondaryImg} 
                    alt="secondaryImage"/>
                </StyledImage>
            </StyledDetails>
        )}
        </>
    ); 
};

const StyledDetails = styled(motion.div)`
    color: whitesmoke;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
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
`;

const StyledAwards = styled.div`
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5rem;
    
`;

const StyledAward = styled.div`
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
`;

const StyledImage = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
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