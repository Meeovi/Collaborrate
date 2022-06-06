import { GraphQLResolveInfo } from "graphql";
import { GroupBySourceArgs } from "./args/GroupBySourceArgs";
import { SourceGroupBy } from "../../outputs/SourceGroupBy";
export declare class GroupBySourceResolver {
    groupBySource(ctx: any, info: GraphQLResolveInfo, args: GroupBySourceArgs): Promise<SourceGroupBy[]>;
}
