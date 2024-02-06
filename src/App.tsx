import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/AppContext";
import { MainRoutes } from "./routes/routes";
import { getLocalStorage } from "./services/storage";
function App() { 

  const storage = getLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
