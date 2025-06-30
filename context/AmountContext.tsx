import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface AmountContextType {
  activeAmount: number;
  setActiveAmount: React.Dispatch<React.SetStateAction<number>>;
}

const AmountContext = createContext<AmountContextType | undefined>(undefined);

export const AmountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [activeAmount, setActiveAmount] = useState(10000);

  useEffect(() => {
    const storedAmount = localStorage.getItem("activeAmount");
    if (storedAmount) {
      setActiveAmount(Number(storedAmount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeAmount", String(activeAmount));
  }, [activeAmount]);

  return (
    <AmountContext.Provider value={{ activeAmount, setActiveAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export const useAmount = () => {
  const context = useContext(AmountContext);
  if (context === undefined) {
    throw new Error("useAmount must be used within an AmountProvider");
  }
  return context;
};
