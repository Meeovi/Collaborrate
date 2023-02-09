import { GraphQLResolveInfo } from "graphql";
import { FindManyRewardsArgs } from "./args/FindManyRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class FindManyRewardsResolver {
    findManyRewards(ctx: any, info: GraphQLResolveInfo, args: FindManyRewardsArgs): Promise<Rewards[]>;
}
