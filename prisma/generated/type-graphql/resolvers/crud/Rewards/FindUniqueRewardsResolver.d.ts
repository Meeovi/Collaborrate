import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRewardsArgs } from "./args/FindUniqueRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class FindUniqueRewardsResolver {
    findUniqueRewards(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRewardsArgs): Promise<Rewards | null>;
}
