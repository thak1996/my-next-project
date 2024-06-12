import React from "react";
import {
    Overlay,
    Container,
    Header,
    Title,
    CloseButton,
    Message,
    Button,
} from "./modal.style";

interface ModalAdminProps {
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
}

const ModalAdmin: React.FC<ModalAdminProps> = ({ isOpen, onClose, onNext }) => {
    if (!isOpen) return null;

    return (
        <Overlay>
            <Container>
                <Header>
                    <Title>Recuperar Senha</Title>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </Header>
                <Message>
                    Enviamos um código de recuperação para o seu e-mail
                    cadastrado. Por favor, verifique a sua caixa de entrada e a
                    pasta de spam, se necessário.
                </Message>
                <Button onClick={onNext}>Próximo</Button>
            </Container>
        </Overlay>
    );
};

export default ModalAdmin;
