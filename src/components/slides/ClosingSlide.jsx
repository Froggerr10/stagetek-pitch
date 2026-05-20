import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ClosingSlide = () => {
    const steps = [
        "Validar modelo de participação",
        "Confirmar composição do primeiro pedido",
        "Definir governança e prestação de contas",
        "Avançar para proposta formal"
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14 flex flex-col justify-center h-full text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Próximo <span className="text-stagetek-red">Passo</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    O objetivo desta conversa é avaliar a entrada no primeiro ciclo comercial da Stagetek — capital aplicado em estoque físico, operação controlada e retorno vinculado ao resultado do lote.
                </p>
                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 max-w-2xl mx-auto">
                    <h3 className="text-lg font-bold text-stagetek-red mb-2">Por que agora?</h3>
                    <p className="text-gray-300 text-sm">
                        O mercado exige disponibilidade, segurança e suporte técnico. A Stagetek já tem conhecimento técnico, fornecedor homologado e demanda identificada. O aporte inicial permite capturar essa oportunidade com estoque físico e operação controlada.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Aporte Inicial</h3>
                    <p className="text-4xl font-black text-white">R$ 600 mil</p>
                    <p className="text-sm text-gray-500 mt-2">Primeiro ciclo de estoque importado</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Uso do Capital</h3>
                    <p className="text-3xl font-black text-stagetek-red">Estoque + Nacionalização</p>
                    <p className="text-sm text-gray-500 mt-2">Capital aplicado em produto físico e giro comercial</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10"
                >
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Modelo de Retorno</h3>
                    <p className="text-3xl font-black text-white">Resultado por Ciclo</p>
                    <p className="text-sm text-gray-500 mt-2">Participação vinculada à venda do lote</p>
                </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto w-full">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-2 text-left"
                    >
                        <CheckCircle className="w-4 h-4 text-stagetek-red shrink-0 mt-0.5" />
                        <p className="text-gray-400 text-xs">{step}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <button className="group bg-stagetek-red hover:bg-red-600 text-white text-xl font-bold py-4 px-12 rounded-full transition-all flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(233,1,1,0.3)] hover:shadow-[0_0_50px_rgba(233,1,1,0.5)]">
                    Discutir Modelo de Entrada
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-6 text-gray-600 text-sm italic">
                    "A rodada maior acelera a empresa. O primeiro ciclo valida a operação."
                </p>
                <p className="mt-6 text-gray-500 text-xs">
                    Stagetek © 2026. Todos os direitos reservados.
                </p>
            </motion.div>
        </div>
    );
};

export default ClosingSlide;
