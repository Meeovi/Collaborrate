import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductsOrThrowArgs } from "./args/FindUniqueProductsOrThrowArgs";
import { Products } from "../../../models/Products";
export declare class FindUniqueProductsOrThrowResolver {
    findUniqueProductsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductsOrThrowArgs): Promise<Products | null>;
}
