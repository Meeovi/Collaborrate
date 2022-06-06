import { GraphQLResolveInfo } from "graphql";
import { FindManyUrl_rewritesArgs } from "./args/FindManyUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class FindManyUrl_rewritesResolver {
    findManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: FindManyUrl_rewritesArgs): Promise<Url_rewrites[]>;
}
