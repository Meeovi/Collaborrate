import { GraphQLResolveInfo } from "graphql";
import { UpdateProduct_attribute_setArgs } from "./args/UpdateProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class UpdateProduct_attribute_setResolver {
    updateProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: UpdateProduct_attribute_setArgs): Promise<Product_attribute_set | null>;
}
