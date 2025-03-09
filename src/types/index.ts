export type Language = 
{
    code: string;
    name: string;
};
  
export type Currency = 
{
    code: string;
    symbol: string;
};
  
export type Product = 
{
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: 
    {
      rate: number;
      count: number;
    };
};
  


export interface LanguageCurrencyContextType 
{
    language: string;
    currency: string;
    exchangeRate: number;
    isDirectionRTL: boolean;
    updateLanguage: (lang: string) => void;
    updateCurrency: (curr: string) => void;
}
  
export interface LanguageCurrencyProviderProps 
{
    children: React.ReactNode;
}
  