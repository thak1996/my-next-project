import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: -6%;
`;

export const Logo = styled.img`
    width: clamp(256px, 50vw, 512px);
    height: auto;
    
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    max-width: 400px;
    text-align: left;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 1rem;

    span {
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        &::after {
            content: "*";
            color: ${({ theme }) => theme.colors.red};
            margin-left: 2px;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.graySemiMedium};
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    margin-bottom: 6px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 10px;
    box-sizing: border-box;

    &:hover {
        background-color: ${({ theme }) => theme.colors.redDark};
    }
`;

export const ForgotPassword = styled.a`
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.875rem;
    text-align: right;
    margin-bottom: 10px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
