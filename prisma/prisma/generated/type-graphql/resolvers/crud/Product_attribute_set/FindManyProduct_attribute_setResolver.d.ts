import { GraphQLResolveInfo } from "graphql";
import { FindManyProduct_attribute_setArgs } from "./args/FindManyProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class FindManyProduct_attribute_setResolver {
    product_attribute_sets(ctx: any, info: GraphQLResolveInfo, args: FindManyProduct_attribute_setArgs): Promise<Product_attribute_set[]>;
}
