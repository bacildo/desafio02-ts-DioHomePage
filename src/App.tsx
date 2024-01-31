import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Conta } from "./pages/Conta";
import { ContaInfo } from "./pages/ContaInfo";
import { Home } from "./pages/Home";
import { AppContextProvider } from "./components/AppContext";




function App() {
  return (
    <BrowserRouter>
     <AppContextProvider>
     <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path="/containfo" element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>
     </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
