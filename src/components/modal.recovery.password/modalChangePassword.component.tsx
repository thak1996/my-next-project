import React, { useState } from "react";
import {
    Overlay,
    Container,
    Header,
    Title,
    CloseButton,
    Message,
    Button,
    Input,
    ErrorMessage
} from './modal.style';

interface ModalChangePasswordProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    updatePassword: (newPassword: string) => void;
}

const ModalChangePassword: React.FC<ModalChangePasswordProps> = ({
    isOpen,
    onClose,
    onSave,
    updatePassword
}) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSave = () => {
        if (!newPassword || !confirmPassword) {
            setError("Os campos de senha não podem estar vazios!");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("As senhas devem ser iguais!");
            return;
        }
        updatePassword(newPassword);
        onSave();
    };

    const handleClose = () => {
        setNewPassword("");
        setConfirmPassword("");
        setError("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <Container>
                <Header>
                    <Title>Nova senha</Title>
                    <CloseButton onClick={handleClose}>×</CloseButton>
                </Header>
                <Message>Senha</Message>
                <Input
                    type="password"
                    placeholder="Digite sua nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    hasError={!!error}
                />
                <Message>Confirme sua senha</Message>
                <Input
                    type="password"
                    placeholder="Confirme sua nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    hasError={!!error}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button onClick={handleSave}>Salvar</Button>
            </Container>
        </Overlay>
    );
};

export default ModalChangePassword;
