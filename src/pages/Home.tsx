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
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const userValidate = async (email: string): Promise<any> => {
    const loggedIn: any = await Login(email);

    if (!loggedIn) {
      alert("Email inválido!");
    } else {
      setIsLoggedIn(true);
      updateLocalStorage({login:true})
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
            <Input placeholder="Digite sua senha" type="password" />
            <Center>
              <LoginButton click={() => userValidate(email)} message="Login" />
            </Center>
          </Box>
        </Center>
      </Card>
    </Box>
  );
};
