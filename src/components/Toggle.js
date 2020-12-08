import React, {useState} from 'react';
import {motion} from 'framer-motion';

//Reusable component. Interesting concept. Wrap the elements to show or hide in the FAQ section and then click to show and hide

const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false);

    return(
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ''}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle;