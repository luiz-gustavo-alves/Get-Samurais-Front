
import RegisterChoice from "./RegisterChoice";
import UserRegister from "./UserRegister";
import ServiceProviderRegister from "./ServiceProviderRegister";

import { useState } from "react";

export default function Register() {

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

  const registerPage = setRegisterPage();
  
  return (
    <>
      {registerPage}
    </>
  )
}