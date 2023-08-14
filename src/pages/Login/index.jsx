import {
  Container,
  Content,
  Input,
  Label,
  Button
} from "../../components/Forms";

import {
  Form,
  Title,
  FormLoader
} from "./style";

import { 
  ThreeDots 
} from "react-loader-spinner";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import authService from "../../services/auth.service";

export default function Login() {

  const { isAuth, login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [disabled, setDisabled] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    
    authService.signIn({...formData})
      .then(res => {
        login(res.data);
        navigate("/");
      })
      .catch(err => {

        setDisabled(false);
        
        if (err.request.status === 404) {
          alert(err.response.data)
        }

        else if (err.request.status === 500) {
          alert("Erro interno do servidor.\nTente novamente mais tarde!");
        }
      });
  }

  useEffect(() => {
    if (isAuth()) {
      navigate("/");
    }
  }, []);

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
        <Button type="submit" disabled={disabled}>
          {disabled ? "" : "Entrar"}
        </Button>
        <FormLoader>
          <ThreeDots 
            width={70} 
            height={45} 
            border-radius={4.5}
            color="#FFF"
            visible={disabled} 
            font-size={9} 
          />
        </FormLoader>
      </Form>
    </Container>
  )
}