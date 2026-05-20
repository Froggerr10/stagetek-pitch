import React from 'react';
import { motion } from 'framer-motion';
import bridgeBg from '../../assets/bridge_concept.png';
import { Package, Palette, Headphones, CreditCard } from 'lucide-react';

const SolutionSlide = () => {
    const features = [
        {
            icon: <Package className="w-10 h-10 text-stagetek-red" />,
            title: "Produto com Demanda Real",
            value: "Mercado Ativo",
            description: "Talhas com aplicação direta em shows, feiras, eventos corporativos e instalações — demanda identificada e clientes em contato."
        },
        {
            icon: <Palette className="w-10 h-10 text-stagetek-red" />,
            title: "Engenharia e Certificação",
            value: "NR-12",
            description: "Produtos adaptados às normas brasileiras com ART. Segurança jurídica e operacional para cada projeto."
        },
        {
            icon: <Headphones className="w-10 h-10 text-stagetek-red" />,
            title: "Suporte e Treinamento",
            value: "SLA 24h",
            description: "Programa de Atendimento Corporativo com estoque local de peças, técnicos certificados e capacitação de equipes."
        },
        {
            icon: <CreditCard className="w-10 h-10 text-stagetek-red" />,
            title: "Condições Facilitadas de Venda",
            value: "Até 18x",
            description: "Estratégia comercial com parcelamento em até 18 vezes e antecipação de recebíveis — facilitando o acesso do cliente e acelerando o giro do estoque."
        }
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bridgeBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Operação <br />
                            <span className="text-stagetek-red">Estruturada</span>
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            A Stagetek conecta curadoria técnica de fornecedores internacionais, engenharia local e capacidade comercial para entregar talhas e soluções de rigging com suporte, treinamento e disponibilidade no Brasil.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex items-center gap-6 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-stagetek-red/50 transition-colors"
                            >
                                <div className="p-3 bg-black/50 rounded-full border border-white/10">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        {feature.title}
                                        <span className="text-sm bg-stagetek-red/20 text-stagetek-red px-2 py-0.5 rounded-full border border-stagetek-red/30">
                                            {feature.value}
                                        </span>
                                    </h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual/Empty side for background visibility */}
                <div className="hidden md:block">
                    {/* The background image serves as the visual here */}
                </div>
            </div>
        </div>
    );
};

export default SolutionSlide;
