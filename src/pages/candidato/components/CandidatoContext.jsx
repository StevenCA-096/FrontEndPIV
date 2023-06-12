import { createContext, useState } from 'react';

const CandidatoContext = createContext();

export const ContextProvider = ({ children }) => {
  const [candidatoId, setCandidatoId] = useState(null);

  return (
    <CandidatoContext.Provider value={{ candidatoId, setCandidatoId }}>
      {children}
    </CandidatoContext.Provider>
  );
};

export default CandidatoContext;
