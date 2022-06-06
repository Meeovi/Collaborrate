import { GraphQLResolveInfo } from "graphql";
import { AggregateReward_pointsArgs } from "./args/AggregateReward_pointsArgs";
import { AggregateReward_points } from "../../outputs/AggregateReward_points";
export declare class AggregateReward_pointsResolver {
    aggregateReward_points(ctx: any, info: GraphQLResolveInfo, args: AggregateReward_pointsArgs): Promise<AggregateReward_points>;
}
