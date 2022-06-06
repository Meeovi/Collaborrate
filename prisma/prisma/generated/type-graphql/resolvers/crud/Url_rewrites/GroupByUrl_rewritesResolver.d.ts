import { GraphQLResolveInfo } from "graphql";
import { GroupByUrl_rewritesArgs } from "./args/GroupByUrl_rewritesArgs";
import { Url_rewritesGroupBy } from "../../outputs/Url_rewritesGroupBy";
export declare class GroupByUrl_rewritesResolver {
    groupByUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: GroupByUrl_rewritesArgs): Promise<Url_rewritesGroupBy[]>;
}
