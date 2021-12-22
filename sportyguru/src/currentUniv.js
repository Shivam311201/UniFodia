import React, { createContext, useState } from 'react';

export const univContext = createContext();

export function UnivProvider({ children }) {

  const [univ, setUniv] = useState({});

  return (
    <univContext.Provider value={[univ, setUniv]}>
      {children}
    </univContext.Provider>
  );
};