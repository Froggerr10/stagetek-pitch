import React from 'react';
import Slide from './components/Slide';

import IntroSlide from './components/slides/IntroSlide';
import ProblemSlide from './components/slides/ProblemSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import TechnicalSlide from './components/slides/TechnicalSlide';
import SupplyChainSlide from './components/slides/SupplyChainSlide';
import PricingSlide from './components/slides/PricingSlide';
import SimulationSlide from './components/slides/SimulationSlide';
import SkythunderSlide from './components/slides/SkythunderSlide';
import TaxStrategySlide from './components/slides/TaxStrategySlide';
import EcosystemSlide from './components/slides/EcosystemSlide';
import PaymentFlowSlide from './components/slides/PaymentFlowSlide';
import MarketSlide from './components/slides/MarketSlide';
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
                <SolutionSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <TechnicalSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <SupplyChainSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <PricingSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <SimulationSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <SkythunderSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <TaxStrategySlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <EcosystemSlide />
            </Slide>
            <Slide className="bg-stagetek-black">
                <PaymentFlowSlide />
            </Slide>
            <Slide className="bg-stagetek-nearBlack">
                <MarketSlide />
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
