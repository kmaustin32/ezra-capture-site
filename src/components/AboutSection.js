import React from 'react';
//Images
import home1 from '../images/home1.png'
//Styles
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from "../styles"
import styled from 'styled-components';
//Animate
import {motion} from 'framer-motion';
import {TitleAnimation, TitleContainer, fade, imgAnimate} from '../animation';
//Link
import {Link} from 'react-router-dom';
//Wave
import Wave from './Wave';


const AboutSection = () => {

    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div 
                variants={TitleContainer} 
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
                    <motion.p variants={fade}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum deleniti possimus perspiciatis nam facere placeat aperiam excepturi maxime dignissimos, exercitationem error mollitia cumque dolorum inventore quo minus. Aperiam, totam.
                    </motion.p>
                    <Link to='/contact'>
                        <motion.button variants={fade}>
                            Contact Us
                        </motion.button>
                    </Link>
                </motion.div>
            </StyledDescription>
            <StyledImage>
                <motion.img 
                variants={imgAnimate}
                src={home1} 
                alt="guy with camera"/>
            </StyledImage>
            <Wave />
        </StyledAbout>
    );
};


export default AboutSection;