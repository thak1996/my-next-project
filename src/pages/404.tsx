import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

const NotFoundPage = () => {
    return <Container>404</Container>;
};

export default NotFoundPage;
