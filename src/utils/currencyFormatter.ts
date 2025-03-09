
import { currencyToLocaleMap } from "@/config/constants";

export const formatCurrency = (amount: number, currency: string) => 
{
    const locale = currencyToLocaleMap[currency] || "en-US";
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
};
  