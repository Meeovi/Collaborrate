import { GraphQLResolveInfo } from "graphql";
import { CreateUrl_rewritesArgs } from "./args/CreateUrl_rewritesArgs";
import { Url_rewrites } from "../../../models/Url_rewrites";
export declare class CreateUrl_rewritesResolver {
    createUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: CreateUrl_rewritesArgs): Promise<Url_rewrites>;
}
