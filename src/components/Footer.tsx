import { useTranslation } from "react-i18next";

const Footer: React.FC = () => 
{
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} Quick Mart { t("all-rights-reserved") }</p>
    </footer>
  );
};

export default Footer;
