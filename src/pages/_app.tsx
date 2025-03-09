import { appWithTranslation } from "next-i18next";
import { LanguageCurrencyProvider } from "@/context/LanguageCurrencyContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/components/Layout";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageCurrencyProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageCurrencyProvider>
    </ThemeProvider>);
}

export default appWithTranslation(App);