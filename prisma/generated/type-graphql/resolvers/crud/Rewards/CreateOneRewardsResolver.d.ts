import { GraphQLResolveInfo } from "graphql";
import { CreateOneRewardsArgs } from "./args/CreateOneRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class CreateOneRewardsResolver {
    createOneRewards(ctx: any, info: GraphQLResolveInfo, args: CreateOneRewardsArgs): Promise<Rewards>;
}
