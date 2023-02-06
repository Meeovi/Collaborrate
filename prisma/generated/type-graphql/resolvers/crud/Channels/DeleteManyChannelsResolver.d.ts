import { GraphQLResolveInfo } from "graphql";
import { DeleteManyChannelsArgs } from "./args/DeleteManyChannelsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyChannelsResolver {
    deleteManyChannels(ctx: any, info: GraphQLResolveInfo, args: DeleteManyChannelsArgs): Promise<AffectedRowsOutput>;
}
