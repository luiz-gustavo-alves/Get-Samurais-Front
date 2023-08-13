import {
  Container,
  TitleContainer,
  Title,
  CreateServiceContainer
} from "./style";

import {
  addIcon 
} from '../../assets/images/Icons';

import Content from "../../components/Content";
import ServiceOption from "../../components/ServiceOption";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import serviceProviderService from "../../services/serviceProvider.service";

export default function ServiceProviderPage() {

  const { auth, isAuth } = useAuth();

  const navigate = useNavigate();
  const [serviceProviderData, setServiceProviderData] = useState(null);
  const [showOptions, setShowOptions] = useState(true);
  const [showAddOption, setShowAddOption] = useState(false);

  useEffect(() => {

    if (!isAuth()) {
      navigate("/");
      return;
    }

    serviceProviderService.getCreatedServices(auth.token)
      .then(res => setServiceProviderData(res.data))
      .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

  }, [auth, showOptions, showAddOption]);

  if (serviceProviderData === null) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Container showAddOption={showAddOption} >
        <TitleContainer>
          <Title>Serviços Criados</Title>
        </TitleContainer>
        <CreateServiceContainer>
          <h2>Criar novo serviço</h2>
          <img src={addIcon} onClick={() => setShowAddOption(true)}/>
        </CreateServiceContainer>
        <Content 
          servicesData={serviceProviderData} 
          showOptions={true} 
          setShowOptions={setShowOptions}
        />
      </Container>
      {showAddOption &&
        <ServiceOption 
          option={"add"} 
          setShowOption={setShowAddOption}
          token={auth.token} 
        />
      }
    </>
  )
}