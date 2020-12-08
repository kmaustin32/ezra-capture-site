import styled from "styled-components";
import {motion} from 'framer-motion';

//Styled-Components
export const StyledAbout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
`;

export const StyledDescription = styled.div`
    flex: 1;
    padding: 5rem;
    z-index: 2;
`;

export const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledHide = styled.div`
    overflow: hidden;
`;

