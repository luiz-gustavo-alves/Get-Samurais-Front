import { createContext, useState } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const authData = JSON.parse(sessionStorage.getItem("auth"));
  const [auth, setAuth] = useState({...authData});

  const login = (authData) => {
    setAuth({...authData});
    sessionStorage.setItem("auth", JSON.stringify(authData));
  }

  const logout = () => {

    authService.logout({type: auth.type}, auth.token)
      .then(() => {
        setAuth({});
        sessionStorage.removeItem("auth");
      })
      .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;