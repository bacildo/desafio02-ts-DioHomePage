import { createContext, useState } from "react";
import { IAppContext } from "../interfaces/AppContext";

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const user = "diogo";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
