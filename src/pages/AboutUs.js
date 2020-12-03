import React from 'react';
//Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection'
//Animate
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


const AboutUs = () => {
    return(
    <motion.div 
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit">
        <AboutSection />
        <ServicesSection />
        <FaqSection />
    </motion.div>
    );
};

export default AboutUs;