import {
  Container,
} from "./style";

import Content from "./Content";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import serviceService from "../../services/service.service";

export default function Service() {

  const { role } = useParams();
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {

    if (role) {

      serviceService.getServicesByRole(role)
        .then(res => setServicesData(res.data))
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

    } else {

      serviceService.getServices()
        .then(res => setServicesData(res.data))
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));
    }

  }, [role]);

  if (servicesData === null) {
    return <h1>Carregado....</h1>
  }

  return (
    <Container>
      <Content servicesData={servicesData} />
    </Container>
  )
}