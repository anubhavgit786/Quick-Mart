import React, { ReactNode } from "react";
import { useLanguageCurrency } from "@/context/LanguageCurrencyContext";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => 
{
  const { isDirectionRTL } = useLanguageCurrency(); // Only using `language` for layout direction

  return (
    <div className={ isDirectionRTL ? "rtl" : "ltr"}>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
