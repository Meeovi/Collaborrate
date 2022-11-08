import { GraphQLResolveInfo } from "graphql";
import { UpdateOneBrandsArgs } from "./args/UpdateOneBrandsArgs";
import { Brands } from "../../../models/Brands";
export declare class UpdateOneBrandsResolver {
    updateOneBrands(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBrandsArgs): Promise<Brands | null>;
}
