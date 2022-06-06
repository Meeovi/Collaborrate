import { Product_attribute } from "../models/Product_attribute";
export declare class Product_attribute_set {
    id: number;
    name: string;
    based_on?: string | null;
    attribute_id: number;
    product_attribute?: Product_attribute;
}
