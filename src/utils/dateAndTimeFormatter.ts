import { languageToLocaleMap, languageToTimeZoneMap } from "@/config/constants";

export const formatDateAndTime = (language: string) => 
{
    const locale = languageToLocaleMap[language] || "en-US";  // Default to English (US)
    const timeZone = languageToTimeZoneMap[language] || "UTC"; // Default to UTC
    
    return new Intl.DateTimeFormat(locale, 
    {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: timeZone
    }).format(new Date());;
};