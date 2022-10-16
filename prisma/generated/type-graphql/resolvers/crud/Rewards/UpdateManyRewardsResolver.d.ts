import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRewardsArgs } from "./args/UpdateManyRewardsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRewardsResolver {
    updateManyRewards(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRewardsArgs): Promise<AffectedRowsOutput>;
}
