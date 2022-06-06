import { GraphQLResolveInfo } from "graphql";
import { DeleteReward_pointsArgs } from "./args/DeleteReward_pointsArgs";
import { Reward_points } from "../../../models/Reward_points";
export declare class DeleteReward_pointsResolver {
    deleteReward_points(ctx: any, info: GraphQLResolveInfo, args: DeleteReward_pointsArgs): Promise<Reward_points | null>;
}
