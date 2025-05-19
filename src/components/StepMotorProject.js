import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import projectSteps from '../data/projectSteps';
import ContentModal from './ContentModal';
import StepButton from './StepButton';

const StepMotorProject = () => {
    const [selectedStep, setSelectedStep] = useState(null);
    const [hoveredStep, setHoveredStep] = useState(null);

    const handleStepClick = (id) => {
        setSelectedStep(selectedStep === id ? null : id);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-700 to-purple-900 py-10 text-center">
                <h1 className="text-4xl font-bold mb-2">STEP MOTORLA DÖNEN TABELA</h1>
                <h2 className="text-xl mb-2">ARDUINO PROJESİ</h2>
                <div className="mt-2">
                    <p>Derviş Araslan - 23301072033</p>
                    <p className="text-sm">Nişantaşı Üniversitesi</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="flex flex-wrap justify-center gap-8">
                    {projectSteps.map((step) => (
                        <div key={step.id} className="relative">
                            <StepButton
                                step={step}
                                isHovered={hoveredStep === step.id}
                                onHover={setHoveredStep}
                                onClick={handleStepClick}
                            />
                        </div>
                    ))}
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

            {/* Footer */}
            <footer className="bg-gray-900 py-4 text-center text-gray-400">
                <p>Arduino Projesi - STEP MOTORLA DÖNEN TABELA</p>
                <p className="text-sm">Nişantaşı Üniversitesi - 2025</p>
            </footer>
        </div>
    );
};

export default StepMotorProject;