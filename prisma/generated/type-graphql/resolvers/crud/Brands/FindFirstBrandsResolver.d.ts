import { GraphQLResolveInfo } from "graphql";
import { FindFirstBrandsArgs } from "./args/FindFirstBrandsArgs";
import { Brands } from "../../../models/Brands";
export declare class FindFirstBrandsResolver {
    findFirstBrands(ctx: any, info: GraphQLResolveInfo, args: FindFirstBrandsArgs): Promise<Brands | null>;
}
