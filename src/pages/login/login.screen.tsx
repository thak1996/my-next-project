import React from "react";
import {
    LoginContainer,
    Logo,
    Title,
    Form,
    Label,
    Input,
    Button,
    ForgotPassword,
} from "./login.style";

const LoginPage = () => {
    return (
        <LoginContainer>
            <Logo src="/logo.png" alt="Logo" />
            <Title>Acessar minha conta</Title>
            <Form>
                <Label>
                    <span>E-mail</span>
                    <Input type="email" placeholder="name@example.com" />
                </Label>
                <Label>
                    <span>Senha</span>
                    <Input type="password" placeholder="******" />
                </Label>
                <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
                <Button type="submit">Entrar</Button>
            </Form>
        </LoginContainer>
    );
};

export default LoginPage;
