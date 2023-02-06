import { GraphQLResolveInfo } from "graphql";
import { CreateManyChannelsArgs } from "./args/CreateManyChannelsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyChannelsResolver {
    createManyChannels(ctx: any, info: GraphQLResolveInfo, args: CreateManyChannelsArgs): Promise<AffectedRowsOutput>;
}
