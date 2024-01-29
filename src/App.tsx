import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <ChakraProvider>
        <Card id={1} loginMessage={"Realize o login"} buttonName= {'Login'}   />
      </ChakraProvider>
    </>
  );
}

export default App;
