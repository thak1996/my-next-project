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
    ErrorMessage,
    RetryMessage,
    RetryLink,
} from "./modal.style";

interface ModalCodeProps {
    isOpen: boolean;
    onClose: () => void;
    onVerify: () => void;
}

const ModalCode: React.FC<ModalCodeProps> = ({ isOpen, onClose, onVerify }) => {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    const handleVerify = () => {
        if (code === "123456") {
            onVerify();
        } else {
            setError("Código incorreto");
        }
    };

    const handleClose = () => {
        setCode("");
        setError("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <Container>
                <Header>
                    <Title>Recuperar Senha</Title>
                    <CloseButton onClick={handleClose}>×</CloseButton>
                </Header>
                <Message>Código</Message>
                <Input
                    type="text"
                    placeholder="Digite o código recebido"
                    value={code}
                    onChange={(e: {
                        target: { value: React.SetStateAction<string> };
                    }) => setCode(e.target.value)}
                    hasError={!!error}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <RetryMessage>
                    Não recebeu o código? <RetryLink>Tente Novamente</RetryLink>
                </RetryMessage>
                <Button onClick={handleVerify}>Próximo</Button>
            </Container>
        </Overlay>
    );
};

export default ModalCode;
