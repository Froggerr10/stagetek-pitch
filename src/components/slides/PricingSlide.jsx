import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRightLeft, DollarSign } from 'lucide-react';
import Card from '../ui/Card';

const PricingSlide = () => {
    const products = [
        {
            name: "Talha 1t + Case",
            cost: "R$ 6.196",
            pricePix: "R$ 16.723",
            price10x: "R$ 18.563",
            margin: "38,9%"
        },
        {
            name: "Talha 2t + Case",
            cost: "R$ 8.542",
            pricePix: "R$ 23.054",
            price10x: "R$ 25.590",
            margin: "39,1%"
        },
        {
            name: "Controller 12 vias",
            cost: "R$ 4.005",
            pricePix: "R$ 10.810",
            price10x: "R$ 12.000",
            margin: "39,9%"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Estrutura de <span className="text-stagetek-red">Preços e Rentabilidade</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Margens sólidas com competitividade de mercado.
                </p>
            </motion.div>

            <div className="w-full max-w-5xl mx-auto">
                <Card className="h-full overflow-hidden p-0 border-t-4 border-t-stagetek-red">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                                    <th className="p-6 font-semibold">Produto</th>
                                    <th className="p-6 font-semibold">Custo</th>
                                    <th className="p-6 font-semibold">Preço (Pix)</th>
                                    <th className="p-6 font-semibold text-stagetek-red">Preço (10x)</th>
                                    <th className="p-6 font-semibold text-green-500">Margem Líq.</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 divide-y divide-white/5">
                                {products.map((product, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-white text-lg">{product.name}</td>
                                        <td className="p-6 text-gray-500">{product.cost}</td>
                                        <td className="p-6">{product.pricePix}</td>
                                        <td className="p-6 font-bold text-white text-lg">{product.price10x}</td>
                                        <td className="p-6 font-bold text-green-500 text-lg">{product.margin}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-white/5 border-t border-white/10 text-sm text-gray-500 flex justify-between items-center">
                        <span>*Margem líquida após impostos e comissões.</span>
                        <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Dados validados (Nota Técnica DY)</span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PricingSlide;
