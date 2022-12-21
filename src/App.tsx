import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProtectedRoute from "./components/ProtectedRoute";
import RootLayout from "./components/root-layout/RootLayout";
import AboutUs from "./pages/about-us";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Production from "./pages/production";
import Recruitment from "./pages/recruitment";
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
            <Route path="/production" element={<Production />}></Route>
            <Route path="/recruitment" element={<Recruitment />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
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
