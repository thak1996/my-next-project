import React from "react";
import useSplashController from "../../controllers/splash.controller";
import { SplashContainer, Logo, Title, Shadow } from "../../styles/splash.style";

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
