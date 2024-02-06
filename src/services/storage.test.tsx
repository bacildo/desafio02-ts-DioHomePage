import { getLocalStorage } from "./storage";

describe("storage", () => {
  const getItem = jest.spyOn(Storage.prototype, "getItem");
  it("Deve retornar objeto no localStorages", () => {
    getLocalStorage();
    expect(getItem).toHaveBeenCalled();
  });
});
