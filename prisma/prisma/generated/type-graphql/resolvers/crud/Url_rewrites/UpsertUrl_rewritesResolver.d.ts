import { GraphQLResolveInfo } from "graphql";
import { UpsertUrl_rewritesArgs } from "./args/UpsertUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class UpsertUrl_rewritesResolver {
    upsertUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpsertUrl_rewritesArgs): Promise<Url_rewrites>;
}
