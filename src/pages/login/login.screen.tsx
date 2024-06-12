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
} from "../../styles/login.style";
import useLoginController from "../../controllers/login.controller";
import ModalAdmin from "../../components/modal.recovery.password/modalAdmin.component";
import ModalCode from "../../components/modal.recovery.password/modalCode.component";
import ModalChangePassword from "../../components/modal.recovery.password/modalChangePassword.component";

const LoginPage = () => {
    const {
        email,
        password,
        emailError,
        passwordError,
        loading,
        isAdminModalOpen,
        isCodeModalOpen,
        isChangePasswordModalOpen,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        handleForgotPassword,
        closeAdminModal,
        openCodeModal,
        closeCodeModal,
        openChangePasswordModal,
        closeChangePasswordModal,
        updatePassword,
        resetModals,
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
            <ModalAdmin
                isOpen={isAdminModalOpen}
                onClose={() => {
                    closeAdminModal();
                    resetModals();
                }}
                onNext={openCodeModal}
            />
            <ModalCode
                isOpen={isCodeModalOpen}
                onClose={() => {
                    closeCodeModal();
                    resetModals();
                }}
                onVerify={openChangePasswordModal}
            />
            <ModalChangePassword
                isOpen={isChangePasswordModalOpen}
                onClose={() => {
                    closeChangePasswordModal();
                    resetModals();
                }}
                onSave={() => {
                    closeChangePasswordModal();
                    resetModals();
                }}
                updatePassword={updatePassword}
            />
        </LoginContainer>
    );
};

export default LoginPage;
