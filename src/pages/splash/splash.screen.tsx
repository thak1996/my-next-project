import React from "react";
import useSplashController from "./splash.controller";
import { SplashContainer, Logo, Title, Shadow } from "./splash.style";

const SplashScreen = () => {
    useSplashController();

    return (
        <SplashContainer>
            <Logo src="/person.png" alt="Personagem" />
            <Shadow />
            <Title>Seja bem-vindo!</Title>
        </SplashContainer>
    );
};

export default SplashScreen;
