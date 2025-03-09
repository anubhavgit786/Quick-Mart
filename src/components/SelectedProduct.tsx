import Image from "next/image";
import { formatCurrency } from "@/utils/currencyFormatter";
import { FaArrowLeft } from "react-icons/fa";
import { useLanguageCurrency } from "@/context/LanguageCurrencyContext";
import { useTranslation } from "next-i18next";
import { useTheme } from "@/context/ThemeContext";
import { Product } from "@/types";
import { motion } from "framer-motion"; // Import Framer Motion

interface SelectedProductProps {
  selectedProduct: Product | null;
  onSelectProduct: (product: Product | null) => void;
}

const SelectedProduct: React.FC<SelectedProductProps> = ({ selectedProduct, onSelectProduct }) => {
  const { t } = useTranslation();
  const { currency, exchangeRate } = useLanguageCurrency();
  const { theme } = useTheme();

  if (!selectedProduct) return null; // Prevent rendering if no product is selected

  return (
    <motion.div
      key={`${theme}-${currency}-${selectedProduct.id}`} // Key changes trigger reanimation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Product Image Animation */}
      <motion.div
        key={selectedProduct.image}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={selectedProduct.image}
          alt={selectedProduct.title}
          width={300}
          height={300}
          loading="lazy"
          className="mx-auto mb-4 rounded-lg"
        />
      </motion.div>

      {/* Product Title */}
      <motion.h2
        key={selectedProduct.title}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl font-bold"
      >
        {t("product-title")} : {selectedProduct.title}
      </motion.h2>

      {/* Product Description */}
      <motion.p
        key={selectedProduct.description}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-500 dark:text-gray-300"
      >
        {t("product-description")} : {selectedProduct.description}
      </motion.p>

      {/* Product Price */}
      <motion.p
        key={currency}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-lg font-bold"
      >
        {t("product-price")} : {formatCurrency(selectedProduct.price * exchangeRate, currency)}
      </motion.p>

      {/* Back Button Animation */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelectProduct(null)}
        className="mt-4 flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-all duration-300"
      >
        <FaArrowLeft className="mr-2" /> {t("back-to-products")}
      </motion.button>
    </motion.div>
  );
};

export default SelectedProduct;
