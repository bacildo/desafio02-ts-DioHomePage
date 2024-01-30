
import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const testEmail = "bacildo@gmail.com";

  it("Deve exibir um alert com boas vindas", async () => {
    await login(testEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${testEmail}!`);
  });

  it("Não deve exibir a mensagem de boas vidas sem o email", () => {
    login(testEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
  });

  it("Deve exibir um erro caso o email seja diferente do mock", async () => {
    await login('email@qualquer.com');
    expect(mockAlert).toHaveBeenCalledWith('Email inválido');
  });

});


