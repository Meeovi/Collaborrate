import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProduct_typesArgs } from "./args/UpsertOneProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
export declare class UpsertOneProduct_typesResolver {
    upsertOneProduct_types(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProduct_typesArgs): Promise<Product_types>;
}
