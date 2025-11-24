import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 ${className}`}
        >
            {title && <h3 className="text-xl font-bold text-white mb-4">{title}</h3>}
            <div className="text-gray-300">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
