import { Routes, Route } from "react-router-dom";

import Nav from "./core/Nav";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Tiempo from "./pages/Eltiempo";
import { JwtContext } from "./context/JwtContext";
import { useState } from "react";
import { Require } from "./components/Require";

function App() {
  const [jwt, setJwt] = useState(null);
  return (
    <>
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Eltiempo"
            element={
              <Require>
                {" "}
                <Tiempo />
              </Require>
            }
          />

          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
        </Routes>
      </JwtContext.Provider>
    </>
  );
}

export default App;
