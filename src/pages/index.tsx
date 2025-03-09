import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANGUAGE } from "@/config/constants";
import { Product } from "@/types";
import Head from "next/head";
import ProductPage from "@/components/ProductPage";
import { motion } from "framer-motion"; // Import Framer Motion

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Quick Mart</title>
        <meta name="description" content="Best products at the best prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {/* Animate entire page */}
        <motion.main
          key={t("welcome")} // Trigger animation on language change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto p-4 mt-16"
        >
          {/* Animated Heading */}
          <motion.h1
            key={t("welcome")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-center mb-6"
          >
            {t("welcome")}
          </motion.h1>

          {/* Animate Product List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ProductPage products={products} />
          </motion.div>
        </motion.main>
      </>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => {
  const res = await fetch("https://fakestoreapi.com/products");

  // ✅ Handle API Errors
  if (!res.ok) {
    console.error("Failed to fetch products");
    return { props: { products: [] } }; // Return empty array if API fails
  }

  const products: Product[] = await res.json(); // ✅ Explicitly type fetched data

  return {
    props: {
      products,
      ...(await serverSideTranslations(locale || DEFAULT_LANGUAGE, ["common"])),
    },
  };
};
