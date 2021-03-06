export interface RestShops {
    version: string;
    kind: string;
    data: Array<RestShop>;
}

export interface RestShop {
    organization_name: string;
    description: string;
    address: string;
    administrative_area: string;
    postal_code: string;
    telephone: string;
    email: string | null;
    category: ShopCategory;
    img: Array<string>;
    website?: string;
}


export enum ShopCategory {
    Barber = "barber",
    Cafes = "cafes",
    Supermarkets = "supermarkets"
}
