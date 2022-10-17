import { GraphQLResolveInfo } from "graphql";
import { GroupByEndofshiftArgs } from "./args/GroupByEndofshiftArgs";
import { EndofshiftGroupBy } from "../../outputs/EndofshiftGroupBy";
export declare class GroupByEndofshiftResolver {
    groupByEndofshift(ctx: any, info: GraphQLResolveInfo, args: GroupByEndofshiftArgs): Promise<EndofshiftGroupBy[]>;
}
