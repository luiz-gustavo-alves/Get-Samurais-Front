import {
  Container,
  Content,
  Input,
  Label,
  Button
} from "../../components/Forms";

import {
  Form,
  Title
} from "./style";

import { useState } from "react";

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  )
}