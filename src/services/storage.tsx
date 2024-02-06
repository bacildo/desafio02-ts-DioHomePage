import { IAuthentication } from "../interfaces/Authentication";

export const getLocalStorage = (): string | null => {
  return localStorage.getItem("authentication");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("authentication", JSON.stringify(authentication));
};

export const updateLocalStorage = (authentication:IAuthentication):void => {
 localStorage.setItem("authentication", JSON.stringify(authentication));
};

const authentication = {
  login: false,
};
