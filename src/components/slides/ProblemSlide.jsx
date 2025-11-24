import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Wrench, CheckCircle2, Users, GraduationCap } from 'lucide-react';
import Card from '../ui/Card';

const ProblemSlide = () => {
    const painPoints = [
        {
            icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
            title: "Dependência Externa",
            description: "Variações cambiais imprevisíveis corroem margens. A dependência total de importação dificulta o planejamento financeiro."
        },
        {
            icon: <Clock className="w-8 h-8 text-red-500" />,
            title: "Prazos Longos",
            description: "Lead times de 90+ dias paralisam projetos. A falta de reposição imediata resulta em cancelamentos e perda de receita."
        },
        {
            icon: <Wrench className="w-8 h-8 text-red-500" />,
            title: "Risco Operacional",
            description: "Equipamentos parados por falta de peças geram riscos de segurança, passivos trabalhistas e multas contratuais."
        },
        {
            icon: <Users className="w-8 h-8 text-red-500" />,
            title: "Falta de Profissionais",
            description: "Escassez de mão de obra qualificada e desconhecimento técnico dos produtos no mercado."
        }
    ];

    const solutions = [
        {
            icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
            title: "Estoque Local",
            description: "Produtos prontos para entrega no Brasil."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
            title: "Engenharia Nacional",
            description: "Adaptação técnica e certificações locais."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
            title: "Suporte Ágil",
            description: "Manutenção e peças disponíveis imediatamente."
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-green-500" />,
            title: "Programa de Qualificação",
            description: "Treinamento técnico e certificação para equipes operacionais."
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Dores do Mercado <span className="text-stagetek-red">vs</span> Solução
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    "Importamos com estratégia, estocamos no Brasil e entregamos com rapidez — eliminando a dependência dos prazos internacionais."
                </p>
            </motion.div>

            {/* Headers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <h3 className="text-2xl font-bold text-red-500 flex items-center gap-2">
                    <AlertTriangle /> O Cenário Atual
                </h3>
                <h3 className="text-2xl font-bold text-green-500 flex items-center gap-2 hidden md:flex">
                    <CheckCircle2 /> A Resposta Stagetek
                </h3>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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
