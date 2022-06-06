import { Product_attributeOrderByWithRelationInput } from "../inputs/Product_attributeOrderByWithRelationInput";
export declare class Product_attribute_setOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    based_on?: "asc" | "desc" | undefined;
    attribute_id?: "asc" | "desc" | undefined;
    product_attribute?: Product_attributeOrderByWithRelationInput | undefined;
}
