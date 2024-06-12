import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 377px;
    height: auto;
    max-height: 90%;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: 400px) {
        padding: 15px;
        width: 90%;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 400px) {
        margin-bottom: 15px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.25rem;

    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 400px) {
        font-size: 1.25rem;
    }
`;

export const Message = styled.p`
    text-align: left;
    margin-bottom: 10px;

    @media (max-width: 400px) {
        margin-bottom: 8px;
    }
`;

export const Button = styled.button`
    background: #d32f2f;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    margin-top: 10px;

    &:hover {
        background: #b71c1c;
    }

    @media (max-width: 400px) {
        padding: 8px;
        font-size: 0.875rem;
    }
`;

interface InputProps {
    hasError: boolean;
}

export const Input = styled.input<InputProps>`
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
    border-radius: 4px;
    margin-bottom: 6px;
    box-sizing: border-box;

    @media (max-width: 400px) {
        padding: 8px;
        font-size: 0.875rem;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    margin: 0 0 10px 0;
    font-size: 0.875rem;
`;

export const RetryMessage = styled.p`
    text-align: left;
    margin: 10px 0;
    font-size: 0.875rem;
    color: black;

    @media (max-width: 400px) {
        margin: 8px 0;
    }
`;

export const RetryLink = styled.span`
    color: red;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
