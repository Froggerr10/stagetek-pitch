import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ children, className = "" }) => {
    return (
        <motion.section
            className={`min-h-screen md:h-screen w-full flex flex-col items-center justify-center md:snap-start relative overflow-visible md:overflow-hidden ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
        >
            {children}
        </motion.section>
    );
};

export default Slide;
