import React from 'react';
import { motion } from 'framer-motion';
import mapBg from '../../assets/supply_chain_map.png';
import talhaImg from '../../assets/talha_Stagetek_FT.png';
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

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col h-full justify-center">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Imagem da talha */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center"
                    >
                        <img
                            src={talhaImg}
                            alt="Talha Stagetek"
                            className="max-h-72 md:max-h-96 object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 12px #e90101) drop-shadow(0 0 28px #e9010166)'
                            }}
                        />
                    </motion.div>

                    {/* Fornecedor Homologado */}
                    <Card delay={0.4} className="border-t-4 border-t-red-500">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-6 h-6 text-red-500" />
                            <h3 className="text-2xl font-bold text-white">Fornecedor Homologado (China)</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Factory className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Fabricante homologado de talhas <strong className="text-white">C8+</strong> para rigging profissional — produto-alvo do investimento Stagetek.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Padrão <strong className="text-white">D8+</strong>: 2 freios independentes, fator de segurança 8:1 e certificações <strong className="text-white">TUV/CE</strong> exigidas em grandes produções.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Aprovado para operação com pessoas sob a carga — compatível com <strong className="text-white">NR-12</strong> e adaptação para ART nacional.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-gray-400 mt-1" />
                                <span className="text-gray-300">Pipeline logístico dedicado para abastecimento contínuo do mercado brasileiro e expansão LATAM.</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SupplyChainSlide;
