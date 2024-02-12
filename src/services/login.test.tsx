import { Login } from "./login";

describe("login", () => {
  const testEmail = "bacildo@gmail.com";
  const testSenha = "123456"
  it("Deve exibir um alert com boas vindas", async () => {
    const response = await Login(testEmail, testSenha);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email ou senha sejam diferentes do mock", async () => {
    const response = await Login("email@qualquer.com", "123456");
    expect(response).toBeFalsy();
  });
});
