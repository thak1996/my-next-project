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

interface ModalRepresentativeProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalRepresentative: React.FC<ModalRepresentativeProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <Overlay>
            <Container>
                <Header>
                    <Title>Recuperar Senha</Title>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </Header>
                <Message>
                    Sua solicitação de recuperação de senha foi enviada para o
                    administrador da conta. Em breve, uma nova senha será
                    enviada para o seu e-mail!
                </Message>
                <Button onClick={onClose}>Entendi</Button>
            </Container>
        </Overlay>
    );
};

export default ModalRepresentative;
