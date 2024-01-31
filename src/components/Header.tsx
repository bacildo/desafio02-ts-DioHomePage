import { Heading } from "@chakra-ui/react";
// import { useContext } from "react";
// import { AppContext } from "./AppContext";


export const Header = () => {
  // const context = useContext(AppContext)
  return (
    <Heading
      as="h1"
      size="2xl"
      textAlign="center"
      backgroundColor="#000000"
      color="#FFFFFF"
    >
      Dio Bank
    </Heading>
  );
};
