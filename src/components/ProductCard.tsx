import { useTranslation } from "next-i18next";
import { Product } from "@/types";
import { useLanguageCurrency } from "@/context/LanguageCurrencyContext";
import { formatCurrency } from "@/utils/currencyFormatter";
import { findCategory } from "@/utils/categoryFinder";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

type ProductCardProps = {
  product: Product;
  onSelectProduct: (product: Product) => void;
};

const ProductCard = ({ product, onSelectProduct }: ProductCardProps) => {
  const category = findCategory(product.category) || "unknown";
  const { t } = useTranslation();
  const { currency, exchangeRate } = useLanguageCurrency();

  return (
    <motion.div
      key={`${currency}-${exchangeRate}`} // Ensures re-animation when currency changes
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="border relative rounded-lg p-4 shadow-md hover:shadow-lg transition overflow-hidden bg-white dark:bg-gray-900 dark:text-white"
    >
      {/* Category Label with Animation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[200px] z-[35] p-4 absolute text-center text-gray-50 top-[25px] left-[-50px] bg-[#6ab04c] rotate-[-45deg]"
      >
        {t(category)}
      </motion.div>

      {/* Product Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image 
          src={product.image} 
          alt={product.title} 
          width={150} 
          height={150} 
          layout="intrinsic" 
          className="mx-auto" 
        />
      </motion.div>

      {/* Product Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-lg font-semibold mt-2"
      >
        {t("product-title")} : {product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}
      </motion.h2>

      {/* Product Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-sm text-gray-500 dark:text-gray-300"
      >
        {t("product-description")} : {product.description.length > 50 ? product.description.slice(0, 50) + "..." : product.description}
      </motion.p>

      {/* Product Price with Currency Transition */}
      <motion.p
        key={`${currency}-${exchangeRate}`} // Re-animate on currency change
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-md font-bold mt-2"
      >
        {t("product-price")} : {formatCurrency(product.price * exchangeRate, currency)}
      </motion.p>

      {/* View Details Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={() => onSelectProduct(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-600"
      >
        {t("view-details")}
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
