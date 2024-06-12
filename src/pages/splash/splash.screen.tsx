import React from "react";
import { SplashContainer, Logo, Title, Shadow } from "./splash.style";

const SplashScreen = () => {
    return (
        <SplashContainer>
            <Logo src="/person.png" alt="Personagem" />
            <Shadow />
            <Title>Seja bem-vindo!</Title>
        </SplashContainer>
    );
};

export default SplashScreen;
