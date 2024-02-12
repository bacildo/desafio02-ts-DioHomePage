import { IUserData } from "../interfaces/UserData";
import {
  createLocalStorage,
  getLocalStorage,
  updateLocalStorage,
} from "./storage";

const userData: IUserData = {
  login: false,
  nome: "",
  usuario: "",
  senha: "",
  saldo: 0,
  id: "",
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("Deve retornar objeto no localStorage com a chave userData", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("userData");
  });

  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "userData",
      JSON.stringify(userData)
    );
  });

  it("Deve atualizar o objeto no localStorage", () => {
    updateLocalStorage(userData);
    expect(mockSetItem).toHaveBeenCalledWith(
      "userData",
      JSON.stringify(userData)
    );
  });
});
