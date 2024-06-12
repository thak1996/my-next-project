import React from "react";
import {
    LoginContainer,
    Logo,
    Title,
    Form,
    Label,
    Button,
    ForgotPassword,
    ErrorInput,
} from "./login.style";
import useLoginController from "./login.controller";

const LoginPage = () => {
    const {
        email,
        password,
        error,
        loading,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
    } = useLoginController();

    return (
        <LoginContainer>
            <Logo src="/logo.png" alt="Logo" />
            <Title>Acessar minha conta</Title>
            <Form onSubmit={handleSubmit}>
                <Label>
                    <span>E-mail</span>
                    <ErrorInput
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleEmailChange}
                        error={error}
                    />
                </Label>
                <Label>
                    <span>Senha</span>
                    <ErrorInput
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={handlePasswordChange}
                        error={error}
                    />
                </Label>
                <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
                <Button type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                </Button>
            </Form>
        </LoginContainer>
    );
};

export default LoginPage;
