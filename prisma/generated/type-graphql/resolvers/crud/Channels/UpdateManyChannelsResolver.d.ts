import { GraphQLResolveInfo } from "graphql";
import { UpdateManyChannelsArgs } from "./args/UpdateManyChannelsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyChannelsResolver {
    updateManyChannels(ctx: any, info: GraphQLResolveInfo, args: UpdateManyChannelsArgs): Promise<AffectedRowsOutput>;
}
