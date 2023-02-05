import { GraphQLResolveInfo } from "graphql";
import { FindManyProduct_typesArgs } from "./args/FindManyProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
export declare class FindManyProduct_typesResolver {
    findManyProduct_types(ctx: any, info: GraphQLResolveInfo, args: FindManyProduct_typesArgs): Promise<Product_types[]>;
}
