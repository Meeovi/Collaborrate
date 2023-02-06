import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRewardsArgs } from "./args/DeleteManyRewardsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRewardsResolver {
    deleteManyRewards(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRewardsArgs): Promise<AffectedRowsOutput>;
}
