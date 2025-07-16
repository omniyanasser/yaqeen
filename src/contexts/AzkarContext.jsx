import { createContext, useContext, useEffect, useState } from "react";

const AzkarContext = createContext();
export const useAzkar = () => useContext(AzkarContext);


export const AzkarProvider = ({ children }) => {
  const [completedAzkar, setCompletedAzkar] = useState(() => {
    const stored = localStorage.getItem("completedAzkar");
    return stored ? JSON.parse(stored) : {};
  });


  useEffect(() => {
    localStorage.setItem("completedAzkar", JSON.stringify(completedAzkar));
  }, [completedAzkar]);


  const toggleZekr = (id) => {
    setCompletedAzkar((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  const resetAzkar = () => {
    setCompletedAzkar({});
  };

  return (
    <AzkarContext.Provider
      value={{
        completedAzkar,
        toggleZekr,
        resetAzkar,
      }}
    >
      {children}
    </AzkarContext.Provider>
  );
};
