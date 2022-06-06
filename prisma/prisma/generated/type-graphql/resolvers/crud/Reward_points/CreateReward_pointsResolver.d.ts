import { GraphQLResolveInfo } from "graphql";
import { CreateReward_pointsArgs } from "./args/CreateReward_pointsArgs";
import { Reward_points } from "../../../models/Reward_points";
export declare class CreateReward_pointsResolver {
    createReward_points(ctx: any, info: GraphQLResolveInfo, args: CreateReward_pointsArgs): Promise<Reward_points>;
}
