import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {
  Home,
  Login,
  Register,
  Service
} from "./pages";

import Header from "./components/Header";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/service/:role" element={<Service />}></Route>
      </Routes>
    </Router>
  );
}