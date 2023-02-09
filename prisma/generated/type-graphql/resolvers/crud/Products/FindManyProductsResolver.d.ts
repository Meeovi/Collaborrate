import { GraphQLResolveInfo } from "graphql";
import { FindManyProductsArgs } from "./args/FindManyProductsArgs";
import { Products } from "../../../models/Products";
export declare class FindManyProductsResolver {
    findManyProducts(ctx: any, info: GraphQLResolveInfo, args: FindManyProductsArgs): Promise<Products[]>;
}
