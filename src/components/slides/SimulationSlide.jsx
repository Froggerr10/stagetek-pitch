import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Card from '../ui/Card';

const SimulationSlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                    A Matemática da <span className="text-stagetek-red">Eficiência</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Por que o modelo tradicional é uma armadilha financeira?
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* The Trap - Traditional Model */}
                <Card className="border-t-4 border-t-red-500 bg-gradient-to-b from-red-500/5 to-transparent h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-500/20 rounded-full">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Modelo Tradicional</h3>
                            <p className="text-xs text-red-300 font-bold uppercase tracking-wider">A Ilusão</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">Taxa "Visível"</span>
                            <span className="text-white font-mono">~1,97%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <span className="text-red-400 font-bold">Imposto (Oculto)</span>
                            <span className="text-red-400 font-bold font-mono">10,70%</span>
                        </div>
                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Custo Real da Operação</span>
                            <span className="text-3xl font-bold text-red-500">12,67%</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            *O imposto incide sobre o valor total da venda registrada, corroendo a margem.
                        </p>
                    </div>
                </Card>

                {/* The Solution - Skythunder Model */}
                <Card delay={0.2} className="border-t-4 border-t-green-500 bg-gradient-to-b from-green-500/5 to-transparent h-full relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="p-3 bg-green-500/20 rounded-full">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Modelo Skythunder</h3>
                            <p className="text-xs text-green-300 font-bold uppercase tracking-wider">A Inteligência</p>
                        </div>
                    </div>

                    <div className="space-y-4 relative z-10">
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">Taxa (DNA)</span>
                            <span className="text-white font-mono">4,99%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                            <span className="text-green-400 font-bold">Imposto Efetivo</span>
                            <span className="text-green-400 font-bold font-mono">0,00%*</span>
                        </div>
                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Custo Real da Operação</span>
                            <span className="text-3xl font-bold text-green-500">4,99%</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            *A taxa entra como Despesa Operacional, abatendo a base de cálculo.
                        </p>
                    </div>
                </Card>
            </div>

            {/* Result Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4"
            >
                <div>
                    <h4 className="text-xl font-bold text-white mb-1">Resultado Financeiro</h4>
                    <p className="text-gray-400 text-sm">Base: Venda de 10 Talhas (R$ 185.630)</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Lucro Extra (Sobra de Caixa)</p>
                        <p className="text-3xl font-black text-green-500">+ R$ 14.256</p>
                    </div>
                    <div className="h-12 w-px bg-white/10 hidden md:block" />
                    <div className="text-right hidden md:block">
                        <p className="text-sm text-gray-400">Ganho Percentual</p>
                        <p className="text-2xl font-bold text-white">+7,68%</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SimulationSlide;
