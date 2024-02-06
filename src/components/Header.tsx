import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { updateLocalStorage } from "../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    updateLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex backgroundColor="#000000" color="#FFFFFF" padding="5px">
      <Box>
        <Center>
          <Text fontSize="3xl" fontWeight="bold">
            Dio Bank
          </Text>
        </Center>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()} color="#000000">
            Sair
          </Button>
        </>
      )}
    </Flex>
  );
};
