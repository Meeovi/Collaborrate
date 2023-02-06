import { GraphQLResolveInfo } from "graphql";
import { DeleteOneRewardsArgs } from "./args/DeleteOneRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class DeleteOneRewardsResolver {
    deleteOneRewards(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRewardsArgs): Promise<Rewards | null>;
}
