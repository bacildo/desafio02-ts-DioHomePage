import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const testEmail = "bacildo@gmail.com";

  it("Deve exibir um alert com boas vindas", () => {
    login("bacildo@gmail.com");
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${testEmail} `);
  });
});
