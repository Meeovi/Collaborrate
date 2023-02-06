import { GraphQLResolveInfo } from "graphql";
import { DeleteOneProduct_typesArgs } from "./args/DeleteOneProduct_typesArgs";
import { Product_types } from "../../../models/Product_types";
export declare class DeleteOneProduct_typesResolver {
    deleteOneProduct_types(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProduct_typesArgs): Promise<Product_types | null>;
}
