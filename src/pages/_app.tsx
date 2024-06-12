import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { theme } from "../styles/theme/colors";
import GlobalStyle from "../styles/globalStyles";
import "../styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setIsFading(true);
            setTimeout(() => {
                router.push("/login/login.screen");
            }, 1000);
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <div className={isFading ? "fade-out" : ""}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </>
    );
};

export default MyApp;
