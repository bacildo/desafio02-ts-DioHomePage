import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <ChakraProvider>
        <Card id={1} paragraph={"Realize o login"} details={"Login"} />
      </ChakraProvider>
    </>
  );
}

export default App;
