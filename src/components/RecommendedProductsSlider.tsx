import React from "react";
import Image from "next/image";
import { useLanguageCurrency } from "@/context/LanguageCurrencyContext";
import { useTranslation } from "next-i18next";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatCurrency } from "@/utils/currencyFormatter";
import { Product } from "@/types";
import { motion } from "framer-motion"; // Import Framer Motion

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

interface RecommendedProductsSliderProps {
  recommendedProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

const RecommendedProductsSlider: React.FC<RecommendedProductsSliderProps> = ({ recommendedProducts, onSelectProduct }) => {
  const { t } = useTranslation();
  const { currency, exchangeRate, isDirectionRTL } = useLanguageCurrency();
  const { theme } = useTheme(); // Get the current theme

  const sliderSettings = {
    dots: true, // Show pagination dots
    infinite: true, // Loop slides
    speed: 500, // Animation speed
    slidesToShow: 3, // Show 3 products at a time
    slidesToScroll: 1, // Scroll one product at a time
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
    rtl: isDirectionRTL, // Support for RTL languages
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // 2 products on tablets
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // 1 product on mobile
    ],
  };

  return (
    <motion.div
      key={`${theme}-${currency}`} // Animate on theme or currency change
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`mt-8 ${theme === "dark" ? "bg-gray-800 p-4 rounded" : ""}`}
    >
      {/* Title Animation */}
      <motion.h2
        key={t("recommended-products")}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`text-xl font-bold mb-4 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-gray-900"
          }`}
      >
        {t("recommended-products")}
      </motion.h2>

      {/* Slider (Ensure Horizontal Display) */}
      <Slider {...sliderSettings} className="overflow-hidden">
        {recommendedProducts.map((product, index) => (
          <div key={product.id} className="px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`p-4 border rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"
                }`}
            >
              {/* Product Image */}
              <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                  layout="intrinsic"
                  priority={index === 0}
                  className="rounded object-contain max-h-full"
                />
              </div>

              {/* Product Title */}
              <motion.p
                key={product.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 text-center font-medium leading-tight ${theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
              >
                {t("product-title")} :{" "}
                {product.title.length > 35 ? product.title.slice(0, 35) + "..." : product.title}
              </motion.p>


              {/* Product Price */}
              <motion.p
                key={currency}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`text-center font-bold ${theme === "dark" ? "text-gray-200" : "text-black"
                  }`}
              >
                {t("product-price")} : {formatCurrency(product.price * exchangeRate, currency)}
              </motion.p>

              {/* View Product Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectProduct(product)}
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded w-full transition-all duration-300"
              >
                {t("view-product")}
              </motion.button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default RecommendedProductsSlider;
