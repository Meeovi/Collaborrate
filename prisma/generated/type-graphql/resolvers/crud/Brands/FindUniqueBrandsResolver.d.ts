import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBrandsArgs } from "./args/FindUniqueBrandsArgs";
import { Brands } from "../../../models/Brands";
export declare class FindUniqueBrandsResolver {
    findUniqueBrands(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBrandsArgs): Promise<Brands | null>;
}
