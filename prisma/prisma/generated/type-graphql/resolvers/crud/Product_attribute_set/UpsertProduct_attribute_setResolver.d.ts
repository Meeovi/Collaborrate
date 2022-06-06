import { GraphQLResolveInfo } from "graphql";
import { UpsertProduct_attribute_setArgs } from "./args/UpsertProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class UpsertProduct_attribute_setResolver {
    upsertProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: UpsertProduct_attribute_setArgs): Promise<Product_attribute_set>;
}
