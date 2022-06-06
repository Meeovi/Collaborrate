import { GraphQLResolveInfo } from "graphql";
import { UpdateProduct_attributeArgs } from "./args/UpdateProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class UpdateProduct_attributeResolver {
    updateProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: UpdateProduct_attributeArgs): Promise<Product_attribute | null>;
}
