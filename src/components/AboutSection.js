import React from 'react';
//Images
import home1 from '../images/home1.png'
//Styles
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from "../styles"
//Animate
import {motion} from 'framer-motion';

const AboutSection = () => {

    const TitleAnimation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 1}}
    };

    const Container = {
        hidden: {x: 100},
        show: {
            x: 0, 
            transition: {
                duration: 1, 
                staggerChildren: 1,
                when: 'afterChildren'
            }
        }
    };

    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div 
                variants={Container} 
                initial="hidden"
                animate="show"
                className="title">
                    <StyledHide>
                        <motion.h2 
                        variants={TitleAnimation}>
                            We work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 
                        variants={TitleAnimation}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2
                        variants={TitleAnimation}>
                            true.
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <p>Contact me for any of your needs, as I have the desire to help</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with camera"/>
            </StyledImage>
        </StyledAbout>
    );
};


export default AboutSection;