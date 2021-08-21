import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';

export function HistoryCarousel({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1.5, delay: 2 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 }
            }}>
            {children}
        </motion.div>
    );
}

export function HistoryTitle({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
            }}>
            {children}
        </motion.div>
    );
}

export function HistorySubTitle({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1.5 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
            }}>
            {children}
        </motion.div>
    );
}

export function HistoryMainText({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 2 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: -0 }
            }}>
            {children}
        </motion.div>
    );
}
