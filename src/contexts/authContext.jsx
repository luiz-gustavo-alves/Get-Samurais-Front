import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const authData = JSON.parse(sessionStorage.getItem("auth"));
  const [auth, setAuth] = useState({...authData});

  const login = (authData) => {
    setAuth({...authData});
    sessionStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;