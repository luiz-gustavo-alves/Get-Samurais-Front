import {
  ServiceContainer,
  ServiceDefault
} from "../../components/Services";

import {
  OffsetContainer,
  OffsetButton
} from "../../components/Offset";

import {
  Container,
  SearchContainer,
  DropDown,
  DropDownContent
} from "./style";

import {
  searchIcon
} from "../../assets/images/Icons";

import {
  CenterLoader
} from "../../components/Loaders";

import { 
  Oval 
} from "react-loader-spinner";

import Content from "../../components/Content";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useOffset from "../../hooks/useOffset";
import useAuth from "../../hooks/useAuth";
import userService from "../../services/user.service";

export default function Search() {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const order = searchParams.get('order');

  const navigate = useNavigate();

  const [servicesData, setServicesData] = useState(null);
  const [currentQuery, setCurrentQuery] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState({ query: query, order: "Data" });

  const { auth, isAuth } = useAuth();
  const { offset, resetOffset, updateOffset, validateOffset } = useOffset();

  const orderOptions = ['Data', 'Preço', 'Categoria'];

  function handleChange(e) {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    

    if (searchQuery.order === 'Data') {
      searchQuery.order = 'date';

    } else if (searchQuery.order === 'Preço') {
      searchQuery.order = 'price';

    } else if (searchQuery.order === 'Categoria') {
      searchQuery.order = 'role';
    }

    navigate(`/search-service?query=${searchQuery.query}&order=${searchQuery.order}`);
  }

  useEffect(() => {
    
    if (!isAuth() || !query) {
      navigate("/");
      return;
    }

    let diffQuery = false;
    if (query !== currentQuery && currentQuery !== null) {
      diffQuery = true;
    }

    let diffOrder = false;
    if (order !== currentOrder && currentOrder !== null) {
      diffOrder = true;
    }

    if (servicesData === null || diffQuery || diffOrder) {

      resetOffset();
      userService.getServicesByQuery(query, order, 0)
        .then(res => {
          setServicesData(res.data);
          setCurrentQuery(query);
          setCurrentOrder(order);
        })
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

    } else if (offset > 0) {

      userService.getServicesByQuery(query, order, offset)
        .then(res => {

          const { data } = res.data;
          const currentData = [...servicesData.data];
          currentData.push(...data);

          setServicesData({...servicesData, data: currentData });
          setCurrentQuery(query);
          setCurrentOrder(order);
        })
        .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));
    }
  
  }, [auth, offset, searchParams]);

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
    <Container>
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
        <DropDown>
          <DropDownContent
          onChange={handleChange} 
          name="order">
          {orderOptions.map((order, index) => 
            <option value={order} key={index}>{order}</option>
          )}
          </DropDownContent>
        </DropDown>
      </SearchContainer>
      <ServiceContainer>
        {servicesData.data.length > 0 ?
          <Content
            servicesData={servicesData.data} 
            showOptions={false} 
          />
          :
          <ServiceDefault>
            <h2>Não há serviços disponíveis!</h2>
          </ServiceDefault>
        }
        {validateOffset(servicesData.data, servicesData.counter) &&
          <OffsetContainer>
            <OffsetButton onClick={updateOffset}>Ver mais</OffsetButton>
          </OffsetContainer>
        }
      </ServiceContainer>
    </Container>
  )
}