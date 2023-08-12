import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {
  Home,
  Login,
  Register,
  Services,
  ServicePage
} from "./pages";

import { AuthProvider } from "./contexts/authContext";

import Header from "./components/Header";
import Banner from "./components/Banner";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

export default function App() {

  const { pathname } = useLocation();

  return (
    <>
      <AuthProvider>
        <Header />
        { pathname !== "/signin" && pathname !== "/signup" && <Banner /> }
        <Routes>
          <Route path="/service/:id" element={<ServicePage />}></Route>
          <Route path="/services/:role" element={<Services />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}