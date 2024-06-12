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
import ModalAdmin from "../../components/modal.recovery.password/modalAdmin.component";
import ModalRepresentative from "../../components/modal.recovery.password/modalRepre.component";

const LoginPage = () => {
    const {
        email,
        password,
        emailError,
        passwordError,
        loading,
        isAdminModalOpen,
        isRepModalOpen,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        handleForgotPassword,
        closeAdminModal,
        closeRepModal,
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
                <ForgotPassword href="#" onClick={handleForgotPassword}>
                    Esqueci minha senha
                </ForgotPassword>
                <Button type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                </Button>
            </Form>
            <ModalAdmin isOpen={isAdminModalOpen} onClose={closeAdminModal} />
            <ModalRepresentative
                isOpen={isRepModalOpen}
                onClose={closeRepModal}
            />
        </LoginContainer>
    );
};

export default LoginPage;
