import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import projectSteps from '../data/projectSteps';
import ContentModal from './ContentModal';
import Footer from './Footer';
import Header from './Header';
import RoadPath from './RoadPath';
import StepButton from './StepButton';

const RoadmapPresentation = () => {
    const [selectedStep, setSelectedStep] = useState(null);
    const [hoveredStep, setHoveredStep] = useState(null);

    const handleStepClick = (id) => {
        if (selectedStep === id) {
            setSelectedStep(null);
        } else {
            setSelectedStep(id);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8 relative">
                <div className="relative h-[700px] mt-8">
                    <RoadPath />

                    {projectSteps.map((step, index) => {
                        // Pozisyonları hesapla
                        let positionStyles = {};
                        switch (index) {
                            case 0: // İlk adım - sol alt
                                positionStyles = { left: '10%', top: '85%' };
                                break;
                            case 1: // İkinci adım - ilk kıvrım
                                positionStyles = { left: '25%', top: '70%' };
                                break;
                            case 2: // Üçüncü adım - orta kısım
                                positionStyles = { left: '40%', top: '55%' };
                                break;
                            case 3: // Dördüncü adım - orta kıvrım
                                positionStyles = { left: '60%', top: '40%' };
                                break;
                            case 4: // Beşinci adım - son kıvrım
                                positionStyles = { left: '75%', top: '30%' };
                                break;
                            case 5: // Altıncı adım - sağ üst
                                positionStyles = { left: '90%', top: '15%' };
                                break;
                            default:
                                positionStyles = {};
                        }

                        return (
                            <StepButton
                                key={step.id}
                                step={step}
                                position={positionStyles}
                                isHovered={hoveredStep === step.id}
                                onHover={setHoveredStep}
                                onClick={handleStepClick}
                            />
                        );
                    })}
                </div>

                <AnimatePresence>
                    {selectedStep && (
                        <ContentModal
                            step={projectSteps.find(s => s.id === selectedStep)}
                            onClose={() => setSelectedStep(null)}
                        />
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};

export default RoadmapPresentation;