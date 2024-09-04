// context/ColorContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface ColorContextType {
  lineColor: string;
  setLineColor: (color: string) => void;
}

// Create the context with default values
const ColorContext = createContext<ColorContextType | undefined>(undefined);

// Create a provider component
export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [lineColor, setLineColor] = useState('rgb(5, 66, 155)');

  return (
    <ColorContext.Provider value={{ lineColor, setLineColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook for easy usage of the context
export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};
