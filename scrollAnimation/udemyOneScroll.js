import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';

export function UdemyOneImage({ children }) {
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
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 100 }
            }}>
            {children}
        </motion.div>
    );
}

export function UdemyOneTitle({ children }) {
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
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
            }}>
            {children}
        </motion.div>
    );
}

export function UdemyOneSubTitle({ children }) {
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

export function UdemyOneMainText({ children }) {
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
            transition={{ duration: 0.9 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
            }}>
            {children}
        </motion.div>
    );
}
