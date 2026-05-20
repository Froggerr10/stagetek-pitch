import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../assets/hero_background_clean.png';
import logo from '../../assets/logo.svg';

const IntroSlide = () => {
    return (
        <div className="relative w-full min-h-screen md:h-full flex flex-col items-center justify-center text-center px-6 md:px-8">
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
                    className="text-3xl sm:text-5xl md:text-8xl font-bold text-white mb-3 md:mb-4 tracking-tight"
                >
                    Primeiro Ciclo Comercial
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-sm sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide px-4 md:px-0"
                >
                    Uma oportunidade lastreada em estoque físico, demanda identificada e operação já estruturada.
                </motion.p>
            </div>
        </div>
    );
};

export default IntroSlide;
