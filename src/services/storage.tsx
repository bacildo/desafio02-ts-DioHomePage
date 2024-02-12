import { IUserData } from "../interfaces/UserData";
const userData:IUserData = {
  login: false,
  nome: "",
  usuario: "",
  senha: "",
  saldo: 0,
  id: "",
}

export const getLocalStorage = (): string | null => {
  return localStorage.getItem("userData");
};


export const createLocalStorage = (): void => {
  localStorage.setItem("userData", JSON.stringify(userData));
};

export const updateLocalStorage = (userData:IUserData):void => {
 localStorage.setItem("userData", JSON.stringify(userData));
};

