import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SplashContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.red};
    animation: ${fadeIn} 1s ease-in-out;
    position: relative;
`;

export const Logo = styled.img`
    width: clamp(256px, 50vw, 512px);
    height: auto;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.75rem, 4vw, 2rem);
    font-weight: 700;
    line-height: 39.01px;
    margin-top: 20px;
`;

export const Shadow = styled.div`
    width: clamp(155.56px, 25vw, 311.12px);
    height: clamp(53.02px, 8vw, 106.04px);
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.1) 70%
    );
    border-radius: 50%;
    position: absolute;
    bottom: 28%;
    left: 50%;
    transform: translateX(-50%) rotate(-13.18deg);
    opacity: 0.2;
`;
