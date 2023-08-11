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
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";

export default function ServiceProviderRegister() {

  const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
    cellphoneNumber: ""
  });

  const [serviceProviderFormData, setServiceProviderFormData] = useState({
    CEP: "",
    city: "",
    UF: "AC",
    address: "",
    complement: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [nextForm, setNextForm] = useState(false);

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

    if (userFormData.password !== confirmPassword) {
      alert("Senhas fornecidas não coincidem!");
      return;
    }

    setNextForm(true);
  }

  function handleServiceProviderFormSubmit(e) {
    e.preventDefault();
    
    const payload = {...userFormData, ...serviceProviderFormData};
    authService.signUpServiceProvider(payload)
      .then(() => navigate("/signin"))
      .catch(err => {

        if (err.response.status === 422) {
          const errors = [...err.response.data];
          alert(errors);
        }
      })
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
              name="cellphoneNumber"
              value={userFormData.cellphoneNumber}
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
              minLength={8}
              maxLength={8}
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