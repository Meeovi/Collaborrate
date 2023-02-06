import { GraphQLResolveInfo } from "graphql";
import { DeleteOneBrandsArgs } from "./args/DeleteOneBrandsArgs";
import { Brands } from "../../../models/Brands";
export declare class DeleteOneBrandsResolver {
    deleteOneBrands(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBrandsArgs): Promise<Brands | null>;
}
