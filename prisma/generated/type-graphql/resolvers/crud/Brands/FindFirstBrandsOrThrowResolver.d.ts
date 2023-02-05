import { GraphQLResolveInfo } from "graphql";
import { FindFirstBrandsOrThrowArgs } from "./args/FindFirstBrandsOrThrowArgs";
import { Brands } from "../../../models/Brands";
export declare class FindFirstBrandsOrThrowResolver {
    findFirstBrandsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBrandsOrThrowArgs): Promise<Brands | null>;
}
