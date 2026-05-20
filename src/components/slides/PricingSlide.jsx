import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import Card from '../ui/Card';

const PricingSlide = () => {
    const products = [
        {
            name: "Talha 500 kg + Case",
            positioning: "Linha de entrada",
            strategy: "Preço competitivo frente à importação direta. Alta rotatividade.",
            note: "Ideal para novos clientes e projetos de menor escala."
        },
        {
            name: "Talha 1.000 kg + Case",
            positioning: "Produto principal do ciclo",
            strategy: "Melhor relação entre volume de venda e resultado por unidade.",
            note: "Âncora do primeiro lote. Maior demanda identificada."
        },
        {
            name: "Talha 2.000 kg + Case",
            positioning: "Linha premium",
            strategy: "Ticket mais elevado. Aplicação em projetos robustos e clientes de alto padrão.",
            note: "Complementa o mix com margem por unidade superior."
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-16 flex flex-col justify-center md:h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-5 md:mb-10"
            >
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4">
                    Estrutura <span className="text-stagetek-red">Comercial</span>
                </h2>
                <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Precificação desenhada para preservar competitividade e resultado operacional.
                </p>
            </motion.div>

            <div className="w-full max-w-5xl mx-auto">
                <Card className="overflow-hidden p-0 border-t-4 border-t-stagetek-red">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
                                    <th className="p-3 md:p-6 font-semibold">Produto</th>
                                    <th className="p-3 md:p-6 font-semibold">Posicionamento</th>
                                    <th className="p-3 md:p-6 font-semibold hidden sm:table-cell">Estratégia Comercial</th>
                                    <th className="p-3 md:p-6 font-semibold hidden md:table-cell">Observação</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 divide-y divide-white/5">
                                {products.map((product, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors">
                                        <td className="p-3 md:p-6 font-medium text-white text-sm md:text-lg">{product.name}</td>
                                        <td className="p-3 md:p-6 text-stagetek-red font-medium text-sm">{product.positioning}</td>
                                        <td className="p-3 md:p-6 text-gray-300 text-sm hidden sm:table-cell">{product.strategy}</td>
                                        <td className="p-3 md:p-6 text-gray-500 text-xs hidden md:table-cell">{product.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-5 bg-white/5 border-t border-white/10 flex items-center gap-3 text-sm text-gray-500">
                        <Info className="w-4 h-4 shrink-0" />
                        <span>Detalhamento de preços, custos e margens disponível em reunião técnica.</span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PricingSlide;
