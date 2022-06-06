import { GraphQLResolveInfo } from "graphql";
import { FindFirstProduct_attributeArgs } from "./args/FindFirstProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class FindFirstProduct_attributeResolver {
    findFirstProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: FindFirstProduct_attributeArgs): Promise<Product_attribute | null>;
}
