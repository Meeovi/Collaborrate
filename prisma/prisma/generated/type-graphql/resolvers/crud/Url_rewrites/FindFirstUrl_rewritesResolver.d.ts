import { GraphQLResolveInfo } from "graphql";
import { FindFirstUrl_rewritesArgs } from "./args/FindFirstUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class FindFirstUrl_rewritesResolver {
    findFirstUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: FindFirstUrl_rewritesArgs): Promise<Url_rewrites | null>;
}
