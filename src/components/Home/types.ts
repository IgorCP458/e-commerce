interface ProductType {
    id: number;
    title: string;
    price: number;
}

interface ProductListType {
    id: number;
    name: string;
    active: boolean;
}

interface HeroType {
    title: string;
    
}

interface CategoryType {
    categorie: string;
}

export type {ProductType, ProductListType, HeroType, CategoryType}