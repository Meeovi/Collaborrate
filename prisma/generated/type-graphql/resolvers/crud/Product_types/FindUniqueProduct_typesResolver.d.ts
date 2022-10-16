import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProduct_typesArgs } from "./args/FindUniqueProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
export declare class FindUniqueProduct_typesResolver {
    findUniqueProduct_types(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProduct_typesArgs): Promise<Product_types | null>;
}
