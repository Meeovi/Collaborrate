import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBrandsOrThrowArgs } from "./args/FindUniqueBrandsOrThrowArgs";
import { Brands } from "../../../models/Brands";
export declare class FindUniqueBrandsOrThrowResolver {
    findUniqueBrandsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBrandsOrThrowArgs): Promise<Brands | null>;
}
