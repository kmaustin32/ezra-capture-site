export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: .25
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: .5
        }
    }
};

export const TitleContainer = {
    hidden: {y: 100},
    show: {
        y: 0, 
        transition: {
            duration: 1, 
            staggerChildren: .5,
            when: 'beforeChildren',
            ease: 'easeOut'
        }
    }
};

export const TitleAnimation = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: 'easeOut'
        }
    }
};

export const SVGAnimation = {
    initial: {
        pathLength: 0,
        pathOffset: 1
    },
    animate: {
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 1.5
        }
    }
};

export const fade = {
    hidden: { 
    opacity: 0 
    },
    show: {
        opacity: 1,
        transition: {  
            duration: 1
        },
    }
};

export const imgAnimate = {
    hidden: {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

export const lineAnimate = {
    hidden: {
        width: '0%'
    },
    show: {
        width: '100%',
        transition: {
            duration: .75
        }
    }
}