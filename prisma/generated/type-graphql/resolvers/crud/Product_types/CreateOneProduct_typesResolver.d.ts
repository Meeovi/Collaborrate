import { GraphQLResolveInfo } from "graphql";
import { CreateOneProduct_typesArgs } from "./args/CreateOneProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
export declare class CreateOneProduct_typesResolver {
    createOneProduct_types(ctx: any, info: GraphQLResolveInfo, args: CreateOneProduct_typesArgs): Promise<Product_types>;
}
