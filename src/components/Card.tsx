import { Box, Center, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ICard } from "../interfaces/Card";
import { Header } from "./Header";
import { LoginButton } from "./LoginButton";
import { login } from "../services/login";



export const Card = ({ id, loginMessage, buttonName }: ICard) => {

   const[email, setEmail] = useState("")

  return (
    <div id={`${id}`}>
      <Header />
      <Box minHeight="100vh" backgroundColor="#1E192C" padding="25px">
        <Center>
          <Box
            bg="#FFFFFF"
            borderRadius="25px"
            padding="15px"
            boxSize="-webkit-fit-content"
            alignItems="baseline"
          >
            <Center>{loginMessage}</Center>
            <Input placeholder="Digite seu email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="Digite sua senha" type="password" />
            <Center>
              <LoginButton click={() => login(email)} message={buttonName}/>
            </Center>
          </Box>
        </Center>
      </Box>
    </div>
  );
};
