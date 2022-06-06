import { GraphQLResolveInfo } from "graphql";
import { DeleteProductsArgs } from "./args/DeleteProductsArgs";
import { Products } from "../../../models/Products";
export declare class DeleteProductsResolver {
    deleteProducts(ctx: any, info: GraphQLResolveInfo, args: DeleteProductsArgs): Promise<Products | null>;
}
