import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import Card from '../ui/Card';

const FlowNode = ({ children, className = "" }) => (
    <div className={`bg-white/5 border border-white/10 rounded-lg p-3 text-center backdrop-blur-sm relative z-10 ${className}`}>
        {children}
    </div>
);

const ArrowLabel = ({ text, className = "" }) => (
    <div className={`text-[10px] md:text-xs text-gray-400 bg-stagetek-black/80 px-1 rounded absolute z-20 whitespace-nowrap ${className}`}>
        {text}
    </div>
);

const PaymentFlowSlide = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full text-sm md:text-base">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-4"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase">
                    Fluxo de Pagamento e <span className="text-stagetek-red">Split Automático</span>
                </h2>
                <p className="text-lg text-gray-400">
                    transparência e automação financeira
                </p>
            </motion.div>

            <div className="relative w-full max-w-5xl mx-auto h-[700px] bg-white/0 rounded-xl overflow-hidden text-xs md:text-sm">
                {/* SVG Lines Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50" viewBox="0 0 1024 700" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                        </marker>
                    </defs>

                    {/* 1) Cliente (60) -> Plataforma (180) */}
                    <line x1="512" y1="90" x2="512" y2="150" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />

                    {/* 2) Plataforma (180) -> Gateway (300) */}
                    <line x1="512" y1="210" x2="512" y2="270" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />

                    {/* 3) Gateway (512, 300) <-> Bandeira (15% ~ 154, 300) */}
                    {/* Gateway Left (384) -> Bandeira Right (250) - Curved UP */}
                    <path d="M 384 280 Q 317 240 250 280" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" className="hidden md:block" />

                    {/* 4) Bandeira Right (250) -> Gateway Left (384) - Curved DOWN */}
                    <path d="M 250 320 Q 317 360 384 320" stroke="#6b7280" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" className="hidden md:block" />

                    {/* 5) Gateway (300) -> Motor (420) */}
                    <line x1="512" y1="330" x2="512" y2="390" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />

                    {/* Split Lines: Motor (420) -> Branches (540) */}
                    {/* To EC (256) */}
                    <line x1="512" y1="450" x2="256" y2="510" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />
                    {/* To Parceiros (512) */}
                    <line x1="512" y1="450" x2="512" y2="510" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />
                    {/* To Taxas (768) */}
                    <line x1="512" y1="450" x2="768" y2="510" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />

                    {/* EC (540) -> Resultado (640) */}
                    <line x1="256" y1="570" x2="256" y2="610" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrowhead)" />
                </svg>

                {/* Nodes Layer - Absolute Positioning */}

                {/* 1. Cliente */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[30px] w-64 z-10">
                    <FlowNode>
                        <p className="font-bold text-white">Cliente Final</p>
                        <p className="text-xs text-gray-300">(Compra total: R$ 100.000)</p>
                    </FlowNode>
                </div>
                <ArrowLabel text="1) Cliente realiza a compra R$ 100.000" className="top-[110px] left-1/2 -translate-x-1/2" />

                {/* 2. Plataforma */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[150px] w-64 z-10">
                    <FlowNode>
                        <p className="font-bold text-white">Plataforma / EC</p>
                        <p className="text-xs text-gray-300">(Marketplace / Sistema do lojista)</p>
                    </FlowNode>
                </div>
                <ArrowLabel text="2) Envia transação R$ 100.000" className="top-[230px] left-1/2 -translate-x-1/2" />

                {/* 3. Gateway */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[270px] w-64 z-10">
                    <FlowNode>
                        <p className="font-bold text-white">Gateway / Adquirente</p>
                        <p className="text-xs text-gray-300">(Processa o pagamento)</p>
                    </FlowNode>
                </div>

                {/* 4. Bandeira (Left of Gateway) */}
                {/* Center X=15% (~154px). Width=192 (w-48). */}
                <div className="absolute top-[270px] w-48 z-10 hidden md:block left-[15%] -translate-x-1/2">
                    <FlowNode>
                        <p className="font-bold text-white">Bandeira / Emissor</p>
                        <p className="text-xs text-gray-300">(Autoriza a transação)</p>
                    </FlowNode>
                </div>

                {/* Arrow Labels for Gateway <-> Bandeira */}
                {/* Positioned in the gap between Bandeira (Right ~250) and Gateway (Left 384). Center ~317. */}
                <div className="absolute top-[245px] hidden md:block text-[10px] text-gray-400 w-32 text-center left-[31%] -translate-x-1/2">
                    3) Solicita autorização
                </div>
                <div className="absolute top-[335px] hidden md:block text-[10px] text-gray-400 w-32 text-center left-[31%] -translate-x-1/2">
                    4) Devolve autorização aprovada
                </div>

                {/* Label 5 */}
                <div className="absolute top-[350px] hidden md:block text-[10px] text-gray-400 w-40 text-left left-[53%]">
                    5) Encaminha valor autorizado
                </div>

                {/* 5. Motor de Split */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[390px] w-72 z-10">
                    <FlowNode className="border-blue-500/50 bg-blue-500/10">
                        <p className="font-bold text-white">Motor de Split</p>
                        <p className="text-xs text-blue-200">(Aplica regras de divisão Split de R$ 40.000)</p>
                    </FlowNode>
                </div>

                {/* Split Labels */}
                <ArrowLabel text="Saldo: R$ 60.000 para o EC" className="top-[470px] left-[25%] -translate-x-1/2" />
                <ArrowLabel text="Split: R$ 40.000" className="top-[470px] left-1/2 -translate-x-1/2" />
                <ArrowLabel text="Desconto das taxas" className="top-[470px] left-[75%] -translate-x-1/2" />

                {/* 6. Branches */}
                {/* EC */}
                <div className="absolute left-[25%] -translate-x-1/2 top-[510px] w-48 z-10">
                    <FlowNode className="border-green-500/30">
                        <p className="font-bold text-white">EC (Lojista principal)</p>
                        <p className="text-xs text-gray-300">Recebe: R$ 60.000 líquidos</p>
                    </FlowNode>
                </div>
                {/* Parceiros */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[510px] w-48 z-10">
                    <FlowNode>
                        <p className="font-bold text-white">Parceiros / Fornecedores</p>
                        <p className="text-xs text-gray-300">Recebem via split: R$ 40.000</p>
                    </FlowNode>
                </div>
                {/* Taxas */}
                <div className="absolute left-[75%] -translate-x-1/2 top-[510px] w-48 z-10">
                    <FlowNode>
                        <p className="font-bold text-white">Taxas de pagamento</p>
                        <p className="text-xs text-gray-300">(MDR, gateway, antecipação, etc.)</p>
                    </FlowNode>
                </div>

                {/* 7. Resultado EC */}
                <ArrowLabel text="Liquidação já conciliada" className="top-[580px] left-[25%] -translate-x-1/2" />

                <div className="absolute left-[25%] -translate-x-1/2 top-[610px] w-56 z-10">
                    <div className="border border-white/20 rounded-lg p-3 bg-white/5 text-left">
                        <p className="font-bold text-white mb-1 border-b border-white/10 pb-1 text-xs">Resultado para o EC:</p>
                        <ul className="text-[10px] text-gray-300 space-y-0.5">
                            <li>- Operação automatizada</li>
                            <li>- Menos conciliação manual</li>
                            <li>- Menos custo bancário</li>
                            <li>- Menos risco de erro</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentFlowSlide;
