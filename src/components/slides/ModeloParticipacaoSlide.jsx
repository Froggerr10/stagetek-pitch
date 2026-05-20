import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import Card from '../ui/Card';

const options = [
    {
        title: "Participação no Resultado do Lote",
        description: "Retorno proporcional ao resultado líquido apurado ao final do ciclo comercial.",
        border: "border-t-blue-500"
    },
    {
        title: "Retorno Preferencial por Ciclo",
        description: "Prioridade de retorno sobre o primeiro ciclo, com percentual a definir conforme acordo.",
        border: "border-t-green-500"
    },
    {
        title: "Conversão Futura em Participação",
        description: "Entrada inicial com possibilidade de conversão em participação estratégica na operação.",
        border: "border-t-purple-500"
    },
    {
        title: "Modelo Híbrido",
        description: "Combinação de retorno por ciclo e participação futura, a ser negociado e formalizado.",
        border: "border-t-stagetek-red"
    }
];

const ModeloParticipacaoSlide = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-6 md:py-16 flex flex-col justify-center md:h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-5 md:mb-12"
            >
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">
                    Modelo de <span className="text-stagetek-red">Participação</span>
                </h2>
                <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
                    A proposta pode ser estruturada de forma simples e transparente, vinculando o aporte ao resultado do primeiro ciclo comercial.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
                {options.map((option, index) => (
                    <Card key={index} delay={index * 0.15} className={`border-t-4 ${option.border}`}>
                        <div className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
                                <p className="text-gray-400 text-sm">{option.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 max-w-3xl mx-auto w-full"
            >
                <Info className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                    O formato final deve equilibrar segurança para o investidor, preservação da operação e capacidade de reinvestimento da Stagetek. <strong className="text-white">Nenhum percentual está definido neste deck</strong> — isso será tratado na conversa.
                </p>
            </motion.div>
        </div>
    );
};

export default ModeloParticipacaoSlide;
