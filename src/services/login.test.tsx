import { Login } from "./login";

describe("login", () => {
  const testEmail = "bacildo@gmail.com";
  it("Deve exibir um alert com boas vindas", async () => {
    const response = await Login(testEmail);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email seja diferente do mock", async () => {
    const response = await Login("email@qualquer.com");
    expect(response).toBeFalsy();
  });
});
