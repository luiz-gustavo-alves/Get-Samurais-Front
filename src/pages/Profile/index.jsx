import {
  Container,
  ProfileContent,
  LeftContent,
  RightContent,
  TopRightContent,
  DetailsContainer,
  Title,
  ServicesContainer
} from "./style";

import {
  samuraiIcon,
  bambooHatIcon
} from "../../assets/images/Icons";

import Content from "../../components/Content";

import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import useAuth from "../../hooks/useAuth";
import userService from "../../services/user.service";

export default function Profile() {

  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();
  const { auth, isAuth } = useAuth();

  const [profileData, setProfileData] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {

    if (pathname === "/profile/me") {
      
      if (!isAuth()) {
        navigate("/");
        return;
      }

      const payload = { type: auth.type };
      userService.getUserProfile(payload, auth.token)
        .then(res => {
          setProfileData(...res.data);
          setType("userProfile");
        })
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

    } else {

      const { id } = params;

      userService.getServiceProviderProfile(id)
        .then(res => {
          setProfileData(res.data);
          setType("serviceProviderProfile");
        })
        .catch(err => {

          if (err.response.status === 404) {
            alert(err.response.data);
          }

          else if (err.response.status === 500) {
            alert("Erro interno do servidor.\nTente novamente mais tarde!");
          }

        });
    }

  }, [pathname]);

  if (profileData === null) {
    return <h1>Carregando...</h1>
  }

  const icon = (auth.type === "serviceProviderSession" || type === "serviceProviderProfile" ) ? 
    samuraiIcon : bambooHatIcon;

  return (
    <Container>
      <ProfileContent>
        <LeftContent>
          <img src={icon} />
        </LeftContent>
        <RightContent>
          <div>
            <TopRightContent>
              <DetailsContainer>
                {type === "userProfile" ?
                  <>   
                    <Title>Informações de Perfil</Title>            
                    <h2>{profileData.name}</h2>
                    <h2>{profileData.email}</h2>
                    <h2>Criado em: {dayjs(profileData.createdAt.createdAt).format("DD/MM/YYYY")}</h2>
                  </>
                  :
                  <>
                    <Title>Informações Prestador</Title>
                    <h2>{profileData.info.name}</h2>
                    <h2>UF: {profileData.info.UF}</h2>
                    <h2>Cidade: {profileData.info.city}</h2>
                    <h2>CEP: {profileData.info.CEP}</h2>
                    <h2>Endereço: {profileData.info.address}</h2>
                    {profileData.info.complement.length > 0 ? 
                        <h2>Complemento: {profileData.info.complement}</h2> 
                      : 
                        ""
                    }
                    <h2>Criado em: {dayjs(profileData.info.createdAt).format("DD/MM/YYYY")}</h2>
                  </>
                }
              </DetailsContainer>
            </TopRightContent>
          </div>
        </RightContent>
      </ProfileContent>

      {type === "serviceProviderProfile" &&
        <ServicesContainer>
          <h4>Serviços Disponíveis</h4>
          <Content servicesData={profileData.services} />
        </ServicesContainer>
      }
    </Container>
  )
}