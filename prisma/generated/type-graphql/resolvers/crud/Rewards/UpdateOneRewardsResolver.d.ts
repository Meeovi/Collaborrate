import { GraphQLResolveInfo } from "graphql";
import { UpdateOneRewardsArgs } from "./args/UpdateOneRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class UpdateOneRewardsResolver {
    updateOneRewards(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRewardsArgs): Promise<Rewards | null>;
}
