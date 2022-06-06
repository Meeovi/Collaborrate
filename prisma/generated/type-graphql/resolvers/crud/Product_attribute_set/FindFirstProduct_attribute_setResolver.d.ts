import { GraphQLResolveInfo } from "graphql";
import { FindFirstProduct_attribute_setArgs } from "./args/FindFirstProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class FindFirstProduct_attribute_setResolver {
    findFirstProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: FindFirstProduct_attribute_setArgs): Promise<Product_attribute_set | null>;
}
