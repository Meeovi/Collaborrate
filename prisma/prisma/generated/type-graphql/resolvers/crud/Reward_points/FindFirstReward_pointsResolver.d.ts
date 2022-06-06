import { GraphQLResolveInfo } from "graphql";
import { FindFirstReward_pointsArgs } from "./args/FindFirstReward_pointsArgs";
import { Reward_points } from "../../../models/Reward_points";
export declare class FindFirstReward_pointsResolver {
    findFirstReward_points(ctx: any, info: GraphQLResolveInfo, args: FindFirstReward_pointsArgs): Promise<Reward_points | null>;
}
