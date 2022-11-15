import { GraphQLResolveInfo } from "graphql";
import { FindFirstProductsOrThrowArgs } from "./args/FindFirstProductsOrThrowArgs";
import { Products } from "../../../models/Products";
export declare class FindFirstProductsOrThrowResolver {
    findFirstProductsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductsOrThrowArgs): Promise<Products | null>;
}
