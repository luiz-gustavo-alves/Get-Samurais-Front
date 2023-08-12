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
  teachingIcon,
  houseIcon,
  gearsIcon,
  globeIcon
} from "../../../assets/images/Icons";

import { useNavigate } from "react-router-dom";

export default function Elements() {

  const elements = [
    {role: 'tecnologia' , icon: programmingIcon , label: 'Tecnologia'},
    {role: 'marketing' , icon: marketingIcon , label: 'Marketing'},
    {role: 'aulas' , icon: teachingIcon , label: 'Aulas'},
    {role: 'arquitetura' , icon: architectureIcon , label: 'Arquitetura'},
    {role: 'financeiro' , icon: financialIcon , label: 'Financeiro'},
    {role: 'consultoria' , icon: handshakeIcon , label: 'Consultoria'},
    {role: 'saude' , icon: healthIcon , label: 'Saúde'},
    {role: 'domestico' , icon: houseIcon , label: 'Doméstico'},
    {role: 'outros' , icon: gearsIcon , label: 'Outros'},
    {role: 'recentes' , icon: globeIcon , label: 'Recentes'}
  ];

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
      {elements.map(element => (
        <Element onClick={() => handleElement(element.role)} key={element.role}>
          <img src={element.icon} />
          <h2>{element.label}</h2>
        </Element>
      ))}
    </Content>
  )
}