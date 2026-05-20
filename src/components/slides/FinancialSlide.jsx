import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinancialSlide = () => {
    const stages = [
        {
            number: "01",
            title: "Ciclo Inicial",
            subtitle: "Validação operacional",
            description: "Formação do primeiro estoque, venda assistida com clientes já mapeados e validação do giro do lote.",
            color: "border-stagetek-red",
            textColor: "text-stagetek-red"
        },
        {
            number: "02",
            title: "Expansão Comercial",
            subtitle: "Novos ciclos",
            description: "Reposição de estoque com base no giro validado, ampliação do mix e entrada em clientes recorrentes.",
            color: "border-white/40",
            textColor: "text-white"
        },
        {
            number: "03",
            title: "Escala Operacional",
            subtitle: "Previsibilidade",
            description: "Maior eficiência logística por volume, serviços associados e recorrência comercial consolidada.",
            color: "border-white/20",
            textColor: "text-gray-300"
        }
    ];

    const drivers = [
        "Diluição de custos fixos com escala",
        "Melhor aproveitamento logístico por lote",
        "Venda de serviços e suporte técnico associados",
        "Recorrência via relacionamento comercial"
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Caminho de <span className="text-stagetek-red">Expansão</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    O primeiro ciclo como validação operacional para crescimento sustentável.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Stages */}
                <div className="space-y-6">
                    {stages.map((stage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex gap-6 p-6 bg-white/5 rounded-2xl border ${stage.color} hover:bg-white/10 transition-colors`}
                        >
                            <div className={`text-4xl font-black ${stage.textColor} shrink-0`}>{stage.number}</div>
                            <div>
                                <h3 className={`text-xl font-bold ${stage.textColor} mb-1`}>{stage.title}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{stage.subtitle}</p>
                                <p className="text-gray-400 text-sm">{stage.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Drivers */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Eficiência Operacional</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        A eficiência da operação tende a crescer com o volume, com a diluição de custos fixos e com a consolidação do relacionamento comercial.
                    </p>
                    <ul className="space-y-4">
                        {drivers.map((driver, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <span className="w-2 h-2 bg-stagetek-red rounded-full shrink-0" />
                                {driver}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                        <p className="text-xs text-gray-500">Projeções detalhadas por cenário disponíveis em reunião técnica.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FinancialSlide;
