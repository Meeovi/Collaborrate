import { GraphQLResolveInfo } from "graphql";
import { FindManyProduct_attributeArgs } from "./args/FindManyProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class FindManyProduct_attributeResolver {
    product_attributes(ctx: any, info: GraphQLResolveInfo, args: FindManyProduct_attributeArgs): Promise<Product_attribute[]>;
}
