import { GraphQLResolveInfo } from "graphql";
import { UpsertRewardsArgs } from "./args/UpsertRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class UpsertRewardsResolver {
    upsertRewards(ctx: any, info: GraphQLResolveInfo, args: UpsertRewardsArgs): Promise<Rewards>;
}
