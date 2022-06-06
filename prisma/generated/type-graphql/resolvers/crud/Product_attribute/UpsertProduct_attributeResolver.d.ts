import { GraphQLResolveInfo } from "graphql";
import { UpsertProduct_attributeArgs } from "./args/UpsertProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class UpsertProduct_attributeResolver {
    upsertProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: UpsertProduct_attributeArgs): Promise<Product_attribute>;
}
