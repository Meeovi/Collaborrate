import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMessagesArgs } from "./args/UpdateManyMessagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMessagesResolver {
    updateManyMessages(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMessagesArgs): Promise<AffectedRowsOutput>;
}
