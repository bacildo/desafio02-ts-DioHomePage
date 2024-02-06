import {
  createLocalStorage,
  getLocalStorage,
  updateLocalStorage,
} from "./storage";

const authentication = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("Deve retornar objeto no localStorage com a chave authentication", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("authentication");
  });

  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "authentication",
      JSON.stringify(authentication)
    );
  });

  it("Deve atualizar o objeto no localStorage", () => {
    updateLocalStorage(authentication);
    expect(mockSetItem).toHaveBeenCalledWith(
      "authentication",
      JSON.stringify(authentication)
    );
  });
});
