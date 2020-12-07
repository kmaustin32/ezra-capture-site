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
            staggerChildren: .75,
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
            duration: .75,
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
            duration: 2
        }
    }
}