import {
  Container,
  Title,
  Content,
  Input,
  Label,
  Description,
  DropDown,
  DropDownContent,
  DropDownValue,
  CheckBox,
  ButtonContainer,
  Button
} from "./style";

import { useEffect, useState } from 'react';
import serviceProviderService from "../../services/serviceProvider.service";

export default function ServiceOption({ option, serviceData, setShowOption, token }) {

  const [serviceForm, setServiceForm] = useState({
    title: "",
    description: "",
    price: "",
    role: "tecnologia",
    imageURL: "",
    available: true
  });
  
  const [roles, setRoles] = useState([
    'tecnologia', 'marketing', 'aulas', 'arquitetura', 'financeiro', 'consultoria', 'saude', 'domestico', 'outros'
  ]);

  useEffect(() => {

    if (option === "update") {

      const roleIndex = roles.indexOf(serviceData.role);
      const newRoles = roles.filter((role, index) => index !== roleIndex);
      newRoles.unshift(serviceData.role);

      const { 
        title, 
        description, 
        price, 
        role, 
        imageURL, 
        available 
      } = serviceData;

      const boolAvailable = (available === '1') ? true : false;

      setServiceForm({ title, description, price, role, imageURL, available: boolAvailable });
      setRoles(newRoles);
    }

  }, [])

  function handleChange(e) {
    setServiceForm({ ...serviceForm, [e.target.name]: e.target.value });
  }

  function handleCheckBox(e) {
    setServiceForm({ ...serviceForm, [e.target.name]: e.target.checked })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {...serviceForm};
    payload['image'] = payload['imageURL'];
    payload['available'] = String(payload['available']);
    payload['price'] = Number(Number(payload['price']).toFixed(2));

    delete payload['imageURL']

    if (option === "add") {
      
      serviceProviderService.createService({ ...payload }, token)
        .then(() => window.location.reload())
        .catch((err) => {

          if (err.response.status === 422) {
            alert(err.response.data);
          }

          else if (err.response.status === 500) {
            alert("Erro interno do sistema.\nTente novamente mais tarde!");
          }
        })

    } else if (option ==="update") {

      serviceProviderService.updateService({ ...payload }, serviceData.id, token)
        .then(() => window.location.reload())
        .catch((err) => {

          if (err.response.status === 422) {
            alert(err.response.data);
          }

          else if (err.response.status === 500) {
            alert("Erro interno do sistema.\nTente novamente mais tarde!");
          }
        })
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>
        {option === "add" ? "Criar Novo Serviço" : "Editar Serviço" }
      </Title>
      <Content>
        <Label>Título</Label>
        <Input
          type="text"
          name="title"
          value={serviceForm.title}
          onChange={handleChange}
          required
        />
      </Content>
      <Content>
        <Label>{(serviceForm.description.length < 113) ? "Descrição" : ""}</Label>
        <Description
          type="text"
          name="description"
          value={serviceForm.description}
          onChange={handleChange}
          required
        />
      </Content>
      <Content>
        <Label>Preço</Label>
        <Input
          type="text"
          name="price"
          value={serviceForm.price}
          onChange={handleChange}
          required
        />
      </Content>
      <DropDown>
        <Label>Categoria</Label>
        <DropDownValue>
          <h3>{serviceForm.role}</h3>
        </DropDownValue>
        <DropDownContent
          name="role"
          onChange={handleChange}>
          {roles.map((role, index) => 
            <option value={role} key={index}>{role}</option>
          )}
        </DropDownContent>
      </DropDown>
      <Content>
        <Label>URL da Imagem</Label>
        <Input
          type="text"
          name="imageURL"
          value={serviceForm.imageURL}
          onChange={handleChange}
          required
        />
      </Content>
      <Content>
        <Label>Serviço disponivel</Label>
        <CheckBox
          type="checkbox"
          name="available"
          checked={serviceForm.available}
          onChange={handleCheckBox}
        />
      </Content>
      <ButtonContainer>
        <Button type="button" onClick={() => setShowOption(false)}>Cancelar</Button>
        <Button type="submit">
          {option === "add" ? "Criar Serviço" : "Editar Serviço" }
        </Button>
      </ButtonContainer>
    </Container>
  )
}