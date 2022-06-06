import { GraphQLResolveInfo } from "graphql";
import { CreateProductsArgs } from "./args/CreateProductsArgs";
import { Products } from "../../../models/Products";
export declare class CreateProductsResolver {
    createProducts(ctx: any, info: GraphQLResolveInfo, args: CreateProductsArgs): Promise<Products>;
}
