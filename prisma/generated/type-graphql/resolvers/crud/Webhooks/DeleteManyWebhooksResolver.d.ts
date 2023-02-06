import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWebhooksArgs } from "./args/DeleteManyWebhooksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWebhooksResolver {
    deleteManyWebhooks(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWebhooksArgs): Promise<AffectedRowsOutput>;
}
