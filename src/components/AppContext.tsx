import { createContext, useEffect, useState } from "react";
import { IAppContext } from "../interfaces/AppContext";
import { getLocalStorage } from "../services/storage";
import { IUserData } from "../interfaces/UserData";

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const userInfo: IUserData = {
    login: false,
    nome: "",
    usuario: "",
    senha: "",
    saldo: 0,
    id: "",
  };

  const storage = getLocalStorage();

  const [user, setUser] = useState<IUserData>(userInfo);

  useEffect(() => {
    if (storage) {
      const { login, nome, id, saldo, senha, usuario,email } = JSON.parse(
        storage
      ) as IUserData;
      setUser({ login, nome, id, saldo, senha, usuario,email });
    }
  }, [storage]);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
