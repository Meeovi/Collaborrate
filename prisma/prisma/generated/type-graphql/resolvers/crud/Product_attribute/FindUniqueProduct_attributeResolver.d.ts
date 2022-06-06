import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProduct_attributeArgs } from "./args/FindUniqueProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class FindUniqueProduct_attributeResolver {
    product_attribute(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProduct_attributeArgs): Promise<Product_attribute | null>;
}
