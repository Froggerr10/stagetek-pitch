import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Wrench, CheckCircle2, Users, GraduationCap } from 'lucide-react';
import Card from '../ui/Card';

const ProblemSlide = () => {
    const painPoints = [
        {
            icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
            title: "Alto Custo das Soluções",
            description: "Equipamentos internacionais chegam com preços elevados e condições de pagamento pouco acessíveis para empresas de médio porte no Brasil."
        },
        {
            icon: <Clock className="w-8 h-8 text-red-500" />,
            title: "Prazos e Disponibilidade",
            description: "Lead times longos de importação direta paralisam projetos e impedem reposição rápida para eventos e locações."
        },
        {
            icon: <Wrench className="w-8 h-8 text-red-500" />,
            title: "Risco Operacional e Legal",
            description: "Falta de suporte técnico local e ausência de certificações nacionais geram passivos operacionais e jurídicos para quem opera os equipamentos."
        },
        {
            icon: <Users className="w-8 h-8 text-red-500" />,
            title: "Profissionalização do Setor",
            description: "O mercado exige padrões crescentes de segurança e capacitação técnica que ainda não são bem atendidos pela oferta disponível."
        }
    ];

    const solutions = [
        {
            icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
            title: "Estoque Local",
            description: "Produtos disponíveis no Brasil, com entrega ágil e sem dependência de importação direta pelo cliente."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
            title: "Engenharia Nacional",
            description: "Adaptação técnica, certificação NR-12 e ART para cada aplicação."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
            title: "Suporte Dedicado",
            description: "Manutenção, peças e assistência técnica com tempo de resposta estruturado."
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-green-500" />,
            title: "Capacitação Técnica",
            description: "Programa de treinamento e qualificação para equipes operacionais dos clientes."
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-14 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-4 md:mb-12"
            >
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4">
                    Dores do Mercado <span className="text-stagetek-red">vs</span> Solução
                </h2>
                <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto">
                    "Importamos com estratégia, estocamos no Brasil e entregamos com rapidez — eliminando a dependência dos prazos internacionais."
                </p>
            </motion.div>

            {/* Headers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 md:gap-8 md:mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-red-500 flex items-center gap-2">
                    <AlertTriangle /> O Cenário Atual
                </h3>
                <h3 className="text-lg md:text-2xl font-bold text-green-500 flex items-center gap-2 hidden md:flex">
                    <CheckCircle2 /> A Resposta Stagetek
                </h3>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-8 md:gap-y-6">
                {painPoints.map((pain, index) => {
                    const solution = solutions[index];
                    return (
                        <React.Fragment key={index}>
                            {/* Pain Point Card */}
                            <Card delay={index * 0.1} className="border-l-4 border-l-red-500/50 h-full">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-red-500/10 rounded-lg shrink-0">
                                        {pain.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{pain.title}</h4>
                                        <p className="text-sm text-gray-400">{pain.description}</p>
                                    </div>
                                </div>
                            </Card>

                            {/* Mobile Header for Solution (only visible on mobile between items if needed, but here we just stack) */}
                            {/* Actually, for mobile flow, we might want Pain -> Solution, Pain -> Solution. 
                                But the header "A Resposta Stagetek" is hidden on mobile above. 
                                Let's keep it simple: On mobile it will be Pain 1, Solution 1, Pain 2, Solution 2.
                                This is a good comparison flow.
                            */}

                            {/* Solution Card */}
                            <Card delay={0.3 + (index * 0.1)} className="border-l-4 border-l-green-500/50 bg-green-900/5 h-full">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-green-500/10 rounded-lg shrink-0">
                                        {solution.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{solution.title}</h4>
                                        <p className="text-sm text-gray-400">{solution.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default ProblemSlide;
