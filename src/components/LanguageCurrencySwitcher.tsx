import { useLanguageCurrency } from "@/context/LanguageCurrencyContext";
import { LANGUAGES, CURRENCIES } from "@/config/constants";

const LanguageCurrencySwitcher = () => {
  const { language, currency, updateLanguage, updateCurrency } = useLanguageCurrency();

  return (
    <div className="flex space-x-4 items-center">
      {/* Language Selector */}
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        onChange={(e) => updateLanguage(e.target.value)}
        value={language}
        className="p-2 border rounded bg-white text-gray-900 focus:ring focus:ring-blue-300"
        aria-label="Select Language"
      >
        {LANGUAGES.map(({ code, name, description }) => (
          <option key={code} value={code}>
            {description} : {name}
          </option>
        ))}
      </select>

      {/* Currency Selector */}
      <label htmlFor="currency-select" className="sr-only">
        Select Currency
      </label>
      <select
        id="currency-select"
        onChange={(e) => updateCurrency(e.target.value)}
        value={currency}
        className="p-2 border rounded bg-white text-gray-900 focus:ring focus:ring-blue-300"
        aria-label="Select Currency"
      >
        {CURRENCIES.map(({ code, symbol }) => (
          <option key={code} value={code}>
            {code} ({symbol})
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageCurrencySwitcher;
