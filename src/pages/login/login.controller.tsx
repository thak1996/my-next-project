import { useState } from "react";
import { useRouter } from "next/router";

const useLoginController = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const defaultEmail = "teste@teste.com.br";
    const defaultPassword = "123456";

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            if (email === defaultEmail && password === defaultPassword) {
                console.log("Login bem-sucedido");
                router.push("/home/home.screen");
            } else {
                throw new Error("Credenciais inválidas");
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        password,
        error,
        loading,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
    };
};

export default useLoginController;
