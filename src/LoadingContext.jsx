import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();
export const useLoadingContext = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(null);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        advice,
        setAdvice,
        setAdviceId,
        adviceId,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
