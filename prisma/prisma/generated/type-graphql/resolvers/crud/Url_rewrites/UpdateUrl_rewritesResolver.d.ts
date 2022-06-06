import { GraphQLResolveInfo } from "graphql";
import { UpdateUrl_rewritesArgs } from "./args/UpdateUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class UpdateUrl_rewritesResolver {
    updateUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpdateUrl_rewritesArgs): Promise<Url_rewrites | null>;
}
