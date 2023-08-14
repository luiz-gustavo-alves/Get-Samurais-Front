import {
  Container,
  Content,
  Title,
  DescriptionContainer,
  Description,
  SearchContainer
} from "./style";

import {
  searchIcon
} from "../../assets/images/Icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Home() {

  const { isAuth } = useAuth();

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState({ query: "" });
  
  function handleChange(e) {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search-service?query=${searchQuery.query}&order=date`);
  }

  return (
    <Container>
      <Content>
        <Title>GET SAMURAIS</Title>
        <DescriptionContainer>
          <Description>Conheça agora nossa incrível plataforma para prestação de serviços!</Description>
        </DescriptionContainer>
        {isAuth() &&
          <SearchContainer onSubmit={handleSubmit}>
            <input
              placeholder="Pesquisar" 
              type="text" 
              name="query"
              required 
              value={searchQuery.query} 
              onChange={handleChange} 
            />
            <button type="submit">
              <img title="Pesquisar" src={searchIcon} />
            </button>
          </SearchContainer>
        }
      </Content>
    </Container>
  )
}