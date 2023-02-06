import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProductsArgs } from "./args/DeleteOneProductsArgs";
import { Products } from "../../../models/Products";
export declare class DeleteOneProductsResolver {
    deleteOneProducts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProductsArgs): Promise<Products | null>;
}
