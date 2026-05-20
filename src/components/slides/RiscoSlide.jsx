import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Card from '../ui/Card';

const risks = [
    {
        risk: "Prazo de venda do estoque",
        mitigation: "Composição do pedido baseada em produtos de maior aplicação comercial — talhas de 1t com demanda já identificada."
    },
    {
        risk: "Custo de importação",
        mitigation: "Referência de custo landed calculada e planejamento de nacionalização com base em operações anteriores da Stagetek."
    },
    {
        risk: "Investidor fora do setor",
        mitigation: "Prestação de contas por ciclo com indicadores simples: estoque disponível, vendas realizadas e caixa gerado."
    },
    {
        risk: "Dependência de fornecedor",
        mitigation: "Fornecedor já mapeado e homologado. Possibilidade de diversificação futura conforme a operação escala."
    },
    {
        risk: "Capital parado",
        mitigation: "Estoque físico com valor comercial real. Estratégia de venda assistida com clientes já em contato com a Stagetek."
    }
];

const RiscoSlide = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-6 md:py-16 flex flex-col justify-center md:h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-5 md:mb-12"
            >
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">
                    Riscos <span className="text-stagetek-red">Mapeados</span> e Mitigações
                </h2>
                <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Uma operação transparente começa por reconhecer e endereçar os riscos.
                </p>
            </motion.div>

            <Card className="overflow-hidden p-0 border-t-4 border-t-stagetek-red">
                <div className="hidden md:grid grid-cols-2 bg-white/5 border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
                    <div className="p-4 pl-6">Risco</div>
                    <div className="p-4">Mitigação</div>
                </div>
                <div className="divide-y divide-white/5">
                    {risks.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-2 hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-start gap-3 p-5 md:border-r border-white/5">
                                <span className="w-2 h-2 bg-stagetek-red rounded-full mt-1.5 shrink-0" />
                                <p className="text-white font-medium text-sm">{item.risk}</p>
                            </div>
                            <div className="flex items-start gap-3 px-5 pb-5 md:py-5">
                                <ShieldCheck className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                <p className="text-gray-400 text-sm">{item.mitigation}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default RiscoSlide;
