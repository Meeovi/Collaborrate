import { GraphQLResolveInfo } from "graphql";
import { GroupByReward_pointsArgs } from "./args/GroupByReward_pointsArgs";
import { Reward_pointsGroupBy } from "../../outputs/Reward_pointsGroupBy";
export declare class GroupByReward_pointsResolver {
    groupByReward_points(ctx: any, info: GraphQLResolveInfo, args: GroupByReward_pointsArgs): Promise<Reward_pointsGroupBy[]>;
}
