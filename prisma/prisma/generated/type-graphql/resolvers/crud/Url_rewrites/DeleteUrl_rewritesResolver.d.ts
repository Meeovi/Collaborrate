import { GraphQLResolveInfo } from "graphql";
import { DeleteUrl_rewritesArgs } from "./args/DeleteUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class DeleteUrl_rewritesResolver {
    deleteUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: DeleteUrl_rewritesArgs): Promise<Url_rewrites | null>;
}
