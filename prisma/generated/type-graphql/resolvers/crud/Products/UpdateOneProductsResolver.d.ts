import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProductsArgs } from "./args/UpdateOneProductsArgs";
import { Products } from "../../../models/Products";
export declare class UpdateOneProductsResolver {
    updateOneProducts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProductsArgs): Promise<Products | null>;
}
