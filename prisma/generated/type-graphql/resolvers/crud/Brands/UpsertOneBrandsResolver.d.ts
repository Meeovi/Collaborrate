import { GraphQLResolveInfo } from "graphql";
import { UpsertOneBrandsArgs } from "./args/UpsertOneBrandsArgs";
import { Brands } from "../../../models/Brands";
export declare class UpsertOneBrandsResolver {
    upsertOneBrands(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBrandsArgs): Promise<Brands>;
}
