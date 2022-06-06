import { GraphQLResolveInfo } from "graphql";
import { UpdateReward_pointsArgs } from "./args/UpdateReward_pointsArgs";
import { Reward_points } from "../../../models/Reward_points";
export declare class UpdateReward_pointsResolver {
    updateReward_points(ctx: any, info: GraphQLResolveInfo, args: UpdateReward_pointsArgs): Promise<Reward_points | null>;
}
