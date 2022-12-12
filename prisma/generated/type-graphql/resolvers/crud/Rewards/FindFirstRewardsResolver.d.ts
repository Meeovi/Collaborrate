import { GraphQLResolveInfo } from "graphql";
import { FindFirstRewardsArgs } from "./args/FindFirstRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class FindFirstRewardsResolver {
    findFirstRewards(ctx: any, info: GraphQLResolveInfo, args: FindFirstRewardsArgs): Promise<Rewards | null>;
}
