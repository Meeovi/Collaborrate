import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductsArgs } from "./args/FindUniqueProductsArgs";
import { Products } from "../../../models/Products";
export declare class FindUniqueProductsResolver {
    findUniqueProducts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductsArgs): Promise<Products | null>;
}
