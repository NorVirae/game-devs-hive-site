import { createContext, useState } from "react";

export const AppContext = createContext(false);


// export const useAppContext = () => {
//     const appContext = useContext(AppContext);
//     if (appContext === undefined) {
//       throw new Error('useOnboardingContext must be inside a OnboardingProvider');
//     }
//     return appContext;
//   };

export const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <AppContext.Provider value={{isModalOpen, setIsModalOpen}}>
        {children}
      </AppContext.Provider>
    );
  };