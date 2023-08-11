import {
  Container,
  TopContent,
  TopLeftContent,
  TopRightContent
} from "./style";

import {
  samuraiIcon
} from "../../assets/images/Icons";

import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  return (
    <Container>
      <TopContent>
        <TopLeftContent onClick={() => navigate("/")}>
          <img src={samuraiIcon} />
          <h1>GetSamurais</h1>
          <img src={samuraiIcon} />
        </TopLeftContent>
        <TopRightContent>
          <h2 onClick={() => navigate("/signin")}>Login</h2>
          <h2 onClick={() => navigate("/signup")} className="register">Cadastro</h2>
        </TopRightContent>
      </TopContent>
    </Container>
  )
}