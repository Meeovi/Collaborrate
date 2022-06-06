import { GraphQLResolveInfo } from "graphql";
import { UpsertReward_pointsArgs } from "./args/UpsertReward_pointsArgs";
import { Reward_points } from "../../../models/Reward_points";
export declare class UpsertReward_pointsResolver {
    upsertReward_points(ctx: any, info: GraphQLResolveInfo, args: UpsertReward_pointsArgs): Promise<Reward_points>;
}
