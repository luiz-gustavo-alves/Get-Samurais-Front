import {
  Container,
  Content,
  Input,
  Button
} from "../../../components/Forms";

import {
  Form,
  Title,
  Label,
  DropDown,
  DropDownValue,
  DropDownContent
} from "./style";

import { useState } from "react";

export default function ServiceProviderRegister() {

  const [nextForm, setNextForm] = useState(false);
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
    cellphone: ""
  });

  const [serviceProviderFormData, setServiceProviderFormData] = useState({
    CEP: "",
    city: "",
    UF: "AC",
    address: "",
    complement: ""
  })

  const [confirmPassword, setConfirmPassword] = useState("12345");
  const UFs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 
               'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO','RR', 'SC', 'SP', 'SE', 'TO'];

  function handleUserFormChange(e) {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  }

  function handleServiceProviderChange(e) {
    setServiceProviderFormData({ ...serviceProviderFormData, [e.target.name]: e.target.value });
  }

  function handleUserFormSubmit(e) {
    e.preventDefault();
    setNextForm(true);
  }

  function handleServiceProviderFormSubmit(e) {
    e.preventDefault();
    console.log(serviceProviderFormData);
  }

  const setServiceProviderPage = () => {

    if (nextForm === false) {
      return (
        <Form onSubmit={handleUserFormSubmit}>
          <Content>
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              value={userFormData.name}
              onChange={handleUserFormChange}
              required
            />
          </Content>
          <Content>
            <Label>E-mail</Label>
            <Input
              type="email"
              name="email"
              value={userFormData.email}
              onChange={handleUserFormChange}
              required
            />
          </Content>
          <Content>
            <Label>Senha</Label>
            <Input
              type="password"
              name="password"
              value={userFormData.password}
              onChange={handleUserFormChange}
              required
            />
          </Content>
          <Content>
            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Content>
          <Content>
            <Label>Celular</Label>
            <Input
              type="text"
              name="cellphone"
              value={userFormData.cellphone}
              onChange={handleUserFormChange}
              minLength={11}
              maxLength={11}
              required
            />
          </Content>
          <Button type="submit">Próximo</Button>
        </Form>
      )

    } else {
      return (
        <Form onSubmit={handleServiceProviderFormSubmit}>
          <Content>
            <Label>CEP</Label>
            <Input
              type="text"
              name="CEP"
              value={serviceProviderFormData.CEP}
              onChange={handleServiceProviderChange}
              required
            />
          </Content>
          <Content>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={serviceProviderFormData.city}
              onChange={handleServiceProviderChange}
              required
            />
          </Content>
          <DropDown>
            <Label>UF</Label>
            <DropDownValue>
              <h3>{serviceProviderFormData.UF}</h3>
            </DropDownValue>
            <DropDownContent
              onChange={handleServiceProviderChange} 
              name="UF">
              {UFs.map((UF, index) => 
                <option value={UF} key={index}>{UF}</option>
              )}
          </DropDownContent>
          </DropDown>
          <Content>
            <Label>Endereço</Label>
            <Input
              type="text"
              name="address"
              value={serviceProviderFormData.address}
              onChange={handleServiceProviderChange}
              required
            />
          </Content>
          <Content>
            <Label>Complemento</Label>
            <Input
              type="text"
              name="complement"
              value={serviceProviderFormData.complement}
              onChange={handleServiceProviderChange}
              required
            />
          </Content>
          <Content>
            <Button type="button" onClick={() => setNextForm(false)}>Retornar</Button>
            <Button type="submit">Cadastrar</Button>
          </Content>
        </Form>
      )
    }
  }

  const serviceProviderPage = setServiceProviderPage();

  return (
    <Container>
      <Title>Cadastrar Prestador de Serviço</Title>
        {serviceProviderPage}
    </Container>
  )
}