import React from 'react';
import { motion } from 'framer-motion';
import ContentSection from './ContentSection';

const ContentModal = ({ step, onClose }) => {
    if (!step) return null;

    return (
        <>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-80 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />
            <motion.div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-800 rounded-xl shadow-2xl z-50 p-6 border-2"
                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                    borderColor: step.color
                }}
            >
                {/* Modal Başlık */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-600">
                    <h2 className="text-2xl font-bold flex items-center" style={{ color: step.color }}>
                        <i className={`fas fa-${step.icon} mr-3`}></i>
                        {step.content.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                {/* İçerik Bölümleri */}
                <div className="space-y-6">
                    {step.content.sections.map((section, idx) => (
                        <ContentSection key={idx} section={section} color={step.color} />
                    ))}

                    {/* Resimler Bölümü */}
                    {step.content.images && step.content.images.length > 0 && (
                        <div className="flex flex-wrap gap-4 justify-center mt-4">
                            {step.content.images.map((image, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="bg-gray-700 p-2 rounded shadow-md">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="rounded"
                                        />
                                    </div>
                                    {image.caption && (
                                        <span className="text-sm text-gray-400 mt-2">{image.caption}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
};

export default ContentModal;