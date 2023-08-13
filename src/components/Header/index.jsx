import {
  Container,
  TopContent,
  TopLeftContent,
  TopRightContent,
  IconBorder,
  MenuOption,
  ProfileOptions,
  Option
} from "./style";

import {
  samuraiIcon,
  bambooHatIcon,
  menuIcon
} from "../../assets/images/Icons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Header() {

  const navigate = useNavigate();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [menu, setMenu] = useState(false);

  const { auth, isAuth, logout } = useAuth();

  const toggleProfileOption = () => {
    (showProfileOptions) ? setShowProfileOptions(false) : setShowProfileOptions(true);
  }

  const toggleMenu = () => {
    (menu) ? setMenu(false) : setMenu(true);
  }

  const setAuthContent = () => {

    if (!isAuth()) {

      return (
        <>
          <img className="menu" src={menuIcon}  onClick={toggleMenu}/>
          {menu && 
            <MenuOption>
              <Option onClick={() => navigate("/signin")}>Login</Option>
              <Option onClick={() => navigate("/signup")} className="register">Cadastro</Option>
            </MenuOption>
          }
          <h2 onClick={() => navigate("/signin")}>Login</h2>
          <h2 onClick={() => navigate("/signup")} className="register">Cadastro</h2>
        </>
      )

    } else {

      const icon = (auth.type === "userSession") ? bambooHatIcon : samuraiIcon;
      const serviceProviderOption = (auth.type === "serviceProviderSession") ?
          <Option onClick={() => { navigate("/services/me"); toggleProfileOption(); }}>Serviços</Option>
        :
          ""

      return (
        <>
          <IconBorder>
            <img src={icon} onClick={toggleProfileOption}/>
          </IconBorder>
          {showProfileOptions &&
            <ProfileOptions>
              <Option onClick={() => { navigate("/profile/me"); toggleProfileOption(); }}>Perfil</Option>
              {serviceProviderOption}
              <Option onClick={logout}>Sair</Option>
            </ProfileOptions>
          }
        </>
      )
    }
  }

  const authContent = setAuthContent();

  return (
    <Container>
      <TopContent>
        <TopLeftContent onClick={() => { navigate("/"); setShowProfileOptions(false) }}>
          <img src={samuraiIcon} />
          <h1>GetSamurais</h1>
        </TopLeftContent>
        <TopRightContent>
          {authContent}
        </TopRightContent>
      </TopContent>
    </Container>
  )
}