import React from 'react';
import Slide from './components/Slide';

import IntroSlide from './components/slides/IntroSlide';
import ProblemSlide from './components/slides/ProblemSlide';
import MarketSlide from './components/slides/MarketSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import TechnicalSlide from './components/slides/TechnicalSlide';
import SupplyChainSlide from './components/slides/SupplyChainSlide';
import PricingSlide from './components/slides/PricingSlide';
import CenarioLoteSlide from './components/slides/CenarioLoteSlide';
import RiscoSlide from './components/slides/RiscoSlide';
import ModeloParticipacaoSlide from './components/slides/ModeloParticipacaoSlide';
import FinancialSlide from './components/slides/FinancialSlide';
import ClosingSlide from './components/slides/ClosingSlide';

function App() {
    return (
        <div className="bg-stagetek-black min-h-screen text-white snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
            <Slide className="bg-stagetek-black">
                <IntroSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <ProblemSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <MarketSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <SolutionSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <TechnicalSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <SupplyChainSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <PricingSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <CenarioLoteSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <RiscoSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <ModeloParticipacaoSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <FinancialSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <ClosingSlide />
            </Slide>
        </div>
    );
}

export default App;
