import { GraphQLResolveInfo } from "graphql";
import { UpsertProductsArgs } from "./args/UpsertProductsArgs";
import { Products } from "../../../models/Products";
export declare class UpsertProductsResolver {
    upsertProducts(ctx: any, info: GraphQLResolveInfo, args: UpsertProductsArgs): Promise<Products>;
}
