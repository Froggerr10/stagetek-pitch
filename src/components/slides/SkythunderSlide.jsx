import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRightLeft, Landmark, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';

const SkythunderSlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Skythunder: <span className="text-stagetek-red">Inteligência Financeira</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Eficiência Fiscal e Fluxo de Caixa D+1
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Split Automático */}
                <Card delay={0.2} className="border-t-4 border-t-blue-500 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-500/10 rounded-full">
                            <ArrowRightLeft className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Split Automático</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed flex-1">
                        Segregação automática de receitas na origem. O dinheiro do parceiro vai para o parceiro, o da Stagetek vem para a Stagetek. Segurança total.
                    </p>
                </Card>

                {/* Card 2: Liquidez D+1 */}
                <Card delay={0.4} className="border-t-4 border-t-green-500 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-green-500/10 rounded-full">
                            <Wallet className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Liquidez Imediata (D+1)</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed flex-1">
                        Venda parcelada em 10x sem juros para o cliente, recebimento à vista (D+1) para o caixa. Capital de giro preservado.
                    </p>
                </Card>

                {/* Card 3: Smart Tax */}
                <Card delay={0.6} className="border-t-4 border-t-purple-500 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-purple-500/10 rounded-full">
                            <Landmark className="w-8 h-8 text-purple-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Smart Tax</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed flex-1">
                        Redução da carga tributária global ao evitar bitributação. Estrutura fiscal inteligente e 100% legal.
                    </p>
                </Card>
            </div>

            {/* Visual Flow Diagram (Simplified) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12 flex items-center justify-center gap-4 text-gray-500 text-sm md:text-base hidden md:flex"
            >
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Cliente (10x)</div>
                <ArrowRight className="w-4 h-4" />
                <div className="px-4 py-2 bg-stagetek-red/20 text-stagetek-red rounded-lg border border-stagetek-red/30 font-bold">Skythunder Split</div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 -rotate-45" />
                        <span className="text-white">Stagetek (D+1)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 rotate-45" />
                        <span className="text-white">Parceiro (D+1)</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SkythunderSlide;
