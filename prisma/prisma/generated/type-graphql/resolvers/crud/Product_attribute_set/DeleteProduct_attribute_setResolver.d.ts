import { GraphQLResolveInfo } from "graphql";
import { DeleteProduct_attribute_setArgs } from "./args/DeleteProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class DeleteProduct_attribute_setResolver {
    deleteProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: DeleteProduct_attribute_setArgs): Promise<Product_attribute_set | null>;
}
