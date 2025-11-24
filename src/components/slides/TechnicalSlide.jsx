import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Move, X, Check } from 'lucide-react';

const TechnicalSlide = () => {
    const standards = [
        {
            name: "D8",
            description: "Padrão Básico",
            peopleUnderLoad: false,
            moveLoad: false,
            safety: "1 Freio",
            color: "text-gray-400",
            borderColor: "border-gray-700"
        },
        {
            name: "D8+",
            description: "Padrão Internacional",
            peopleUnderLoad: true,
            peopleCondition: "(Parado)",
            moveLoad: false,
            safety: "2 Freios, Fator 8:1",
            color: "text-stagetek-red",
            borderColor: "border-stagetek-red",
            highlight: true
        },
        {
            name: "C1",
            description: "Padrão Internacional Avançado",
            peopleUnderLoad: true,
            moveLoad: true,
            safety: "2 Freios, Sensores, Controle Seguro",
            color: "text-white",
            borderColor: "border-white",
            highlight: true
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Domínio Técnico <span className="text-stagetek-red">&</span> Segurança
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    A diferença entre as classificações define a segurança da operação.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {standards.map((std, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 ${std.borderColor} flex flex-col gap-6 hover:bg-white/10 transition-colors`}
                    >
                        {std.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider text-white">
                                Foco Stagetek
                            </div>
                        )}

                        <div className="text-center border-b border-white/10 pb-6">
                            <h3 className={`text-5xl font-black ${std.color} mb-2`}>{std.name}</h3>
                            <p className="text-gray-400">{std.description}</p>
                        </div>

                        <div className="space-y-4 flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Users className="w-5 h-5" />
                                    <span>Pessoas Embaixo</span>
                                </div>
                                {std.peopleUnderLoad ? (
                                    <div className="flex items-center gap-2 text-green-500 font-bold">
                                        <Check className="w-5 h-5" />
                                        <span>Sim {std.peopleCondition}</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-red-500 font-bold">
                                        <X className="w-5 h-5" />
                                        <span>Não</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Move className="w-5 h-5" />
                                    <span>Mover Carga</span>
                                </div>
                                {std.moveLoad ? (
                                    <div className="flex items-center gap-2 text-green-500 font-bold">
                                        <Check className="w-5 h-5" />
                                        <span>Sim</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-red-500 font-bold">
                                        <X className="w-5 h-5" />
                                        <span>Não</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Shield className="w-5 h-5" />
                                    <span>Segurança</span>
                                </div>
                                <span className="text-right text-sm font-mono text-gray-400">{std.safety}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSlide;
