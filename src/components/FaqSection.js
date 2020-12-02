import React from 'react';
import styled from "styled-components";
import {StyledAbout} from '../styles';

const FaqSection = () => {
    return(
        <StyledFaq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>Sample Question Number 1</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, maxime.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Sample Question Number 2</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, maxime.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Sample Question Number 3</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, maxime.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Sample Question Number 4</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, maxime.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledAbout)`
    display: block;
    padding: 5rem 10rem 5rem 15rem;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: whitesmoke;
        height: 0.3rem;
        margin: 1rem 0rem;
        width: 100%;
    }
    .question {
        padding: 1rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 1rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;