import { GraphQLResolveInfo } from "graphql";
import { FindFirstProductsArgs } from "./args/FindFirstProductsArgs";
import { Products } from "../../../models/Products";
export declare class FindFirstProductsResolver {
    findFirstProducts(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductsArgs): Promise<Products | null>;
}
