import { GraphQLResolveInfo } from "graphql";
import { GroupByRewardsArgs } from "./args/GroupByRewardsArgs";
import { RewardsGroupBy } from "../../outputs/RewardsGroupBy";
export declare class GroupByRewardsResolver {
    groupByRewards(ctx: any, info: GraphQLResolveInfo, args: GroupByRewardsArgs): Promise<RewardsGroupBy[]>;
}
