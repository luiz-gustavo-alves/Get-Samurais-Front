
import RegisterChoice from "./RegisterChoice";
import UserRegister from "./UserRegister";
import ServiceProviderRegister from "./ServiceProviderRegister";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Register() {

  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const [choice, setChoice] = useState(null);

  const setRegisterPage = () => {

    if (choice === null) {
      return <RegisterChoice setChoice={setChoice} />

    } else if (choice === "user") {
      return <UserRegister />

    } else {
      return <ServiceProviderRegister />
    }
  }

  useEffect(() => {
    if (isAuth()) {
      navigate("/");
    }
  }, []);

  const registerPage = setRegisterPage();
  
  return (
    <>
      {registerPage}
    </>
  )
}