import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
`;
