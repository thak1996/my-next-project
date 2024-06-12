import { useState } from "react";
import { useRouter } from "next/router";

const useLoginController = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState<string | null>(null);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
    const [isRepModalOpen, setIsRepModalOpen] = useState(false);
    const router = useRouter();

    const adminCredentials = {
        email: "admin@teste.com.br",
        password: "admin123",
    };

    const representativeCredentials = {
        email: "representante@teste.com.br",
        password: "rep123",
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(null);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setEmailError(null);
        setPasswordError(null);

        try {
            if (email === adminCredentials.email) {
                if (password === adminCredentials.password) {
                    setUserType("admin");
                    router.push("/home/home.screen");
                } else {
                    throw new Error("Senha incorreta, tente novamente.");
                }
            } else if (email === representativeCredentials.email) {
                if (password === representativeCredentials.password) {
                    setUserType("representante");
                    router.push("/home/home.screen");
                } else {
                    throw new Error("Senha incorreta, tente novamente.");
                }
            } else {
                throw new Error("E-mail não encontrado");
            }
        } catch (err: any) {
            if (err.message === "E-mail não encontrado") {
                setEmailError(err.message);
            } else {
                setPasswordError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        if (email === adminCredentials.email) {
            setIsAdminModalOpen(true);
        } else if (email === representativeCredentials.email) {
            setIsRepModalOpen(true);
        } else {
            setEmailError("E-mail não encontrado");
        }
    };

    const closeAdminModal = () => {
        setIsAdminModalOpen(false);
    };

    const closeRepModal = () => {
        setIsRepModalOpen(false);
    };

    return {
        email,
        password,
        emailError,
        passwordError,
        loading,
        userType,
        isAdminModalOpen,
        isRepModalOpen,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        handleForgotPassword,
        closeAdminModal,
        closeRepModal,
    };
};

export default useLoginController;
