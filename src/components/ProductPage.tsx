import { useState, useMemo } from "react";
import { useTranslation } from "next-i18next";
import { useTheme } from "@/context/ThemeContext";
import dynamic from "next/dynamic";
import { Product } from "@/types";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const SelectedProduct = dynamic(() => import("./SelectedProduct"), { ssr: false });
const RecommendedProductsSlider = dynamic(() => import("./RecommendedProductsSlider"), { ssr: false });
const AllProducts = dynamic(() => import("./AllProducts"), { ssr: false });

// ✅ Define Props Type
interface ProductPageProps {
  products: Product[];
}

const ProductPage = ({ products }: ProductPageProps) => {
  const { t } = useTranslation("common");
  const { theme } = useTheme(); // Get current theme
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Optimize recommended products calculation
  const recommendedProducts = useMemo(
    () => products.filter((p) => p.id !== selectedProduct?.id),
    [products, selectedProduct]
  );

  return (
    <motion.div
      key={theme} // Re-animate when theme changes
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className={`container rounded mx-auto p-4 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Page Title Animation */}
      <motion.h1
        key={selectedProduct ? "details" : "products"}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-bold text-center mb-6"
      >
        {selectedProduct ? t("product-details") : t("products")}
      </motion.h1>

      <AnimatePresence mode="wait">
        {selectedProduct ? (
          <motion.div
            key="selected-product"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="border p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800"
          >
            <SelectedProduct
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
            />

            {/* Recommended Products Section */}
            <AnimatePresence>
              {recommendedProducts.length > 0 && (
                <motion.div
                  key="recommended-products"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <RecommendedProductsSlider
                    recommendedProducts={recommendedProducts}
                    onSelectProduct={setSelectedProduct}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="all-products"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <AllProducts
              products={products}
              onSelectProduct={setSelectedProduct}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductPage;
