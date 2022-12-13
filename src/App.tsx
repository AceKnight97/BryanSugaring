import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProtectedRoute from "./components/ProtectedRoute";
import RootLayout from "./components/root-layout/RootLayout";
import Home from "./pages/home/Home";
import User from "./pages/user/User";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
