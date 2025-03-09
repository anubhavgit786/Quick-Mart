import { ProductCategory } from "@/config/constants";

export const findCategory = (category: string): string | undefined => {
    const categoryMap: Record<string, string> = {
        [ProductCategory.MENS_CLOTHING]: "promo-mens-clothing",
        [ProductCategory.WOMENS_CLOTHING]: "promo-womens-clothing",
        [ProductCategory.ELECTRONICS]: "promo-electronics",
        [ProductCategory.JEWELRY]: "promo-jewelery",
    };

    return categoryMap[category];
};
