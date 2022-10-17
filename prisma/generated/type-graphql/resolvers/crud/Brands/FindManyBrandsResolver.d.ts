import { GraphQLResolveInfo } from "graphql";
import { FindManyBrandsArgs } from "./args/FindManyBrandsArgs";
import { Brands } from "../../../models/Brands";
export declare class FindManyBrandsResolver {
    findManyBrands(ctx: any, info: GraphQLResolveInfo, args: FindManyBrandsArgs): Promise<Brands[]>;
}
