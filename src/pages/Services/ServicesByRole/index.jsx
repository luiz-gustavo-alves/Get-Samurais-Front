import {
  ServiceContainer,
  ServiceDefault
} from "../../../components/Services";

import {
  OffsetContainer,
  OffsetButton
} from "../../../components/Offset";

import {
  CenterLoader
} from "../../../components/Loaders";

import { 
  Oval 
} from "react-loader-spinner";

import Content from "../../../components/Content";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOffset from "../../../hooks/useOffset";
import serviceService from "../../../services/service.service";

export default function ServicesByRole() {

  const { offset, resetOffset, updateOffset, validateOffset } = useOffset();
  const { role } = useParams();
  const currentLocation = role;

  const [servicesData, setServicesData] = useState(null);
  const [location, setLocation] = useState(sessionStorage.getItem("lastRole"));

  useEffect(() => {

    if (servicesData === null || currentLocation !== location) {

      sessionStorage.setItem("lastRole", role)
      setLocation(role);
      resetOffset();

      serviceService.getServicesByRole(role, 0)
        .then(res => setServicesData(res.data))
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

    } else if (offset > 0) {

      serviceService.getServicesByRole(role, offset)
        .then(res => {

            const { data } = res.data;
            const currentData = [...servicesData.data];
            currentData.push(...data);
            setServicesData({...servicesData, data: currentData })
        })
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));
    }

  }, [role, offset]);

  if (servicesData === null) {
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
    <ServiceContainer>
      {servicesData.data.length > 0 ?
        <Content
          servicesData={servicesData.data} 
          showOptions={false} 
        />
        :
        <ServiceDefault>
          <h2>Não há serviços disponíveis!</h2>
          <h3>Categoria pesquisada: {role}</h3>
        </ServiceDefault>
      }
      {validateOffset(servicesData.data, servicesData.counter) &&
        <OffsetContainer>
          <OffsetButton onClick={updateOffset}>Ver mais</OffsetButton>
        </OffsetContainer>
      }
    </ServiceContainer>
  )
}