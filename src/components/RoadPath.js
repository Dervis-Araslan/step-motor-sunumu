import React from 'react';

const RoadPath = () => {
    return (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
            {/* Gradient tanımı */}
            <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e74c3c" />
                    <stop offset="33%" stopColor="#f39c12" />
                    <stop offset="66%" stopColor="#2ecc71" />
                    <stop offset="100%" stopColor="#3498db" />
                </linearGradient>

                {/* Animasyonlu çizgi deseni */}
                <pattern id="dashPattern" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="8" />
                </pattern>

                <mask id="pathMask">
                    <path d="M100,600 C200,500 300,550 400,450 S600,300 700,400 S800,200 900,100"
                        stroke="white" strokeWidth="20" fill="none" />
                </mask>
            </defs>

            {/* Ana yol - sol alttan sağ üste doğru kıvrımlı yol */}
            <path d="M100,600 C200,500 300,550 400,450 S600,300 700,400 S800,200 900,100"
                stroke="url(#pathGradient)" strokeWidth="15" fill="none"
                strokeLinecap="round" strokeLinejoin="round" />

            {/* Animasyonlu çizgili kaplama */}
            <rect width="100%" height="100%" fill="url(#dashPattern)" mask="url(#pathMask)">
                <animate attributeName="x" from="-20" to="0" dur="1s" repeatCount="indefinite" />
            </rect>
        </svg>
    );
};

export default RoadPath;