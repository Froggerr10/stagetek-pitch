import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../assets/hero_background_clean.png';
import logo from '../../assets/logo.svg';

const IntroSlide = () => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-4">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <img src={logo} alt="Stagetek Logo" className="h-24 md:h-32 w-auto" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight"
                >
                    Proposta de Parceria
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
                >
                    O Futuro das Talhas Elétricas no Brasil
                </motion.p>
            </div>
        </div>
    );
};

export default IntroSlide;
