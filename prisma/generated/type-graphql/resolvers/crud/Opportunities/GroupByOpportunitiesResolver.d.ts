import { GraphQLResolveInfo } from "graphql";
import { GroupByOpportunitiesArgs } from "./args/GroupByOpportunitiesArgs";
import { OpportunitiesGroupBy } from "../../outputs/OpportunitiesGroupBy";
export declare class GroupByOpportunitiesResolver {
    groupByOpportunities(ctx: any, info: GraphQLResolveInfo, args: GroupByOpportunitiesArgs): Promise<OpportunitiesGroupBy[]>;
}
