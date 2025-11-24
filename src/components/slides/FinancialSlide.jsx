import React from 'react';
import { motion } from 'framer-motion';

const FinancialSlide = () => {
    const data = [
        { year: "2025", revenue: 0.875, label: "R$ 875k*" },
        { year: "2026", revenue: 3.5, label: "R$ 3.5M" },
        { year: "2027", revenue: 6.0, label: "R$ 6.0M" }
    ];

    const maxRevenue = 6.0;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Projeções Financeiras
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Crescimento consistente e expansão de margem.
                </p>
                <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto">
                    *2025: Demanda Reprimida (50 talhas não atendidas).
                    <br />
                    Cálculo baseado no potencial de venda de 50 talhas de 1 tonelada ao preço de R$ 17.500.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                {/* Bar Chart */}
                <div className="h-96 flex items-end justify-between gap-4 bg-white/5 rounded-2xl p-8 border border-white/10">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-full h-full justify-end">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${(item.revenue / maxRevenue) * 80}%` }}
                                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                                className="w-full bg-gradient-to-t from-stagetek-red to-red-500 rounded-t-lg relative group"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {item.label}
                                </div>
                            </motion.div>
                            <div className="mt-4 text-gray-400 font-mono">{item.year}</div>
                            <div className="mt-1 text-white font-bold text-lg md:text-xl">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* EBITDA & Metrics */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white/5 rounded-2xl p-8 border border-white/10"
                    >
                        <h3 className="text-2xl font-bold text-gray-300 mb-2">EBITDA</h3>
                        <div className="flex items-end gap-4">
                            <span className="text-5xl font-black text-white">18%</span>
                            <span className="text-gray-500 mb-2">→</span>
                            <span className="text-6xl font-black text-green-500">28%</span>
                        </div>
                        <ul className="text-gray-400 mt-4 space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                Diluição de Custos Fixos (Escala)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                Mix de Serviços de Alta Margem (PAC)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                Eficiência Logística na Importação
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                Inteligência Financeira (Skythunder/Split)
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <p className="text-gray-400 text-sm mb-1">Clientes PAC</p>
                            <p className="text-3xl font-bold text-white">15-30</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <p className="text-gray-400 text-sm mb-1">Break-even</p>
                            <p className="text-3xl font-bold text-white">15 Clientes</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FinancialSlide;
