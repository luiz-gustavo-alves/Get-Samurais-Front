import { Container } from "../../../components/Forms";

import {
  Content,
  Title,
  RegisterContent,
  ContentContainer
} from "./style";

import { 
  samuraiIcon,
  bambooHatIcon
} from "../../../assets/images/Icons";

export default function RegisterChoice({ setChoice }) {

  return (
    <Container>
      <Content>
        <Title>Faça sua escolha de cadastro</Title>
        <RegisterContent>
          <ContentContainer>
            <img 
              src={bambooHatIcon}
              onClick={() => setChoice("user")}
              alt="Usuário Comum"
              title="Usuário Comum"
            />
            <h3 onClick={() => setChoice("user")}>Usuário Comum</h3>
          </ContentContainer>
          <ContentContainer>
            <img 
              src={samuraiIcon} 
              onClick={() => setChoice("serviceProvider")}
              alt="Prestador de Serviço"
              title="Prestador de Serviço"
            />
            <h3 onClick={() => setChoice("serviceProvider")}>Prestador de Serviço</h3>
          </ContentContainer>
        </RegisterContent>
      </Content>
    </Container>
  )
}