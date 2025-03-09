export const LANGUAGES = [
    { code: "en", name: "English", description: "English"},
    { code: "es", name: "Español", description: "Spanish" },
    { code: "fr", name: "Français", description: "French" },
    { code: "de", name: "Deutsch", description: "German" },
    { code: "zh", name: "中文" , description: "Chinese" },
    { code: "ja", name: "日本語", description: "Japanese" },
    { code: "ar", name: "العربية", description: "Arabic" },
    { code: "ru", name: "Русский", description: "Russian" },
    { code: "pt", name: "Português", description: "Portuguese" },
    { code: "hi", name: "हिन्दी",  description: "Hindi" },
    { code: "ko", name: "한국어", description: "Korean" },
    { code: "it", name: "Italiano", description: "Italian" }
];

export const CURRENCIES = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "INR", symbol: "₹" },
    { code: "JPY", symbol: "¥" },
    { code: "GBP", symbol: "£" },
    { code: "AED", symbol: "فلس" },
    { code: "CNY", symbol: "¥" },
    { code: "RUB", symbol: "₽" },
    { code: "AUD", symbol: "$" },
    { code: "CAD", symbol: "$" },
    { code: "CHF", symbol: "₣" },
    { code: "KRW", symbol: "₩" },
    { code: "BRL", symbol: "R$" },
];

export const currencyToLocaleMap: { [key: string]: string } = 
{
    USD: "en-US", // US Dollar -> United States
    EUR: "de-DE", // Euro -> Germany (common Eurozone country)
    INR: "hi-IN", // Indian Rupee -> India
    JPY: "ja-JP", // Japanese Yen -> Japan
    GBP: "en-GB", // British Pound -> United Kingdom
    AED: "ar-AE", // UAE Dirham -> United Arab Emirates
    CNY: "zh-CN", // Chinese Yuan -> China
    RUB: "ru-RU", // Russian Ruble -> Russia
    AUD: "en-AU", // Australian Dollar -> Australia
    CAD: "en-CA", // Canadian Dollar -> Canada
    CHF: "de-CH", // Swiss Franc -> Switzerland
    KRW: "ko-KR", // South Korean Won -> South Korea
    BRL: "pt-BR", // Brazilian Real -> Brazil
};

export const languageToLocaleMap: { [key: string]: string } =
{
    en: "en-US", // English -> United States
    es: "es-ES", // Spanish -> Spain
    fr: "fr-FR", // French -> France
    de: "de-DE", // German -> Germany
    zh: "zh-CN", // Chinese -> China
    ja: "ja-JP", // Japanese -> Japan
    ar: "ar-AE", // Arabic -> United Arab Emirates
    ru: "ru-RU", // Russian -> Russia
    pt: "pt-BR", // Portuguese -> Brazil
    hi: "hi-IN", // Hindi -> India
    ko: "ko-KR", // Korean -> South Korea
    it: "it-IT", // Italian -> Italy
}

export const languageToTimeZoneMap: { [key: string]: string } = 
{
    en: "America/New_York", // English -> United States (Eastern Time)
    es: "Europe/Madrid",    // Spanish -> Spain
    fr: "Europe/Paris",     // French -> France
    de: "Europe/Berlin",    // German -> Germany
    zh: "Asia/Shanghai",    // Chinese -> China
    ja: "Asia/Tokyo",       // Japanese -> Japan
    ar: "Asia/Dubai",       // Arabic -> United Arab Emirates
    ru: "Europe/Moscow",    // Russian -> Russia
    pt: "America/Sao_Paulo",// Portuguese -> Brazil
    hi: "Asia/Kolkata",     // Hindi -> India
    ko: "Asia/Seoul",       // Korean -> South Korea
    it: "Europe/Rome",      // Italian -> Italy
};


// Default values for Language and Currency
export const DEFAULT_LANGUAGE = "en";
export const DEFAULT_CURRENCY = "USD";

// API Endpoints
export const EXCHANGE_RATE_API = "https://api.frankfurter.app/latest?from=USD";
export const PRODUCT_API = "https://fakestoreapi.com/products";

export enum ProductCategory 
{
    MENS_CLOTHING = "men's clothing",
    JEWELRY = "jewelery",
    ELECTRONICS = "electronics",
    WOMENS_CLOTHING = "women's clothing",
}
  