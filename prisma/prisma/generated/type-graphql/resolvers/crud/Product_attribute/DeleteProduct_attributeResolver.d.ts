import { GraphQLResolveInfo } from "graphql";
import { DeleteProduct_attributeArgs } from "./args/DeleteProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class DeleteProduct_attributeResolver {
    deleteProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: DeleteProduct_attributeArgs): Promise<Product_attribute | null>;
}
