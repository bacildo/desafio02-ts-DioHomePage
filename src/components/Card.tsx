import { Box, Center, Input } from "@chakra-ui/react";
import { ICard } from "../interfaces/Card";
import { Header } from "./Header";
import { LoginButton } from "./LoginButton";

export const Card = ({ id, paragraph, details }: ICard) => {
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
            <Center>{paragraph}</Center>
            <Input placeholder="Digite seu email" type="email" />
            <Input placeholder="Digite sua senha" type="password" />
            <Center>
              <LoginButton data={details} />
            </Center>
          </Box>
        </Center>
      </Box>
    </div>
  );
};
