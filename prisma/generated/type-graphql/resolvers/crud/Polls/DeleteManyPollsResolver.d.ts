import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPollsArgs } from "./args/DeleteManyPollsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPollsResolver {
    deleteManyPolls(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPollsArgs): Promise<AffectedRowsOutput>;
}
