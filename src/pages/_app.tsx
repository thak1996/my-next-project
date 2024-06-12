import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import { theme } from "../styles/theme/colors";
import "../styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
);

export default MyApp;
