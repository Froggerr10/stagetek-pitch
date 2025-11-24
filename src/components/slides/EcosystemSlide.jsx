import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Clock, FileCheck } from 'lucide-react';
import Card from '../ui/Card';

const EcosystemSlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                    Ecossistema <span className="text-stagetek-red">Skythunder</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    como é estruturada a operação
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Column 1: Structure */}
                <Card className="h-full border-t-4 border-t-blue-500 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-bold text-white">Estrutura da Operação</h3>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-sm leading-relaxed flex-1">
                        <li className="flex gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            Cliente utiliza exclusivamente os meios de pagamento da plataforma Confrapag (F3 + F6).
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            Toda movimentação financeira está registrada na plataforma.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            Liquidações de cartão (crédito/débito) e PIX são realizadas dentro dos padrões bancários e reportadas pela adquirente.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            Não há recebimentos fora do ambiente Confrapag (ex: dinheiro em espécie, transferências diretas entre contas).
                        </li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-500/10 rounded-lg text-center border border-blue-500/20">
                        <p className="text-blue-200 font-bold">Benefício: Não precisa entregar DIMP</p>
                    </div>
                </Card>

                {/* Column 2: Scenario & Management */}
                <Card delay={0.2} className="h-full border-t-4 border-t-green-500 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                        <h3 className="text-xl font-bold text-white">Cliente usando apenas F3 + F6 (Confrapag)</h3>
                    </div>
                    <ul className="space-y-4 text-gray-300 text-sm leading-relaxed flex-1">
                        <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            Toda a movimentação centralizada e declarada automaticamente pelos sistemas F3 e F6
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            Dados disponíveis para consulta e exportação
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            Conformidade garantida
                        </li>
                        <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            Dispensa da DIMP
                        </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-500/10 rounded-lg flex items-center justify-center gap-2 border border-green-500/20">
                        <Clock className="w-5 h-5 text-green-400" />
                        <p className="text-green-200 font-bold">Tempo de gestão: 0 horas/mês com a obrigação</p>
                    </div>
                </Card>

                {/* Column 3: Conclusion */}
                <Card delay={0.4} className="h-full border-t-4 border-t-purple-500 flex flex-col bg-gradient-to-b from-white/5 to-transparent">
                    <div className="flex items-center gap-3 mb-4">
                        <FileCheck className="w-8 h-8 text-purple-500" />
                        <h3 className="text-xl font-bold text-white">Conclusão</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        Ao operar exclusivamente com os produtos F3 + F6, o cliente ganha:
                    </p>
                    <div className="space-y-3 flex-1">
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <p className="text-white font-medium text-center">Dispensa legal da DIMP</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <p className="text-white font-medium text-center">Redução de custos com contabilidade</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <p className="text-white font-medium text-center">Agilidade na gestão financeira</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <p className="text-white font-medium text-center">Maior segurança fiscal</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default EcosystemSlide;
