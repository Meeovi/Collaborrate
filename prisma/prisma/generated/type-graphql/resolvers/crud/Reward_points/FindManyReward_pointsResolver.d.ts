import { GraphQLResolveInfo } from "graphql";
import { FindManyReward_pointsArgs } from "./args/FindManyReward_pointsArgs";
import { Reward_points } from "../../../models/Reward_points";
export declare class FindManyReward_pointsResolver {
    findManyReward_points(ctx: any, info: GraphQLResolveInfo, args: FindManyReward_pointsArgs): Promise<Reward_points[]>;
}
