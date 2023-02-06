import { GraphQLResolveInfo } from "graphql";
import { UpdateOneProduct_typesArgs } from "./args/UpdateOneProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
export declare class UpdateOneProduct_typesResolver {
    updateOneProduct_types(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProduct_typesArgs): Promise<Product_types | null>;
}
