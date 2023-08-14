import {
  Container,
  TitleContainer,
  Title,
  CreateServiceContainer
} from "./style";

import {
  OffsetContainer,
  OffsetButton
} from '../../components/Offset';

import {
  addIcon 
} from '../../assets/images/Icons';

import {
  CenterLoader
} from "../../components/Loaders";

import { 
  Oval 
} from "react-loader-spinner";

import Content from "../../components/Content";
import ServiceOption from "../../components/ServiceOption";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useOffset from "../../hooks/useOffset";
import serviceProviderService from "../../services/serviceProvider.service";

export default function ServiceProviderPage() {

  const { auth, isAuth } = useAuth();
  const { offset, resetOffset, updateOffset, validateOffset } = useOffset();

  const navigate = useNavigate();
  const [serviceProviderData, setServiceProviderData] = useState(null);
  const [showAddOption, setShowAddOption] = useState(false);

  useEffect(() => {

    if (!isAuth()) {
      navigate("/");
      return;
    }

    if (serviceProviderData === null) {
      resetOffset();
      serviceProviderService.getCreatedServices(auth.token, 0)
        .then(res => setServiceProviderData(res.data))
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

    } else if (offset > 0) {

      serviceProviderService.getCreatedServices(auth.token, offset)
        .then(res => {

            const { data } = res.data;
            const currentData = [...serviceProviderData.data];
            currentData.push(...data);
            setServiceProviderData({...serviceProviderData, data: currentData })
        })
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));
    }

  }, [auth, offset]);

  if (serviceProviderData === null) {
    return (
      <CenterLoader>
        <Oval
          height="200"
          width="200"
          color="#515151"
          ariaLabel='oval-loading'
          secondaryColor="#000"
          strokeWidth={2}
          strokeWidthSecondary={2}
          visible={true}
        />
      </CenterLoader>
    )
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
          servicesData={serviceProviderData.data} 
          showOptions={true}
        />
      </Container>
      {showAddOption &&
        <ServiceOption 
          option={"add"} 
          setShowOption={setShowAddOption}
          token={auth.token} 
        />
      }
      {validateOffset(serviceProviderData.data, serviceProviderData.counter) &&
        <OffsetContainer>
          <OffsetButton onClick={updateOffset}>Ver mais</OffsetButton>
        </OffsetContainer>
      }
    </>
  )
}