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
    ErrorMessage,
} from "./login.style";
import useLoginController from "./login.controller";

const LoginPage = () => {
    const {
        email,
        password,
        emailError,
        passwordError,
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
                        error={!!emailError}
                    />
                </Label>
                <Label>
                    <span>Senha</span>
                    <ErrorInput
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={handlePasswordChange}
                        error={!!passwordError && !emailError}
                    />
                    {passwordError && !emailError && (
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    )}
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
