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
  ServicePage,
  ServiceProviderPage
} from "./pages";

import {
  AuthProvider
} from "./contexts";

import Header from "./components/Header";
import Banner from "./components/Banner";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

export default function App() {

  const { pathname } = useLocation();

  const showBanner = (pathname) => {

    const hashTable = {};
    const paths = ["/signin", "/signup", "/services/me"];
    paths.forEach(path => hashTable[path] = true);
    return (!hashTable[pathname]) ? true : false;
  }

  return (
    <>
      <AuthProvider>
        <Header />
        { showBanner(pathname) && <Banner /> }
        <Routes>
          <Route path="/service/:id" element={<ServicePage />}></Route>
          <Route path="/services/me" element={<ServiceProviderPage />}></Route>
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