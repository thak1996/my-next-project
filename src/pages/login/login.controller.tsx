import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setItem, getItem } from "../../utils/secureStorage";

const useLoginController = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState<string | null>(null);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedEmail = getItem("email");
            const storedPassword = getItem("password");
            if (storedEmail) setEmail(storedEmail);
            if (storedPassword) setPassword(storedPassword);
        }
    }, []);

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
            const storedAdminEmail = getItem("adminEmail") || "admin@teste.com.br";
            const storedAdminPassword = getItem("adminPassword") || "admin123";
            const storedRepEmail = getItem("repEmail") || "representante@teste.com.br";
            const storedRepPassword = getItem("repPassword") || "rep123";

            if (email === storedAdminEmail) {
                if (password === storedAdminPassword) {
                    setUserType("admin");
                    router.push("/home/home.screen");
                } else {
                    throw new Error("Senha incorreta, tente novamente.");
                }
            } else if (email === storedRepEmail) {
                if (password === storedRepPassword) {
                    setUserType("representante");
                    router.push("/home/home.screen");
                } else {
                    throw new Error("Senha incorreta");
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
        if (email === getItem("adminEmail") || "admin@teste.com.br") {
            setIsAdminModalOpen(true);
        } else if (email === getItem("repEmail") || "representante@teste.com.br") {
            setIsCodeModalOpen(true);
        } else {
            setEmailError("E-mail não encontrado");
        }
    };

    const closeAdminModal = () => {
        setIsAdminModalOpen(false);
    };

    const openCodeModal = () => {
        setIsAdminModalOpen(false);
        setIsCodeModalOpen(true);
    };

    const closeCodeModal = () => {
        setIsCodeModalOpen(false);
    };

    const openChangePasswordModal = () => {
        setIsCodeModalOpen(false);
        setIsChangePasswordModalOpen(true);
    };

    const closeChangePasswordModal = () => {
        setIsChangePasswordModalOpen(false);
    };

    const updatePassword = (newPassword: string) => {
        if (typeof window !== 'undefined') {
            if (userType === "admin") {
                setItem("adminPassword", newPassword);
            } else if (userType === "representante") {
                setItem("repPassword", newPassword);
            }
        }
    };

    const resetModals = () => {
        setEmailError(null);
        setPasswordError(null);
        setLoading(false);
    };

    return {
        email,
        password,
        emailError,
        passwordError,
        loading,
        userType,
        isAdminModalOpen,
        isCodeModalOpen,
        isChangePasswordModalOpen,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        handleForgotPassword,
        closeAdminModal,
        openCodeModal,
        closeCodeModal,
        openChangePasswordModal,
        closeChangePasswordModal,
        updatePassword,
        resetModals,
    };
};

export default useLoginController;
