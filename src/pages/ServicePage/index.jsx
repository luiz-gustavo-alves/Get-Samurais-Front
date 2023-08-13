import {
  Container,
  Content,
  LeftContent,
  RightContent,
  TopRightContent,
  DetailsContainer,
  PriceContainer,
  RoleContainer,
  InfoContainer,
  OptionsContainer,
  OptionButton
} from "./style";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import serviceService from "../../services/service.service";
import roleIconsHashTable from "../../utils/roleIconsHashTable.js";

export default function ServicePage() {

  const params = useParams();
  const navigate = useNavigate();

  const [serviceData, setServiceData] = useState(null);
  const [iconsHashTable, setIconsHashTable] = useState({});

  useEffect(() => {

    serviceService.getServiceById(params.id)
      .then(res =>  {

        if (res.data.length === 0) {
          navigate("/");
          return;
        }

        const currentHashtable = roleIconsHashTable();
        setIconsHashTable(currentHashtable);
        setServiceData(...res.data);
      })
      .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

  }, []);

  if (serviceData === null) {
    return <h1>Carregando...</h1>
  }

  const formatCellphoneNumber = (cellphoneNumber) => {
    return `(${cellphoneNumber.slice(0, 2)}) ${cellphoneNumber.slice(2, 7)}-${cellphoneNumber.slice(7, 11)}`;
  }

  const cellphoneNumber = formatCellphoneNumber(serviceData.cellphoneNumber);
  const createdAt = dayjs(serviceData.createdAt).format("DD/MM/YYYY");

  return (
    <Container>
      <Content>
        <LeftContent>
          <img src={serviceData.imageURL} alt={serviceData.title} title={serviceData.title} />
        </LeftContent>
        <RightContent>
          <div>
            <TopRightContent>
              <DetailsContainer>
                <h2>{serviceData.title}</h2>
                <PriceContainer>
                  <h3>Preço: <span>R$ {serviceData.price.toFixed(2)}</span></h3>
                </PriceContainer>
                <RoleContainer>
                  <h3>Categoria:</h3>
                  <img src={iconsHashTable[serviceData.role]} alt={serviceData.role} title={serviceData.role}/>
                </RoleContainer>
              </DetailsContainer>
            </TopRightContent>
          </div>
        </RightContent>
      </Content>

      <InfoContainer>
        <p>Descrição do Serviço</p>
        <h3>{serviceData.description}</h3>
      </InfoContainer>

      <InfoContainer>
        <p>Informações de Contato</p>
        <h3><span>Prestador de Serviço: </span> {serviceData.name}</h3>
        <h3><span>Celular: </span> {cellphoneNumber}</h3>
        <h3><span>Criado em: </span> {createdAt}</h3>
        <h3><span>UF: </span> {serviceData.UF}</h3>
        <h3><span>Cidade: </span> {serviceData.city}</h3>
        <h3><span>CEP: </span> {serviceData.CEP}</h3>
        <h3><span>Endereço: </span> {serviceData.address}</h3>
        {serviceData.complement.length > 0 ? <h3>Complemento: {serviceData.complement}</h3> : ""}
      </InfoContainer>

      <OptionsContainer>
        <OptionButton onClick={() => navigate(-1)}>Voltar</OptionButton>
      </OptionsContainer>
    </Container>
  )
}