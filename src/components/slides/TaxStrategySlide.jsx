import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertTriangle, Clock, FileText } from 'lucide-react';
import Card from '../ui/Card';

const TaxStrategySlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                    Estratégia de Vendas com <span className="text-stagetek-red">inteligência tributária</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    como funciona o ecossistema de meios de pagamento
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Legislation & Solution */}
                <div className="space-y-6">
                    <Card className="h-full border-l-4 border-l-green-500">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="w-8 h-8 text-green-500" />
                            <h3 className="text-2xl font-bold text-white">Legislação</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-justify">
                            A DIMP (Declaração de Informações de Meios de Pagamento) é uma obrigação acessória para empresas que movimentam valores através de múltiplos meios de pagamento. No entanto, ao utilizar as soluções <strong className="text-white">F3 (Cartão via Confrapag)</strong> e <strong className="text-white">F6 (PIX via Confra Pix)</strong> de forma exclusiva e integrada, o cliente se torna <strong className="text-green-400">desobrigado da entrega da DIMP</strong>, conforme normativas vigentes.
                        </p>
                    </Card>
                </div>

                {/* Right Column: Problem & Example */}
                <div className="space-y-6">
                    <Card delay={0.2} className="border-l-4 border-l-red-500">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                            <h3 className="text-2xl font-bold text-white">Problema</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-justify">
                            Adquirentes tradicionais como <strong className="text-white">Getnet, Rede, Cielo, Stone, PagSeguro</strong>, entre outras, <strong className="text-red-400">são obrigadas por lei a reportar todas as transações do EC à Receita Federal</strong> por meio da DIMP.
                        </p>
                    </Card>

                    <Card delay={0.4} className="bg-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-gray-400" />
                            <h3 className="text-xl font-bold text-white">Exemplo: Cliente com diversos intermediadores</h3>
                        </div>
                        <ul className="space-y-2 text-gray-300 mb-6 list-disc pl-5">
                            <li>Cartão via adquirente externa</li>
                            <li>PIX via banco tradicional</li>
                            <li>Gateway de pagamentos adicional</li>
                            <li>Necessidade de consolidar todas as movimentações</li>
                            <li className="text-red-400 font-bold">Obrigatoriedade de DIMP mensal</li>
                        </ul>

                        <div className="flex items-center gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <Clock className="w-6 h-6 text-red-400" />
                            <p className="text-red-200 font-medium">
                                <strong className="text-white">Tempo estimado de gestão:</strong> 6 a 10 horas/mês apenas para geração da DIMP.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TaxStrategySlide;
