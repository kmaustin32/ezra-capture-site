import React, {useState} from 'react';
import styled from "styled-components";
import {StyledAbout} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';

const FaqSection = () => {

    return(
        <StyledFaq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="Sample Question Number 1">

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, rem blanditiis quaerat autem quas ipsam nemo fuga odit explicabo non!
                    </p>
                </div>

            </Toggle>
            <Toggle title="Sample Question Number 2">

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore rem autem facilis dolores voluptatum deserunt. Excepturi omnis placeat eum!
                        </p>
                </div>

            </Toggle>
            <Toggle title="Sample Question Number 3">

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolor adipisci rerum accusamus quas obcaecati totam aperiam repellat placeat a.
                    </p>
                </div>

            </Toggle>
            <Toggle title="Sample Question Number 4">

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita ullam veritatis qui natus fugiat maxime cumque dolor, quibusdam excepturi.
                    </p>
                </div>

            </Toggle>
            </AnimateSharedLayout>
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