import { GraphQLResolveInfo } from "graphql";
import { CreateManyPollsArgs } from "./args/CreateManyPollsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPollsResolver {
    createManyPolls(ctx: any, info: GraphQLResolveInfo, args: CreateManyPollsArgs): Promise<AffectedRowsOutput>;
}
