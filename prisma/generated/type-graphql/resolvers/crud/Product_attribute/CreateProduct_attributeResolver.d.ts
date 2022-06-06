import { GraphQLResolveInfo } from "graphql";
import { CreateProduct_attributeArgs } from "./args/CreateProduct_attributeArgs";
import { Product_attribute } from "../../../models/Product_attribute";
export declare class CreateProduct_attributeResolver {
    createProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: CreateProduct_attributeArgs): Promise<Product_attribute>;
}
