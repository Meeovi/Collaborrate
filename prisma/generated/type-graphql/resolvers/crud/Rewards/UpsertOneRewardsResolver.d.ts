import { GraphQLResolveInfo } from "graphql";
import { UpsertOneRewardsArgs } from "./args/UpsertOneRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class UpsertOneRewardsResolver {
    upsertOneRewards(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRewardsArgs): Promise<Rewards>;
}
