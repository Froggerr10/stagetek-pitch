import React from 'react';
import { motion } from 'framer-motion';
import mapBg from '../../assets/supply_chain_map.png';
import { MapPin, Factory, Truck, Award } from 'lucide-react';
import Card from '../ui/Card';

const SupplyChainSlide = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${mapBg})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Supply Chain <span className="text-stagetek-red">Estratégico</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Mitigação de riscos e redundância de fornecimento.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Supplier 1 - Taiwan */}
                    <Card delay={0.2} className="border-t-4 border-t-blue-500">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-6 h-6 text-blue-500" />
                            <h3 className="text-2xl font-bold text-white">Parceiro 1 (China)</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Factory className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Parceiro estratégico para motores compactos de alta precisão (D8).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Foco em durabilidade e tecnologia de ponta para locadoras.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Agilidade no desenvolvimento de protótipos e customizações.</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Supplier 2 - China */}
                    <Card delay={0.4} className="border-t-4 border-t-red-500">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-6 h-6 text-red-500" />
                            <h3 className="text-2xl font-bold text-white">Parceiro 2 (China)</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Factory className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Especialista em talhas C1 e automação cênica avançada.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Controle total via notebook com visualização 3D em tempo real.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Certificações internacionais (TUV/CE) para grandes turnês.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Cadeia logística integrada para abastecimento da LATAM.</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SupplyChainSlide;
