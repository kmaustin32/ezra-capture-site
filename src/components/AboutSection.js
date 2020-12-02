import React from 'react';
import home1 from '../images/home1.png'
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from "../styles"

const AboutSection = () => {

    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
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