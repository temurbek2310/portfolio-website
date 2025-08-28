import React, { createContext, useState, useContext } from 'react';

// Context yaratish
const ColorContext = createContext();

// Ota komponent
export const ColorProvider = ({ children }) => {
    const [textColor, setTextColor] = useState('black');

    return (
        <ColorContext.Provider value={{ textColor, setTextColor }}>
            {children}
        </ColorContext.Provider>
    );
};

// Farzand komponentlar uchun hook
export const useColor = () => useContext(ColorContext);
