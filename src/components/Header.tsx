import React from "react";
import LanguageCurrencySwitcher from "./LanguageCurrencySwitcher";
import ThemeSwitcher from "./ThemeSwitcher"; // Import ThemeSwitcher
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo and Home Link */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-2xl font-bold">
          🌍 Quick Mart
        </Link>
        {/* About Page Link */}
        <Link href="/about" className="text-lg hover:underline">
          About Us
        </Link>
      </div>

      {/* Language, Currency, and Theme Switchers */}
      <div className="flex items-center space-x-4">
        <LanguageCurrencySwitcher />
        <ThemeSwitcher /> {/* Added ThemeSwitcher here */}
      </div>
    </header>
  );
};

export default Header;
