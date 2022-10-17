import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMessagesArgs } from "./args/DeleteManyMessagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMessagesResolver {
    deleteManyMessages(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMessagesArgs): Promise<AffectedRowsOutput>;
}
