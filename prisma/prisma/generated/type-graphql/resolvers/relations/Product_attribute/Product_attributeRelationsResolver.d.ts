import { Product_attribute } from "../../../models/Product_attribute";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
import { Products } from "../../../models/Products";
import { Product_attributeProduct_attribute_setArgs } from "./args/Product_attributeProduct_attribute_setArgs";
export declare class Product_attributeRelationsResolver {
    products(product_attribute: Product_attribute, ctx: any): Promise<Products>;
    product_attribute_set(product_attribute: Product_attribute, ctx: any, args: Product_attributeProduct_attribute_setArgs): Promise<Product_attribute_set[]>;
}
