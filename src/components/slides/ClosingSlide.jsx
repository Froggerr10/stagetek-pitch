import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ClosingSlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Tese de Investimento
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    A Stagetek é a primeira empresa brasileira posicionada como fabricante de soluções de rigging com engenharia local e certificação.
                </p>
                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 max-w-2xl mx-auto">
                    <h3 className="text-lg font-bold text-stagetek-red mb-2">Por que agora?</h3>
                    <p className="text-gray-300 text-sm">
                        O mercado de entretenimento no Brasil cresce 15% ao ano. A demanda por profissionalização e segurança nunca foi tão alta. A Stagetek é a única preparada para atender essa nova regulação.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Investimento</h3>
                    <p className="text-4xl font-black text-white">R$ 1.2M - 1.5M</p>
                    <p className="text-sm text-gray-500 mt-2">Expansão fabril e certificações</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Retorno (ROI)</h3>
                    <p className="text-4xl font-black text-stagetek-red">30 Meses</p>
                    <p className="text-sm text-gray-500 mt-2">Previsão conservadora</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Break-even</h3>
                    <p className="text-4xl font-black text-white">15 Clientes</p>
                    <p className="text-sm text-gray-500 mt-2">Base PAC recorrente</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <button className="group bg-stagetek-red hover:bg-red-600 text-white text-xl font-bold py-4 px-12 rounded-full transition-all flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(233,1,1,0.3)] hover:shadow-[0_0_50px_rgba(233,1,1,0.5)]">
                    Investir no Futuro
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-8 text-gray-500 text-sm">
                    Stagetek © 2025. Todos os direitos reservados.
                </p>
            </motion.div>
        </div>
    );
};

export default ClosingSlide;
