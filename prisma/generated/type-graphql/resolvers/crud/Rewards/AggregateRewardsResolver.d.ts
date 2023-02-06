import { GraphQLResolveInfo } from "graphql";
import { AggregateRewardsArgs } from "./args/AggregateRewardsArgs";
import { AggregateRewards } from "../../outputs/AggregateRewards";
export declare class AggregateRewardsResolver {
    aggregateRewards(ctx: any, info: GraphQLResolveInfo, args: AggregateRewardsArgs): Promise<AggregateRewards>;
}
