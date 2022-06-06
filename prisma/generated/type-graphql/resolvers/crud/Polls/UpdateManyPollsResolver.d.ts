import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPollsArgs } from "./args/UpdateManyPollsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPollsResolver {
    updateManyPolls(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPollsArgs): Promise<AffectedRowsOutput>;
}
