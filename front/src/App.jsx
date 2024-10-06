import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import NuevoTurno from "./views/NuevoTurno/NuevoTurno";
import Login from "./views/Login/Login";
import { Routes, Route } from "react-router-dom";
import {
  SLASH,
  HOME,
  MY_APPOIMENTS,
  REGISTER,
  NEW_APPOIMENT,
} from "./helpers/pathsRoutes";

import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={SLASH} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route
          path={HOME}
          element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          }
        />
        <Route
          path={MY_APPOIMENTS}
          element={
            <ProtectedRouter>
              <MisTurnos />
            </ProtectedRouter>
          }
        />
        <Route
          path={NEW_APPOIMENT}
          element={
            <ProtectedRouter>
              <NuevoTurno />
            </ProtectedRouter>
          }
        />
      </Routes>
    </>
  );
}

export default App;
