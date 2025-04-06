
export const navLinkVariants = {
    hover: {
        scale: 1.3,
        originX: 0,
        transition: { duration: 0.2 }
    },
    open: {
        scale: 1.3,
        originX: 0,
    },
    close: {
        scale: 1,
        originX: 0
    },
    tapStart: {
        scale: 1.1,
        originX: 0,
        transition: { duration: 0.2 }
    },
} as const;

export const headingVariants = {
    initial: {
        color: '#ffffff',
    },
    highlighted: {
        color: '#fb923c',
        transition: { duration: 0.2 }
    },
} as const;

export const cardVariants = {
    hover:{
        backgroundColor: '#ac896805',
    },
    animate: {
        backgroundColor: '#ac896805',
        transition: { duration: 0.2 }
    },
} as const;

export const dividerVariants = {
    initial: {
        height: 'auto',
    },
    animate: {
        height: 'auto',
        transition: { duration: 0.2 }
    },
    exit: {
        height: 0,
        transition: { duration: 0.2 }
    }
} as const;

export const faultVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        opacity: 0
    }
} as const;

export const logoVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        rotate: 360,
        transition: { duration: 1 }
    },
}