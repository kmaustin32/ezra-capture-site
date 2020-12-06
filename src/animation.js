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
            duration: 1
        }
    }
};

export const TitleAnimation = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 1}}
};

export const Container = {
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