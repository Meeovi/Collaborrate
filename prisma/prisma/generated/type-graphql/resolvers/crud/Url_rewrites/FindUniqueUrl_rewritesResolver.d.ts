import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUrl_rewritesArgs } from "./args/FindUniqueUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class FindUniqueUrl_rewritesResolver {
    findUniqueUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUrl_rewritesArgs): Promise<Url_rewrites | null>;
}
