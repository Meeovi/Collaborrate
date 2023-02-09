import { GraphQLResolveInfo } from "graphql";
import { CreateOneProductsArgs } from "./args/CreateOneProductsArgs";
import { Products } from "../../../models/Products";
export declare class CreateOneProductsResolver {
    createOneProducts(ctx: any, info: GraphQLResolveInfo, args: CreateOneProductsArgs): Promise<Products>;
}
