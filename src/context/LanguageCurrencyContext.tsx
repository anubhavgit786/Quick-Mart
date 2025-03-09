import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_LANGUAGE, DEFAULT_CURRENCY } from "@/config/constants";
import { LanguageCurrencyContextType, LanguageCurrencyProviderProps } from "@/types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { RotatingLines } from "react-loader-spinner";

// Create context
const LanguageCurrencyContext = createContext<LanguageCurrencyContextType | undefined>(undefined);

export const LanguageCurrencyProvider = ({ children }: LanguageCurrencyProviderProps) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  
  // State initialization without accessing localStorage (SSR-safe)
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  const [currency, setCurrency] = useState<string>(DEFAULT_CURRENCY);
  const [exchangeRate, setExchangeRate] = useState<number>(1); // Default exchange rate
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const isDirectionRTL = language === "ar" || language === "he";

  // Fetch exchange rate from API
  const fetchExchangeRate = async (newCurrency: string) => {
    setLoading(true); // Show loader
    try {
      if (newCurrency === "USD") {
        setExchangeRate(1);
        return;
      }
      const response = await fetch(`https://api.frankfurter.app/latest?amount=1&from=USD&to=${newCurrency}`);
      const data = await response.json();
      if (data.rates && data.rates[newCurrency]) {
        setExchangeRate(data.rates[newCurrency]);
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setExchangeRate(1); // Fallback to 1 if API fails
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Load stored language & currency on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || DEFAULT_LANGUAGE;
    const savedCurrency = localStorage.getItem("currency") || DEFAULT_CURRENCY;

    setLanguage(savedLanguage);
    setCurrency(savedCurrency);
    i18n.changeLanguage(savedLanguage);
    fetchExchangeRate(savedCurrency);
  }, [i18n]);

  // Update language
  const updateLanguage = (lang: string) => {
    if (lang !== language) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
      i18n.changeLanguage(lang);
      router.replace(router.pathname, router.asPath, { locale: lang });
    }
  };

  // Update currency
  const updateCurrency = (curr: string) => {
    if (curr !== currency) {
      setCurrency(curr);
      localStorage.setItem("currency", curr);
      fetchExchangeRate(curr);
    }
  };

  return (
    <LanguageCurrencyContext.Provider value={{ language, currency, exchangeRate, updateLanguage, updateCurrency, isDirectionRTL }}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <RotatingLines
            visible={true}
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : (
        children
      )}
    </LanguageCurrencyContext.Provider>
  );
};

// Custom hook for consuming context
export const useLanguageCurrency = (): LanguageCurrencyContextType => {
  const context = useContext(LanguageCurrencyContext);
  
  if (!context) {
    throw new Error("useLanguageCurrency must be used within a LanguageCurrencyProvider");
  }
  
  return context;
};
