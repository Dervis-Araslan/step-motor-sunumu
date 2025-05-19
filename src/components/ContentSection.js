import React from 'react';

const ContentSection = ({ section, color }) => {
    return (
        <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4 shadow-inner">
            {section.subtitle && (
                <h3 className="text-lg font-bold mb-3" style={{ color }}>
                    {section.subtitle}
                </h3>
            )}

            {section.text && (
                <p className="text-gray-300 mb-3">{section.text}</p>
            )}

            {section.link && (
                <div className="mb-3">
                    <a
                        href={section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition"
                    >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Tinkercad Projesini Görüntüle
                    </a>
                </div>
            )}

            {section.items && (
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}

            {section.code && (
                <div className="mt-3 mb-3 bg-gray-900 p-4 rounded overflow-x-auto text-gray-300 font-mono text-sm">
                    <pre>{section.code}</pre>
                </div>
            )}

            {section.columns && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    {section.columns.map((column, c) => (
                        <div key={c} className="bg-gray-800 bg-opacity-70 p-3 rounded shadow-inner">
                            <p className="font-bold mb-2 text-gray-200">{column.title}</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                {column.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContentSection;