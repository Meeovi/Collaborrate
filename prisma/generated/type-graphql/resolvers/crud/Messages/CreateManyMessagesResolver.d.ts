import { GraphQLResolveInfo } from "graphql";
import { CreateManyMessagesArgs } from "./args/CreateManyMessagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMessagesResolver {
    createManyMessages(ctx: any, info: GraphQLResolveInfo, args: CreateManyMessagesArgs): Promise<AffectedRowsOutput>;
}
