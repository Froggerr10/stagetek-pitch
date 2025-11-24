import React from 'react';
import { motion } from 'framer-motion';

const MarketSlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Oportunidade de Mercado
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Potencial de crescimento escalável e validado.
                </p>
            </motion.div>

            <div className="flex flex-col items-center justify-center relative">
                {/* TAM */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-4xl"
                >
                    <div className="bg-gray-800/50 border border-gray-700 rounded-t-3xl p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-600" />
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">TAM - Mercado Total</h3>
                        <p className="text-4xl font-black text-white">US$ 180-200M</p>
                        <p className="text-sm text-gray-500 mt-2">Global (Rigging & Entretenimento)</p>
                    </div>
                </motion.div>

                {/* SAM */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-2xl -mt-4 z-10"
                >
                    <div className="bg-stagetek-red/20 backdrop-blur-md border border-stagetek-red/30 rounded-t-3xl p-8 text-center relative overflow-hidden shadow-[0_0_50px_rgba(233,1,1,0.1)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-stagetek-red/50" />
                        <h3 className="text-2xl font-bold text-stagetek-red mb-2">SAM - Mercado Alvo</h3>
                        <p className="text-5xl font-black text-white">US$ 30-35M</p>
                        <p className="text-sm text-gray-300 mt-2">LATAM (Foco Brasil)</p>
                    </div>
                </motion.div>

                {/* SOM */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-lg -mt-4 z-20"
                >
                    <div className="bg-white text-black rounded-xl p-8 text-center relative overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-stagetek-red" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">SOM - Alcançável</h3>
                        <div className="flex items-center justify-center gap-4">
                            <div>
                                <p className="text-sm text-gray-500 font-bold">2025</p>
                                <p className="text-3xl font-black text-black">US$ 0.6M</p>
                            </div>
                            <div className="text-stagetek-red">→</div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold">2027</p>
                                <p className="text-3xl font-black text-black">US$ 1.8M</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MarketSlide;
