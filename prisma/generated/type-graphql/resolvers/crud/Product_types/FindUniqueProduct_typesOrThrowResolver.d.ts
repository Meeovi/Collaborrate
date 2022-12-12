import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProduct_typesOrThrowArgs } from "./args/FindUniqueProduct_typesOrThrowArgs";
import { Product_types } from "../../../models/Product_types";
export declare class FindUniqueProduct_typesOrThrowResolver {
    findUniqueProduct_typesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProduct_typesOrThrowArgs): Promise<Product_types | null>;
}
