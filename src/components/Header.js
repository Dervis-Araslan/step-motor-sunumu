import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-red-800 to-yellow-700 p-6 shadow-lg">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-1">STEP MOTORLA DÖNEN TABELA</h1>
                <div className="text-xl mb-3">ARDUINO PROJESİ</div>
                <div className="text-sm opacity-80">
                    <p>Derviş Araslan - 23301072033</p>
                    <p className="text-xs mt-1">Kayseri Üniversitesi</p>
                </div>
            </div>
        </header>
    );
};

export default Header;