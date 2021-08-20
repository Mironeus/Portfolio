import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';

export function UdemyTwoImage({ children }) {
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
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 }
            }}>
            {children}
        </motion.div>
    );
}

export function UdemyTwoTitle({ children }) {
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
            transition={{ duration: 1.6 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -100 }
            }}>
            {children}
        </motion.div>
    );
}

export function UdemyTwoSubTitle({ children }) {
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
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -100 }
            }}>
            {children}
        </motion.div>
    );
}

export function UdemyTwoMainText({ children }) {
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
            transition={{ duration: 1.6 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -100 }
            }}>
            {children}
        </motion.div>
    );
}
