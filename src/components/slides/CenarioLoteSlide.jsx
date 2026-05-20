import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, BarChart3 } from 'lucide-react';
import Card from '../ui/Card';

const CenarioLoteSlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-16 flex flex-col justify-center md:h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-5 md:mb-12"
            >
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4">
                    Cenário do <span className="text-stagetek-red">Primeiro Ciclo</span>
                </h2>
                <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Capital aplicado em produto físico, operação controlada e retorno vinculado ao resultado do lote.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-5 md:mb-10">
                <Card delay={0.2} className="border-t-4 border-t-stagetek-red text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-4 bg-stagetek-red/10 rounded-full">
                            <Package className="w-10 h-10 text-stagetek-red" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Capital Aplicado</h3>
                        <p className="text-3xl md:text-5xl font-black text-white">R$ 600k</p>
                        <p className="text-gray-400 text-sm">Estoque físico e nacionalização do lote</p>
                    </div>
                </Card>

                <Card delay={0.4} className="border-t-4 border-t-green-500 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-4 bg-green-500/10 rounded-full">
                            <ShieldCheck className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Risco Reduzido</h3>
                        <p className="text-xl md:text-2xl font-bold text-green-400 mt-2">Produto Tangível</p>
                        <p className="text-gray-400 text-sm">Estoque físico com mercado comprador já mapeado pela Stagetek</p>
                    </div>
                </Card>

                <Card delay={0.6} className="border-t-4 border-t-blue-500 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-4 bg-blue-500/10 rounded-full">
                            <BarChart3 className="w-10 h-10 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Retorno Controlado</h3>
                        <p className="text-xl md:text-2xl font-bold text-blue-400 mt-2">Por Ciclo Comercial</p>
                        <p className="text-gray-400 text-sm">Resultado apurado por lote vendido, com prestação de contas ao investidor</p>
                    </div>
                </Card>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center max-w-3xl mx-auto w-full"
            >
                <p className="text-gray-400 text-sm">
                    Os cenários financeiros detalhados — incluindo diferentes velocidades de giro e modelos de participação — podem ser apresentados em reunião técnica.
                </p>
            </motion.div>
        </div>
    );
};

export default CenarioLoteSlide;
