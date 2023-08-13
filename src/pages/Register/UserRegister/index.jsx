import {
  Container,
  Content,
  Input,
  Label,
  Button
} from "../../../components/Forms";

import {
  Form,
  Title
} from "./style";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";

export default function UserRegister() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      alert("Senhas fornecidas não coincidem!");
      return;
    }

    authService.signUpUser({...formData})
      .then(() => navigate("/signin"))
      .catch(err => {

        if (err.request.status === 401) {
          alert(err.response.data)
        }

        else if (err.request.status === 500) {
          alert("Erro interno do servidor.\nTente novamente mais tarde!");
        }
      });
  }

  return (
    <Container>
      <Title>Cadastrar Usuário</Title>
      <Form onSubmit={handleSubmit}>
      <Content>
          <Label>Nome</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Content>
        <Content>
          <Label>E-mail</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Content>
        <Content>
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            minLength={5}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Content>
        <Content>
          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            minLength={5}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Content>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  )
}