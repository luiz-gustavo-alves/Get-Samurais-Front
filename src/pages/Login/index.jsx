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
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import authService from "../../services/auth.service";

export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    authService.signIn({...formData})
      .then(res => {
        login(res.data);
        navigate("/");
      })
      .catch(err => {
        
        if (err.request.status === 404) {
          alert(err.response.data)
        }

        else if (err.request.status === 500) {
          alert("Erro interno do servidor.\nTente novamente mais tarde!");
        }
      });
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