import {
  Content,
  Element
} from "./style";

import {
  programmingIcon,
  marketingIcon,
  architectureIcon,
  financialIcon,
  handshakeIcon,
  healthIcon,
  carIcon,
  houseIcon,
  gearsIcon,
  globeIcon
} from "../../../assets/images/Icons";

import { useNavigate } from "react-router-dom";

export default function Elements() {

  const roles = ['informatica', 'marketing', 'arquitetura', 'financeiro', 'consultoria', 'saude', 'veiculo', 'domestico',
                  'outros', 'recentes'];
  const icons =  [programmingIcon, marketingIcon, architectureIcon, financialIcon, handshakeIcon, healthIcon, carIcon,
                  houseIcon, gearsIcon, globeIcon];
  const label =  ['Informática Tecnologia', 'Marketing', 'Arquitetura Reparos', 'Financeiro', 'Consultoria', 'Saúde',
                  'Veículos', 'Doméstico', 'Outros', 'Mais Recentes'];

  const navigate = useNavigate();

  const handleElement = (role) => {
    
    if (role !== "recentes") {
      navigate(`/services/${role}`);

    } else {
      navigate("/services")
    }
  }

  return (
    <Content>
      {roles.map((role, index) => (
        <Element onClick={() => handleElement(role)} key={role}>
          <img src={icons[index]} />
          <h2>{label[index]}</h2>
        </Element>
      ))}
    </Content>
  )
}