import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProtectedRoute from "./components/ProtectedRoute";
import RootLayout from "./components/root-layout/RootLayout";
import AboutUs from "./pages/about-us";
import Home from "./pages/home";
import Service from "./pages/service";
import User from "./pages/user";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/BryanSugaring" element={<Home />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
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
