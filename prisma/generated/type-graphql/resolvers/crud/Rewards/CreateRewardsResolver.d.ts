import { GraphQLResolveInfo } from "graphql";
import { CreateRewardsArgs } from "./args/CreateRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class CreateRewardsResolver {
    createRewards(ctx: any, info: GraphQLResolveInfo, args: CreateRewardsArgs): Promise<Rewards>;
}
