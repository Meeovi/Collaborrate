import { GraphQLResolveInfo } from "graphql";
import { UpdateRewardsArgs } from "./args/UpdateRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class UpdateRewardsResolver {
    updateRewards(ctx: any, info: GraphQLResolveInfo, args: UpdateRewardsArgs): Promise<Rewards | null>;
}
