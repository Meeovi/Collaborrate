import { GraphQLResolveInfo } from "graphql";
import { FindFirstProduct_typesArgs } from "./args/FindFirstProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
export declare class FindFirstProduct_typesResolver {
    findFirstProduct_types(ctx: any, info: GraphQLResolveInfo, args: FindFirstProduct_typesArgs): Promise<Product_types | null>;
}
