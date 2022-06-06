import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReward_pointsArgs } from "./args/FindUniqueReward_pointsArgs";
import { Reward_points } from "../../../models/Reward_points";
export declare class FindUniqueReward_pointsResolver {
    findUniqueReward_points(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReward_pointsArgs): Promise<Reward_points | null>;
}
