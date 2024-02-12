import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { LoginButton } from "../components/LoginButton";
import { useContext, useState } from "react";
import { Login } from "../services/login";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { updateLocalStorage } from "../services/storage";

export const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const userValidate = async (email: string, senha: string, saldo?:number, nome?:string, id?: string): Promise<any> => {
    const loggedIn: any = await Login(email, senha);

    if (!loggedIn) {
      alert("Dados inválidos, verifique seu usuário e senha!");
    } else {
      setUser({login:true});
      updateLocalStorage({ login: true, senha: senha, usuario:email, saldo:saldo, nome:nome, id:id, email:email});
      navigate("/conta/1");
    }
  };

  return (
    <Box>
      <Card>
        <Center>
          <Box
            bg="#FFFFFF"
            borderRadius="25px"
            padding="15px"
            boxSize="-webkit-fit-content"
            alignItems="baseline"
          >
            <Center>
              <h1>Realize o Login</h1>
            </Center>
            <Input
              placeholder="Digite seu email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <Center>
              <LoginButton
                click={() => userValidate(email, senha)}
                message="Login"
              />
            </Center>
          </Box>
        </Center>
      </Card>
    </Box>
  );
};
