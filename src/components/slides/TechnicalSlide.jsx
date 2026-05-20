import React from 'react';
import { motion } from 'framer-motion';
import { Package, Weight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const TechnicalSlide = () => {
    const products = [
        {
            capacity: "500 kg",
            description: "Linha de entrada",
            icon: <Package className="w-12 h-12 text-gray-400" />,
            tags: ["Eventos corporativos", "Instalações permanentes", "Feiras e exposições"],
            note: "Alta rotatividade, menor ticket, ideal para entrada em novos clientes.",
            color: "text-gray-400",
            borderColor: "border-gray-700"
        },
        {
            capacity: "1.000 kg",
            description: "Produto principal do ciclo",
            icon: <Package className="w-12 h-12 text-stagetek-red" />,
            tags: ["Shows e turnês", "Produtoras e locadoras", "Projetos de médio porte"],
            note: "Produto de maior giro e demanda identificada. Âncora do primeiro lote.",
            color: "text-stagetek-red",
            borderColor: "border-stagetek-red",
            highlight: true
        },
        {
            capacity: "2.000 kg",
            description: "Linha premium",
            icon: <Package className="w-12 h-12 text-white" />,
            tags: ["Grandes produções", "Projetos técnicos robustos", "Clientes de alto ticket"],
            note: "Menor volume, maior margem por unidade. Complementa o mix do lote.",
            color: "text-white",
            borderColor: "border-white/40"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-16 flex flex-col justify-center md:h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-5 md:mb-12"
            >
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4">
                    Portfólio do <span className="text-stagetek-red">Primeiro Ciclo</span>
                </h2>
                <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Três linhas de talhas elétricas com aplicação direta no mercado brasileiro de eventos e instalações.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-8 border-2 ${product.borderColor} flex flex-col gap-3 md:gap-4 hover:bg-white/10 transition-colors`}
                    >
                        {product.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-full border border-stagetek-red/50 text-sm font-bold uppercase tracking-wider text-stagetek-red">
                                Âncora do Lote
                            </div>
                        )}

                        <div className="text-center border-b border-white/10 pb-6">
                            <div className="flex justify-center mb-3">{product.icon}</div>
                            <h3 className={`text-3xl md:text-5xl font-black ${product.color} mb-1`}>{product.capacity}</h3>
                            <p className="text-gray-400 text-sm">{product.description}</p>
                        </div>

                        <ul className="space-y-2 flex-1">
                            {product.tags.map((tag, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0" />
                                    {tag}
                                </li>
                            ))}
                        </ul>

                        <p className="text-xs text-gray-500 border-t border-white/10 pt-3">{product.note}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSlide;
