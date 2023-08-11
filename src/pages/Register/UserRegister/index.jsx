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

export default function UserRegister() {

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
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Content>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  )
}