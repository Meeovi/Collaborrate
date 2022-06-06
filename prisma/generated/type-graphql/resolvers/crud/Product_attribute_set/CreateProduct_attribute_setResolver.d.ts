import { GraphQLResolveInfo } from "graphql";
import { CreateProduct_attribute_setArgs } from "./args/CreateProduct_attribute_setArgs";
import { Product_attribute_set } from "../../../models/Product_attribute_set";
export declare class CreateProduct_attribute_setResolver {
    createProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: CreateProduct_attribute_setArgs): Promise<Product_attribute_set>;
}
