import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProductsArgs } from "./args/UpsertOneProductsArgs";
import { Products } from "../../../models/Products";
export declare class UpsertOneProductsResolver {
    upsertOneProducts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProductsArgs): Promise<Products>;
}
