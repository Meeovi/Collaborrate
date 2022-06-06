import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProduct_attribute_setArgs } from "./args/FindUniqueProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class FindUniqueProduct_attribute_setResolver {
    product_attribute_set(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProduct_attribute_setArgs): Promise<Product_attribute_set | null>;
}
