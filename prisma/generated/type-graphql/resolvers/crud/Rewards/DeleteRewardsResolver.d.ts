import { GraphQLResolveInfo } from "graphql";
import { DeleteRewardsArgs } from "./args/DeleteRewardsArgs";
import { Rewards } from "../../../models/Rewards";
export declare class DeleteRewardsResolver {
    deleteRewards(ctx: any, info: GraphQLResolveInfo, args: DeleteRewardsArgs): Promise<Rewards | null>;
}
