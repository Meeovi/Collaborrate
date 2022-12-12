import { GraphQLResolveInfo } from "graphql";
import { FindFirstProduct_typesOrThrowArgs } from "./args/FindFirstProduct_typesOrThrowArgs";
import { Product_types } from "../../../models/Product_types";
export declare class FindFirstProduct_typesOrThrowResolver {
    findFirstProduct_typesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProduct_typesOrThrowArgs): Promise<Product_types | null>;
}
