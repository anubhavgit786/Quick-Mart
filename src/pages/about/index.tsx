import { useEffect, useState } from "react"; 
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useLanguageCurrency } from "@/context/LanguageCurrencyContext";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme
import { DEFAULT_LANGUAGE } from "@/config/constants";
import { formatDateAndTime } from "@/utils/dateAndTimeFormatter";
import Head from "next/head";
import { motion } from "framer-motion"; // Import Framer Motion

const AboutUs = () => {
    const { t } = useTranslation();
    const { language } = useLanguageCurrency();
    const { theme } = useTheme(); // Get current theme
    const [currentDateTime, setCurrentDateTime] = useState<string>(formatDateAndTime(language));

    // Update the date and time immediately when language changes
    useEffect(() => {
        setCurrentDateTime(formatDateAndTime(language)); // ✅ Update immediately when language changes

        const interval = setInterval(() => {
            setCurrentDateTime(formatDateAndTime(language)); // Update every second
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval
    }, [language]); // ✅ Re-run when language changes

    return (
        <>
            <Head>
                <title>Quick Mart : About Us </title>
                <meta name="description" content="Best products at the best prices" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={`${theme}-${language}`} // Re-animate when theme or language changes
                    className={`max-w-4xl mx-auto mt-24 p-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
                >
                    {/* About Us Title */}
                    <motion.h1 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl font-bold text-center mb-6"
                    >
                        {t("about-us-title")}
                    </motion.h1>

                    {/* Our Journey Section */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mb-6"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{t("our-journey-title")}</h2>
                        <p className={`mb-4 transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t("about-us-history-1")}</p>
                        <p className={`mb-4 transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t("about-us-history-2")}</p>
                    </motion.section>

                    {/* Our Mission & Values Section */}
                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="mb-6"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{t("our-mission-values-title")}</h2>
                        <p className={`mb-4 transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t("about-us-history-3")}</p>
                        <p className={`transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t("about-us-history-4")}</p>
                    </motion.section>

                    {/* Contact Information */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className={`border-t pt-6 mt-6 transition-colors duration-300 ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                    >
                        <h2 className="text-2xl font-semibold mb-4">{t("contact-title")}</h2>
                        <p>
                            <strong>{t("contact-address")}:</strong> {t("company-address")}
                        </p>
                        <p>
                            <strong>{t("contact-phone")}:</strong> {t("company-phone")}
                        </p>
                        <p>
                            <strong>{t("contact-email")}:</strong> {t("company-email")}
                        </p>

                        {/* Localized Date & Time */}
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className={`mt-4 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                        >
                            <strong>{currentDateTime}</strong> 
                        </motion.p>
                    </motion.section>
                </motion.main>
            </>
        </>
    );
};

export default AboutUs;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || DEFAULT_LANGUAGE, ["common"])), 
        },
    };
};
