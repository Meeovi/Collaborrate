import { GraphQLResolveInfo } from "graphql";
import { UpdateProductsArgs } from "./args/UpdateProductsArgs";
import { Products } from "../../../models/Products";
export declare class UpdateProductsResolver {
    updateProducts(ctx: any, info: GraphQLResolveInfo, args: UpdateProductsArgs): Promise<Products | null>;
}
